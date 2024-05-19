import React from 'react'
import { Link } from 'react-router-dom'
import BiderSection from './bider-section';


function TrendingNFT(props) {
    const [showBider ,setShowBider] = React.useState(false);
    const { title, id, imgUrl, creator, creatorImg, currentBid, desc } = props.item
    const styling = {
        color: 'white',
        textDecoration: 'none'
    }


    return (


        <div className='nft-card' key={id}>
            <div style={{width:'250px'}}>
            <img src={imgUrl} alt="" width="100%" />
            </div>
            <Link style={styling} to={`/nft/market/${id}`}> <h3>{title}</h3></Link>
            <div className='nft-creator-info'>

                <div className='creator-name'>
                <img src={creatorImg} alt="" />
                    <div>
                        <p id='created-by' style={{fontSize:'0.7'}}>Created By</p>
                        <h4>{creator}</h4>
                    </div>
                </div>
                <div className='current-bid'>
                    <p>Current Bid</p>
                    <h4>{currentBid} ETH</h4>
                </div>
            </div>
            <div className='bid-info'>
                <button className='place-bid' onClick={()=>setShowBider(true)}><img src="shopping-bag.jpg" alt="" />Place Bid</button>
                <h6>View History</h6>
            </div>

            {showBider && <BiderSection setShowBider={setShowBider}/>}

        </div>

    )
}

export default TrendingNFT
