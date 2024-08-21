import React from 'react'
import { SingleCoin } from '../../config/Api'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../../cryptoContext';
import { LinearProgress } from '@mui/material';
import { HistoricalChart } from '../../config/Api';
import ChartComp from '../../component/chartComp';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { merge } from 'chart.js/helpers';

export default function cryptoDetail() {
    const { id } = useParams();
    const [coin, setCoin] = React.useState()
    const { currency, symbol, coins, user, watchlist, nftWatchlist, transactionArray } = CryptoState()
    const [loading, setLoading] = React.useState(false)
    const options = { maximumFractionDigits: 2 }
    const [fiatcurrencyValue, SetFiatcurrencyValue] = React.useState(0)
    const [cryptocurrencyValue, setCryptocurrencyValue] = React.useState(0)
    const [fiatCurrency, SetFiatCurrency] = React.useState('inr')
    const coinCurrentPrice = coin?.market_data.current_price[fiatCurrency]
    const date = new Date()
    const inWatchlist = watchlist && watchlist?.includes(coin?.id)
    const serverTimeStamp = serverTimestamp()

    const transactionData = {
        'SelectedCoin': id,
        'selectedCurrency': fiatCurrency,
        'coinAmount': cryptocurrencyValue,
        'currencyAmount': fiatcurrencyValue,
        'date': date.toLocaleDateString(),
        'time': date.toLocaleTimeString(),
        'paymentType': ''
    }


    const fetchCoinData = async () => {
        setLoading(true)
        const response = await fetch(SingleCoin(id));
        const data = await response.json()
        setCoin(data)
        setLoading(false)
    }



    React.useEffect(() => {
        try {
            fetchCoinData()
        } catch (error) {
            console.log(error)
        }
    }, [currency])

    const addToWatchlist = async () => {
        const coinRef = doc(db, user.uid, "watchlist");
        try {
            await setDoc(
                coinRef,
                {
                    coins: watchlist ? [...watchlist, coin?.id] : [coin?.id],
                    nfts: [...nftWatchlist]
                },
                { merge: true }
            );

            alert(`${coin.name} Added to the Watchlist !`)
        } catch (error) {
            alert(error)

        }
    };

    const removeFromWatchlist = async () => {
        const coinRef = doc(db, user.uid, "watchlist");
        try {
            await setDoc(
                coinRef,
                {
                    coins: watchlist.filter((wish) => wish !== coin?.id),
                    nfts: [...nftWatchlist]
                },
                { merge: true }
            );


        } catch (error) {
            alert(error)
            console.log(error)
        }
    };

    const buyHandle = async () => {
        const transactionRef = doc(db, user.uid, "transactions");
        try {
            await setDoc(transactionRef,
                { transactions: transactionArray ? [...transactionArray, { ...transactionData, paymentType: 'buy' }] : { ...transactionData, paymentType: 'buy' } },
                { merge: true }
            );
            alert(`congrates! you have bought ${Intl.NumberFormat("en-US", options).format(cryptocurrencyValue) + " " + id} coins in ${fiatcurrencyValue + " " + fiatCurrency} `)

        } catch (error) {
            alert(error)

        }
    }

    const sellHandle = async () => {
        const transactionRef = doc(db, user.uid, "transactions");
        try {
            await setDoc(transactionRef,
                { transactions: transactionArray ? [...transactionArray, { ...transactionData, paymentType: 'sell' }] : { ...transactionData, paymentType: 'sell' } },
                { merge: true }
            );

        } catch (error) {
            alert(error)

        }
    }


    return (
        <>
            {loading ?
                <LinearProgress style={{ marginBottom: 30 }} /> :
                <>
                    <h1 className='coin-info-heading'>
                        <img src={coin?.image.large} alt="" width={80} />
                        {coin?.name} <span>({coin?.symbol.toUpperCase()})</span>
                        <p style={{ fontSize: '0.8rem' }}>#{coin?.market_cap_rank}</p>
                    </h1>
                    <p className='coin-desc'>{coin?.description.en.split(". ").slice(0, 4)}</p>
                    {user ?
                        <div className="wislist-box">
                            {inWatchlist ?
                                <button className='wislist' onClick={removeFromWatchlist} >Remove from  Watchist</button> :
                                <button className='wislist' onClick={addToWatchlist} >Add to Watchist</button>

                            }
                        </div>
                        :
                        ''
                    }
                    <div className="info-card-section">
                        <div className="card">
                            <h4>Market Cap 24Hrs</h4>
                            <h2>{coin?.market_data ? Intl.NumberFormat("en-US", options).format(coin?.market_data.market_cap_change_percentage_24h) : ''}%</h2>
                        </div>
                        <div className="card">
                            <h4>All Time High</h4>
                            <h2>{symbol} {coin?.market_data ? Intl.NumberFormat("en-US", options).format(coin?.market_data.ath[currency]) : ''}</h2>
                        </div>
                        <div className="card">
                            <h4>All Time Low</h4>
                            <h2>{symbol} {coin?.market_data ? Intl.NumberFormat("en-US", options).format(coin?.market_data.atl[currency]) : ''}</h2>
                        </div>
                        <div className="card">
                            <h4>Positive Sentiments</h4>
                            <h2>{coin?.sentiment_votes_up_percentage}%</h2>
                        </div>
                        <div className="card">
                            <h4>High 24Hr</h4>
                            <h2 style={{ color: 'green' }}>{symbol} {coin?.market_data ? Intl.NumberFormat("en-US", options).format(coin?.market_data.high_24h[currency]) : ""}</h2>
                        </div>
                        <div className="card">
                            <h4>Low 24Hr</h4>
                            <h2 style={
                                { color: 'red' }
                            }>{symbol} {coin?.market_data ? Intl.NumberFormat("en-US", options).format(coin?.market_data.low_24h[currency]) : ""}</h2>
                        </div>

                    </div>
                    <div className='current-price'>
                        <h3>Current Price</h3>
                        <h1>{symbol} {coin?.market_data ? Intl.NumberFormat("en-US", options).format(coin.market_data.current_price[currency]) : ''}</h1>
                    </div>


                    <div className='bottom-info' style={{ width: '100%' }} >

                        <ChartComp id={coin?.id} currency={currency} />
                        <div className='side-info-box'>
                            <div className='currency-convertor' style={{ width: '100%' }}>
                                <h3>Currency Calculator</h3>
                                <input type="number" name="fiatcurrency" id="" placeholder={coinCurrentPrice} value={fiatcurrencyValue}
                                    onChange={e => (
                                        SetFiatcurrencyValue(e.target.value),
                                        setCryptocurrencyValue(e.target.value / (coinCurrentPrice))
                                    )} />
                                <label htmlFor="fiatcurrency">
                                    <select name="" id="" onChange={e => SetFiatCurrency(e.target.value)} style={{ width: '100%', fontSize: '0.8rem' }} className='cryptolable'>
                                        <option value="usd">USD</option>
                                        <option value="inr" selected>INR</option>
                                        <option value="eur">EUR</option>
                                    </select>
                                </label>
                                <input type="number" name="cryptocurrency" id="" placeholder='1' value={cryptocurrencyValue}
                                    onChange={e =>
                                    (
                                        SetFiatcurrencyValue(e.target.value * (coinCurrentPrice)),
                                        setCryptocurrencyValue(e.target.value)
                                    )} />
                                <label htmlFor="cryptocurrency" className='cryptolable'>
                                    <img src={coin?.image.small} alt="" width={20} />
                                    <h4>{coin?.name}</h4>
                                </label>
                                <div className='sellDiv'>
                                    <button className='buybutton' onClick={buyHandle}>Buy</button>
                                    <button className='sellbutton' onClick={sellHandle}>Sell</button>
                                </div>


                                <p style={{ margin: '2px 5px', fontWeight: '400' }}>Last Updated on {date.toLocaleDateString()}  {date.toLocaleTimeString().toLocaleUpperCase()}</p>
                                <i>
                                    <p>CoinSeek's Bitcoin and Cryptocurrency Calculator determines the exchange rates between major fiat currencies and cryptocurrencies – including BTC, BCH, ETH and XRP to USD, EUR, GBP, IDR and NGN – with up to six decimal places of accuracy. </p>
                                </i>
                            </div>
                            <iframe style={{ width: '100%', height: '30%', borderRadius: '8px', margin: ' 30px 18px' }} src="https://www.youtube.com/embed/1YyAzVmP9xQ?si=N4JgoK6EmII6Xd2u" title="Infomation about CryptoCurrency" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
