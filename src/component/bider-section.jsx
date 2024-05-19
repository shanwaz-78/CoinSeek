import React from 'react'

export default function BiderSection(props) {
  return (

    <>
    <div className='bid-section-wraper' onClick={() => props.setShowBider(false)}>
    </div>
      <div className='bid-section'>
        <h1>Place Bid</h1>
        <div className='input-sec'>
            <p>You must bid atleast <span>5.89 ETH</span></p>
            <input type="number" name="" id="" placeholder='00.00 ETH'/>
        </div>
        <div className='input-sec'>
            <p>Enter Quantity , 5 Available</p>
            <input type="number" name="" id="" placeholder='Enter Quantity' />
        </div>
        <div className='inpInfo'>
            <h4>You must bid at least</h4>
            <h2>5.89 ETH</h2>
        </div>
        <div className='inpInfo'>
            <h4>Service Fee</h4>
            <h2>0.90 ETH</h2>
        </div>
        <div className='inpInfo'>
            <h4>Total Bid Amount</h4>
            <h2>6.79 ETH</h2>
        </div>
        <button className='place-bid'>
            Place Bid
        </button>
      </div>
    </>
  )
}
