import React from 'react'
import { useParams } from 'react-router-dom'
import { NFT__DATA } from '../../config/NFT-data';
import BiderSection from '../../component/bider-section';
import { Link } from 'react-router-dom';
import TrendingNFT from '../../component/trendingNFT';
import { CryptoState } from '../../cryptoContext';
import { doc, setDoc } from 'firebase/firestore';
import { db, } from '../../firebase';
// import '../../../public/NFT-images'
// import heart from 

function NftDetaile() {
  const [showBider, setShowBider] = React.useState(false);
  const [likeNum, setLikeNum] = React.useState(150)
  const [isLike, setIsLike] = React.useState(false)
  const [likeImg, setLikeImg] = React.useState('/heart.png')
  const { id } = useParams();
  const card = NFT__DATA.find((item) => item.id === id)
  const { nftWatchlist, user, watchlist } = CryptoState()
  const inWatchlist = nftWatchlist.includes(card?.title)

  function handleClick() {
    setIsLike(pre => !pre)
    setLikeNum(prenum => {
      return isLike === true ? prenum - 1 : prenum + 1
    })
    setLikeImg(preimg => {
      return isLike === true ? '/heart.png' : '/fullHeart.png'
    })
  }

  const addToWatchlist = async () => {
    const coinRef = doc(db, user.uid, "watchlist");
    try {
      await setDoc(
        coinRef,
        { coins: [...watchlist] ,
          nfts: nftWatchlist ? [...nftWatchlist, card?.title] : card?.title},
        { merge: true }
      );

      alert(`${card.title} Added to the Watchlist !`)
    } catch (error) {
      alert(error)

    }
  };

  const removeFromWatchlist = async () => {
    const coinRef = doc(db, user.uid, "watchlist");
    try {
      await setDoc(
        coinRef,
        { coins: [...watchlist] ,
          nfts: nftWatchlist.filter((wish) => wish !== card?.title)},
        { merge: true }
      );

      alert(`${card.title} removed from  Watchlist !`)
    } catch (error) {
      alert(error)
    }
  };


  return (
    <>

      <div className='market-heading'>
        <h1>{card.title}</h1>
      </div>

      <div className='nft-card-detail'>
        <div className='nft-card-detail-img'><img src={card.imgUrl} alt="" /></div>


        <div className='nft-card-detail-info-container'>
          <div className='nft-card-detail-info'>
            <h3>{card.title}</h3>
            <div className='like-view'>
              <div className='view dis-fle'>
                <img src='/view.png' alt="" width={20} />
                <p>350</p>
              </div>
              <div className='like dis-fle'>
                <img src={likeImg} alt="" onClick={handleClick} width={20} />
                <p>{likeNum}</p>
              </div>
            </div>
            <div className='creator-info'>
              <img src={card.creatorImg} alt="" width={60} />
              <div className='creator-name'>

                <p>Created By</p>
                <h4>{card.creator}</h4>

              </div>
            </div>
            <p className='nft-card-detail-info-des'>{card.desc}</p>
            <button className=' bid-detail-button' width={100} onClick={inWatchlist? removeFromWatchlist: addToWatchlist} >{inWatchlist ? 'remove from watchlist' : 'add to watchlist'}</button>

            <button className=' bid-detail-button' onClick={() => setShowBider(true)} width={100}><img src="../src/assets/shopping-bag.jpg" alt="" />Place Bid</button>
          </div>
        </div>
      </div>
      {showBider && <BiderSection setShowBider={setShowBider} />}
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
    </>
  )
}

export default NftDetaile
