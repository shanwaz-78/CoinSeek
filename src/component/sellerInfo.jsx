import React from 'react'

function SellerInfo(props) {
  const { id, sellerName,creatorImg, currentBid} = props.item;
// console.log(createrImg)
  return (
    <div className="sellerCard" key={id}>
      <img src={creatorImg} alt="hello" width={70}/>
      <div className='sellerDetails'>
        <h4>{sellerName}</h4>
        <p>{currentBid} ETH</p>
      </div>
    </div>
  )
}

export default SellerInfo
