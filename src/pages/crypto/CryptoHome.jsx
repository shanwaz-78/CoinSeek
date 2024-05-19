import React from 'react'
// import TrendingCoinData from '../../component/trendingCoinData'
import CoinSlider from '../../component/CoinSlider'
import { CoinList } from '../../config/Api'
import { Trendingcoins } from '../../config/coinsData';
import { Link } from 'react-router-dom';
import { CryptoState } from '../../cryptoContext';
import { Pagination, TextField } from '@mui/material';
import { LinearProgress } from '@material-ui/core';



export default function CryptoHome() {

  // const [coins,setCoins] = React.useState(Trendingcoins);
  const [coins, setCoins] = React.useState([]);
  const { symbol, currency, loading } = CryptoState();
  const [page, setPage] = React.useState(1)
  const [search, setSearch] = React.useState('')

  const positiveStyle = {
    color: '#0EC57C'
  }
  const negetiveStyle = {
    color: 'red'
  }




  const fetchTrendingCoins = async () => {
    const response = await fetch(CoinList(currency));
    const data = await response.json()


    setCoins(data)
  }



  React.useEffect(() => {
    fetchTrendingCoins();


  }, [currency])

  const options = { maximumFractionDigits: 2 }

  const searchedCoin = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  // const coinlist = searchedCoin().slice((page - 1) * 10, (page + 1) * 10 + 10).map(coin => {
  //   return (
  //     <Link className='coin-info-card coin-card' key={coin.id} to={`/crypto/${coin.id}`}>
  //       <div className="coin-info-head">
  //         <div className='coin-name-img'>
  //           <img src={coin.image} alt="" width={50} />
  //           <div className='coin-name'>
  //             <h3>{coin.symbol.toUpperCase()}</h3>
  //             <h5>{coin.name}</h5>
  //           </div>
  //         </div>
  //         <div className='coin-high-percentage'>
  //           <p>price change in 24h</p>
  //           <h3 style={coin.price_change_24h >= 0 ? positiveStyle : negetiveStyle}>{Intl.NumberFormat("en-US", options).format(coin.price_change_24h)} {symbol}</h3>
  //           <h5 style={coin.price_change_24h >= 0 ? positiveStyle : negetiveStyle}>{coin.price_change_percentage_24h.toFixed(2)} %</h5>
  //         </div>
  //       </div>
  //       <div className="coin-price">
  //         <p>current price</p>
  //         <h2>{Intl.NumberFormat("en-US", options).format(coin.current_price)} {symbol}</h2>
  //       </div>
  //     </Link>
  //   )
  // })

  return (
    <>
      <div className='trending-banner'>
        <h2>Trending Crypto Coins</h2>
        <CoinSlider />
      </div>
      <h1 className='coin-heading'>All coin at One Place</h1>
      <TextField
        label="Search For a Crypto Currency.."
        variant="outlined"
        style={{ margin: '20px 40px', width: "92%" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      {
        loading ? (
          <LinearProgress style={{ backgroundColor: "032B41", margin: 30 }} />
        ) :
          <div className="coin-list">
            {searchedCoin().slice((page - 1) * 10, (page + 1) * 10 + 10).map(coin => {
              return (
                <Link className={`coin-info-card coin-card ${coin.price_change_24h >= 0 ? 'positiveBox': 'negetiveBox'}`} key={coin.id} to={`/crypto/${coin.id}`}>
                  <div className="coin-info-head">
                    <div className='coin-name-img'>
                      <img src={coin.image} alt="" width={50} />
                      <div className='coin-name'>
                        <h3>{coin.symbol.toUpperCase()}</h3>
                        <h5>{coin.name}</h5>
                      </div>
                    </div>
                    <div className='coin-high-percentage'>
                      <p>price change in 24h</p>
                      <h3 style={coin.price_change_24h >= 0 ? positiveStyle : negetiveStyle}>{Intl.NumberFormat("en-US", options).format(coin.price_change_24h)} {symbol}</h3>
                      <h5 style={coin.price_change_24h >= 0 ? positiveStyle : negetiveStyle}>{coin.price_change_percentage_24h.toFixed(2)} %</h5>
                    </div>
                  </div>
                  <div className="coin-price">
                    <p>current price</p>
                    <h2>{Intl.NumberFormat("en-US", options).format(coin.current_price)} {symbol}</h2>
                  </div>
                </Link>
              )
            })}
          </div>
      }
      <Pagination
        count={parseInt((coins?.length / 10).toFixed(0))}
        style={{
          padding: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        // classes={{ ul: classes.pagination }}
        onChange={(_, value) => {
          setPage(value);
          // window.scroll(0, 450);
        }}

      />

    </>
  )
}
