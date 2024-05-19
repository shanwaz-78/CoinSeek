import React from 'react'
import { Link } from 'react-router-dom'


function Create() {
  const styling = {
    color: 'white',
    textDecoration: 'none'
  }
  return (
    <>
      <div className='create-comp'>

      <div className='preview-card' style={{display:'flex', flexDirection:'column'}}>
        <h3>Preview</h3>

        <div className='nft-card'>
          <img src='https://i.seadn.io/s/raw/files/7914880bf44045fcf5dcba4ee040063a.png?auto=format&dpr=1&w=512' alt=""/>
          <Link style={styling}> <h3>Guard</h3></Link>
          <div className='nft-creator-info'>

            <div className='creator-name'>
            <img src='/userImages/ava-01.png' alt="" />
              <div>
                <p id='created-by'>Created By</p>
                <h4>Asif Khan</h4>
              </div>
            </div>
            <div className='current-bid'>
              <p>Current Bid</p>
              <h4>8.90 ETH</h4>
            </div>
          </div>
          <div className='bid-info'>
            <button className='place-bid'><img src="/shopping-bag.jpg" alt="" />Place Bid</button>
            <h6>View History</h6>
          </div>
        </div>
      </div>

        <div className="formInp">
          <form action="">
            <div className='inpSection'>
              <label htmlFor="file">Upload Flie:</label>
              <input type="file" name="file" id="file" placeholder='Choose File' />
            </div>

            <div className='inpSection'>
              <label htmlFor="pricing">Price:</label>
              <input type="number" name="pricing" id="" placeholder='Enter price for one item (ETH)' />
            </div>

            <div className='inpSection'>
              <label htmlFor="minimumBid">Minimum Bid:</label>
              <input type="number" name="minimumBid" id="" placeholder='Enter minimum bid' />
            </div>

            <div className='date'>
              <div className='inpSection'>
                <label htmlFor="startDate">Starting Data:</label>
                <input type="date" name="startDate" id="" />
              </div>

              <div className='inpSection'>
                <label htmlFor="lastData">Expiration Data:</label>
                <input type="date" name="lastData" id="" />
              </div>

            </div>
            <div className='inpSection'>
              <label htmlFor="title">Title:</label>
              <input type="text" name="Title" id="" placeholder='Enter title' />
            </div>

            <div className='inpSection'>
              <label htmlFor="disp">Expiration Data:</label>
              <textarea name="disp" id="" cols="50" rows="6" placeholder='Enter Desciption'></textarea>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default Create
