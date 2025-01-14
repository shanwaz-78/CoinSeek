import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-info footer-info-1 '>
          <h3>Coin Seek</h3>
          <p>World's newest blockchain system for crypto & Nft trading , more safe and less fees.</p>
          <div className='footer-img'>
           <Link to='https://www.instagram.com/_asifkhann_'> <img src="/instagram.png" alt="" width={25} /></Link>
           <Link to='https://www.linkedin.com/in/asif-khan-69493a230/'> <img src="/linkedin.png" alt="" width={25} /></Link>
           <Link to='https://twitter.com/_asifkhann_'> <img src="/twitter.png" alt="" width={25} /></Link>
           <Link to='https://github.com/asifkhan231'> <img src="/github-sign.png" alt="" width={25} /></Link>
          </div>
        </div>
        <div className='footer-info'>
          <h5>Company</h5>
          <Link to='/about'>About</Link>
          <Link>Careers</Link>
          <Link>Affiliates</Link>
          <Link>Announcements</Link>
        </div>
        <div className='footer-info'>
          <h5>Learn</h5>
          <Link>Learn & Earn</Link>
          <Link>Browse Crypto</Link>
          <Link>Crypto Basics</Link>
          <Link>Market Update</Link>
        </div>
        <div className='footer-info'>
          <h5>Support</h5>
          <Link to='/contact'>Contact Us</Link>
          <Link>Help Center</Link>
          <Link>Payment Method</Link>
          <Link>Supported Countries</Link>
        </div>
        <div className='footer-info'>
          <h5>Developers</h5>
          <Link>Cloud</Link>
          <Link>wallet SDK</Link>
          <Link>Commerce</Link>
          <Link>Prime API</Link>
        </div>
      </div>
    </div>
  )
}
