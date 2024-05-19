import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/footer'
import Header from '../component/Header'
import TrendingNFT from '../component/trendingNFT'
import TrendingCoinData from '../component/trendingCoinData'
import { NFT__DATA } from '../config/NFT-data'
import { TrendingCoins, SingleCoin, CoinList } from '../config/Api'
import { CryptoState } from '../cryptoContext'
import { color } from 'chart.js/helpers'


export default function Home() {

  const { currency, setCurrency} = CryptoState();
  const [coins, setCoins] = React.useState([]);
  
const style ={
color:'#007ffeb0'
}

  return (
    <>
      <div className='home-page-top'>
        <div className='home-page-info-img'>
          <div className='home-page-top-info'>

            <p>ONE PLATFORM FOR ALL YOUR CRYPTO NEEDS</p>

            <h1>The <span style={style}>new</span> way to invest <br />
              in <span style={style}>cryptocurrencies</span> <br />
              & NFT</h1>


            <p>The new decentralized platform to trade your crypto coins and NFT's, get the lowest fees ever!</p>
            <div className='crypto-nft-Links'>
              <div className='visit-nft-crypto'><Link to='/crypto'>visit Crypto</Link></div>
              <div className='visit-nft-crypto'> <Link to='/nft'>visit NFT</Link></div>
            </div>
          </div>
          <img src="https://img.freepik.com/free-vector/bitcoin-concept-illustration_114360-600.jpg?size=626&ext=jpg&ga=GA1.1.1165520063.1705217578&semt=ais" className='home-page-img' alt="" />
        </div>
      </div>

      <div className='world-numbers-container'>
        <h2>Our Numbers</h2>
        <div className='world-numbers'>
          <div>
            <h1>$218B</h1>
            <p>Quarterly volume traded</p>
          </div>
          <div>
            <h1>100+</h1>
            <p>Countries supported</p>
          </div>
          <div>
            <h1>103M+</h1>
            <p>Users</p>
          </div>
        </div>
      </div>

      <div className='trending-coins-container'>
        <div className='nft-crypto-heading'>
          <h2>Trending Crypto Coins</h2>
          <Link to='/crypto'>Explore More</Link>
        </div>
        <div className='coin-cards'>

          <TrendingCoinData />
        </div>
      </div>

      <div className='nft-container'>
        <div className='nft-crypto-heading'>
          <h2>Trending NFTs</h2>
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

      <div className='all-feature-info-container'>
        <h5>THE FUTURE IS HERE</h5>
        <h3>The future of money starts from here</h3>
        <p>Over 103 million people and businesses around the world trust us to buy, sell, and manage crypto.</p>
        <div className='feature-info-cards'>
          <div className='feature-info-card'>
            <img src="bitcoin.png" alt="" width={50} />
            <h4>Find all coins in one place, find it and trade it.</h4>
            <p>From Bitcoin to Dogecoin, we make it easy to buy and sell cryptocurrency in just one platform.</p>
            <Link to='/crypto'>Find yours now <img src="right-arrow.png" alt="" width={20} /></Link>
          </div>
          <div className='feature-info-card'>
            <img src="nft(1).png" alt="" width={50} />
            <h4>Find all NFTs in one place , find it or create by your own</h4>
            <p>From creating to buying and selling , we make it easy in just one platform</p>
            <Link to='/nft'>Find Nfts <img src="right-arrow.png" alt="" width={20} /></Link>
          </div>
          <div className='feature-info-card'>
            <img src="wallet.png" alt="" width={50} />
            <h4>Secure wallet systems for your crypto needs.</h4>
            <p>Store your crypto in your own personal wallet and explore decentralized finance (DEefi), buy and sell NFTs </p>
            <Link to='/wallet'>Go to your wallet <img src="right-arrow.png" alt="" width={20} /></Link>
          </div>
        </div>
      </div>

      <div className='crypto-nft-info-container'>
        <div className='crypto-info-container info-card-container'>
          <img src="bitcoinBG.png" alt="" />
          <div className='info-card'>
            <h3>Crytpo Currency</h3>
            <p> A one-stop shop for all things crypto. <br /> For crypto users, we provide a seamless platform to buy, sell, and manage <br /> a variety of cryptocurrencies. Our secure environment and competitive <br />fees make it easy to participate in the decentralized<br />  revolution.</p>
          </div>
        </div>
        <div className='nft-info-container info-card-container'>
          <img src="nft.png" alt="" />
          <div className='info-card'>
            <h3>NFT</h3>
            <p>A one-stop shop for all things crypto & NFTs. <br />Our marketplace empowers creators to transform their digital works – art, collectibles, <br /> and more into unique NFTs, verifiable on the blockchain. This ensures authenticity <br /> and opens exciting new  avenues for ownership and monetization.<br />  Collectors can discover and invest in these one-of-a-kind digital assets, fostering <br /> a vibrant community around creativity and innovation.</p>
          </div>
        </div>

      </div>

    </>
  )
}
