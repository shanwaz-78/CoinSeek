import React, { Component } from 'react'
// import { TrendingCoins } from '../config/Api';/
import { Link } from 'react-router-dom'
import { Trendingcoins } from '../config/coinsData'
import { TrendingCoins } from '../config/Api'
import { CryptoState } from '../cryptoContext'
import { CircularProgress } from '@material-ui/core'

export default function TrendingCoinData() {
  // const [currency, setCurrency] = React.useState('INR');
  const [coins, setCoins] = React.useState([])
  // const [coins, setCoins] = React.useState(Trendingcoins)
  const [price, setPrice] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  // const symbol = currency === 'INR' ? '₹' : '$';

  const { symbol, currency } = CryptoState()

  const positiveStyle = {
    color: '#0EC57C'
  }
  const negetiveStyle = {
    color: 'red'
  }


  const fetchTrendingCoins = async () => {
    setLoading(true)
    const response = await fetch(TrendingCoins(currency));
    const data = await response.json()

    setCoins(data)
    setLoading(false)
  }




  React.useEffect(() => {
    fetchTrendingCoins();


  }, [currency])


  const options = { maximumFractionDigits: 2 }
  // const formattedNumber = Intl.NumberFormat("en-US", options).format(price);

  const trendingCoinCard = coins.map(coin => (

    <Link className="coin-card" key={coin.id} to={`/crypto/${coin.id}`}>
      <img src={coin.image} alt="" width={100} />
      <div className='coin-data'>
        <h2>{Intl.NumberFormat("en-US", options).format(coin.current_price)} {symbol}</h2>
        <h3>
          {coin.symbol.toUpperCase()}
          <p style={coin.price_change_24h >= 0 ? positiveStyle : negetiveStyle}>{parseFloat(coin.price_change_percentage_24h).toFixed(2)}%</p>
        </h3>
      </div>
    </Link>
  )
  )

  return (
    <>
      {loading ?
        <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%', translate: 'transiton(-50%,-50%)' }} /> :
        <>
          {trendingCoinCard}
        </>
      }
    </>
  )
}
