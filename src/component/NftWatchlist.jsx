import React from 'react'
import { LinearProgress } from '@material-ui/core'
import { CryptoState } from '../cryptoContext'
import { NFT__DATA } from '../config/NFT-data'
import TrendingNFT from './trendingNFT'

function NftWatchlist() {
    const { nftWatchlist } = CryptoState()

    return (
        <>
            <div className='nft-cards' >
                {

                    NFT__DATA.map(item => {
                        if (nftWatchlist.includes(item.title)) {
                           return <TrendingNFT key={item.id} item={item} />
                        }
                    }
                    )
                }
            </div>
        </>
    )
}

export default NftWatchlist
