
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TrendingCoins } from '../config/Api'
import { CryptoState } from '../cryptoContext'
import AliceCarousel from 'react-alice-carousel';


export default function CoinSlider() {
    const [coins, setCoins] = React.useState([])

    const { symbol, currency } = CryptoState()

    const positiveStyle = {
        color: '#0EC57C'
    }
    const negetiveStyle = {
        color: 'red'
    }


    const fetchTrendingCoins = async () => {
        const response = await fetch(TrendingCoins(currency));
        const data = await response.json()

        // console.log(data)
        setCoins(data)
    }


    React.useEffect(() => {
        fetchTrendingCoins();


    }, [currency])

    const options = { maximumFractionDigits: 2 }

    const items = coins.map(coin => {
        let profit = coin?.price_change_percentage_24h >= 0;
        return (
            <>
                {coin ?
                    <Link className="coin" key={coin.id} to={`/crypto/${coin.id}`} >

                        <img
                            src={coin?.image}
                            alt={coin.name}
                            height={80}
                            style={{ marginBottom: 10 }}
                        />
                        <span>
                            {coin?.symbol}
                            &nbsp;
                            <span
                                style={{
                                    color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                                    fontWeight: 500,
                                }}
                            >
                                {profit && "+"}
                                {coin?.price_change_percentage_24h?.toFixed(2)}%
                            </span>
                        </span>
                        <span style={{ fontSize: 22, fontWeight: 500 }}>
                            {symbol} {Intl.NumberFormat("en-US", options).format(coin.current_price)}
                        </span>
                    </Link>
                    : ''}
            </>
        )
    })

    console.log(coins);

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 3,
        },
        1024: {
            items: 4
        }
    }

    return (

        <>
            {/* <div className='crousel-box'>
            </div> */}
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={items}
                autoPlay
            />
        </>
    )


}
