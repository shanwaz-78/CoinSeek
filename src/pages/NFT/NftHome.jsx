import React from 'react'
import { Link } from 'react-router-dom'
import { NFT__DATA, SELLER__DATA } from '../../config/NFT-data'
import TrendingNFT from '../../component/trendingNFT'
import SellerInfo from '../../component/sellerInfo'

function NftHome() {
    const styling = {
        color: '#2689FF'
    }

    const numStyling = {
        backgroundColor: '#2689FF',
        margin: ''
    }
    return (
        <>
            <div className='home-page-top'>
                <div className='home-page-info-img'>
                    <div className='home-page-top-info'>

                        <p>Discover The Next Generation of Artworks</p>
                        <h1>A <span style={styling}>New Place</span>  to Collect <br />
                            and Connect NFT <br />
                            Across the <span style={styling}>World</span></h1>
                        <p>The new decentralized platform to trade  NFT's, get the lowest fees ever!</p>
                        <div className='btns'>
                            <button className='explore-nft'><Link to='market'>Explore <img src="right-arrow.png" alt="" width={20} /></Link></button>
                            <Link className='create' to='create'>Create</Link>
                        </div>
                    </div>
                    <img src="NFT-home-bg.jpg" className='home-page-img' alt=""  />
                </div>
            </div>

            <div className='world-numbers-container' style={numStyling}>
                <h2>Our Numbers</h2>
                <div className='world-numbers'>
                    <div>
                        <h1>36k+</h1>
                        <p>Artwork</p>
                    </div>
                    <div>
                        <h1>24k+</h1>
                        <p>Artist</p>
                    </div>
                    <div>
                        <h1>32k+</h1>
                        <p>Auction</p>
                    </div>
                </div>
            </div>


            <div className='nft-container'>
                <div className='nft-crypto-heading'>
                    <h2>Live Auction</h2>
                    <Link to='/nft/market'>Explore More</Link>
                </div>
                <div className='nft-cards' >
                    {

                        NFT__DATA.slice(0, 4).map(item =>
                            <TrendingNFT key={item.id} item={item} />
                        )
                    }
                </div>
            </div>


            <div className="sellerInfo">
                <h3>Top Sellers</h3>

                <div className='sellerCards'>
                    {
                        SELLER__DATA.map(item =>
                            <SellerInfo key={item.id} item={item} />
                        )
                    }
                </div>
            </div>


            <div className='nft-container'>
                <div className='nft-crypto-heading'>
                    <h2>Trending NFTs</h2>
                    <Link to='/nft/market'>Explore More</Link>
                </div>
                <div className='nft-cards' >
                    {

                        NFT__DATA.slice(1, 9).map(item =>
                            <TrendingNFT key={item.id} item={item} />
                        )
                    }
                </div>
            </div>


            <div className='all-feature-info-container'>

                <h3>Create and sell your NFTs</h3>
                <div className='feature-info-cards nft-feature-info-cards'>
                    <div className='feature-info-card '>
                        <img src="image.png" alt="" style={{margin:'0 10px'}} width={30} />
                        <h4>Add your NFTs</h4>
                        <p>Create and add your NFTs in this site for sell.</p>
                    </div>
                    <div className='feature-info-card'>
                        <img src="list.png" alt="" style={{margin:'0 10px'}} width={30} />
                        <h4>List Them For Sell</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi.</p>
                    </div>
                    <div className='feature-info-card'>
                        <img src="collection.png" alt="" style={{margin:'0 10px'}} width={30} />
                        <h4>Create your collection</h4>
                        <p>From creating to Collecting defferent -defferent NFTs we make it easy in just one platform</p>
                    </div>
                    <div className='feature-info-card'>
                        <img src="wallet.png" alt="" style={{margin:'0 10px'}} width={30} />
                        <h4>Secure wallet systems for NFTs</h4>
                        <p>Store your NFTs in your own personal wallet and explore decentralized finance (DEefi), buy and sell NFTs </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NftHome
