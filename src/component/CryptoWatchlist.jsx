import React from 'react'
import { Link } from 'react-router-dom'
import { CryptoState } from '../cryptoContext'
import { Pagination } from '@mui/material'
import { LinearProgress } from '@material-ui/core'

function CryptoWatchlist() {
    const [page, setPage] = React.useState(1)
    const { watchlist, coins, symbol, currency, loading } = CryptoState()

    const positiveStyle = {
        color: '#0EC57C'
    }
    const negetiveStyle = {
        color: 'red'
    }

    const options = { maximumFractionDigits: 2 }
    return (
        <>
            {
                loading ? (
                    <LinearProgress style={{ backgroundColor: "032B41", margin: 30 }} />
                ) :
                    <div className="coin-list">
                        {coins.map(coin => {
                            if (watchlist.includes(coin?.id)) {
                                return (
                                    <Link className={`coin-info-card coin-card ${coin.price_change_24h >= 0 ? 'positiveBox' : 'negetiveBox'}`} key={coin.id} to={`/crypto/${coin.id}`}>
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
                            }
                        })}
                    </div>
            }
           
        </>
    )
}

export default CryptoWatchlist
