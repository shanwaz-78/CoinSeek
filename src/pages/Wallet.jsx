import React from 'react'
import { Link } from 'react-router-dom'
import { CryptoState } from '../cryptoContext'
import Transaction from '../component/Transaction'
function Wallet() {
  const { user } = CryptoState()
  return (
    <>
      <div className="wallet-banner-container">
        <div className='wallet-banner'>
          <div className='banner-text'>

            <p>EMBEDDED WALLETS</p>

            <h1>Seamlessly bring your Self onchain</h1>


            <h4>No seed phrases. Full user experience control. Backed by the security of CoinSeek.</h4>
            <div className='crypto-nft-Links'>
              <div className='visit-nft-crypto' style={{ color: 'white' }}><Link>Get Started</Link></div>
              <div className='visit-nft-crypto'> <Link>View docs</Link></div>
            </div>
          </div>
          <div className='banner-img'>
            <img src="https://images.ctfassets.net/c5bd0wqjc7v0/77urJWnYWjBtIF45Vijrlu/ffbff64679f3255098d92a338f47695e/WaaS_Flow_03_v017.gif" alt="" />
          </div>
        </div>
      </div>

      <div className="authentication-features">
        <h2>Familiar user authentication with the power of being onchain</h2>
        <div className='features'>
          <div className="feature">
            <img alt="" height="48" src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/easyToUse-2.svg" width="48" />
            <h4>Simple user onboarding</h4>
            <p>Allow users to create, access, and restore wallets with a username and password.</p>
          </div>
          <div className="feature">
            <img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/key-2.svg" alt="" height='48' width='48' />
            <h4>Seamless integration</h4>
            <p>Customize the wallet look and feel in your app to maintain a cohesive UX.</p>
          </div>
          <div className="feature">
            <img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/decentralizedWeb3-3.svg" alt="" height='48' width='48' />
            <h4>Full user ownership</h4>
            <p>Empower users with full control over their keys and assets.</p>
          </div>
          <div className="feature">
            <img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/multiPlatform-2.svg" alt="" height='48' width='48' />
            <h4>Scale with Coinbase</h4>
            <p>Join Coinbase in bringing the next billion onchain.</p>
          </div>
        </div>
      </div>

      <div className='security-feature-box'>
        <div className='security-feature-img'>
          <img src="https://images.ctfassets.net/c5bd0wqjc7v0/1KdNax2VRsRA8yMY1o1rH9/2e2b80c33ee726a2d36b3329db75f095/CBC-AdvancedWhtMPC-v03.gif" alt="" />
        </div>
        <div className='security-feature'>
          <h2>Security is our
            top priority</h2>
          <p>Your private keys are encrypted locally on your device with Secure Enclave, protected by Biometric and 2-Factor Authentication.</p>
          <ul>
            <li> <img src="https://cdn-icons-png.flaticon.com/128/5291/5291043.png" alt="" width='20' /> Gain full control </li>
            <li> <img src="https://cdn-icons-png.flaticon.com/128/5291/5291043.png" alt="" width='20' /> Easily manage </li>
            <li> <img src="https://cdn-icons-png.flaticon.com/128/5291/5291043.png" alt="" width='20' /> Import your existing wallet</li>
          </ul>

          <p>Learn more about our security facilities.</p>
        </div>
      </div>

      {!user ?
        <div className="guide-box">
          <h2>Your Quick Start Guide</h2>
          <div className="tips">
            <div className="tip">
              <h3>1</h3>
              <h4>Sign up on CoinSeek</h4>
              <p>Begin your coinSeek journey with a quick signup and smooth KYC verification process.</p>
            </div>
            <div className="tip">
              <h3>2</h3>
              <h4>Transfer INR to Wallet</h4>
              <p>Deposit INR to your coinSeek Wallet with ease through our secure payment gateways.</p>
            </div>
            <div className="tip">
              <h3>3</h3>
              <h4>Buy and Sell Crypto</h4>
              <p>Buy, sell, and trade crypto effortlessly, and track seamlessly—all in one place.</p>
            </div>
          </div>

          <Link to='/login'><button>SIGN UP</button></Link>
        </div>
        :
        <div style={{textAlign:'center'}}>
          <h1>Transaction History</h1>
          <Transaction />
        </div>
      }
    </>
  )
}

export default Wallet
