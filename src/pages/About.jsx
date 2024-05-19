import React from 'react'
import { Link } from 'react-router-dom'


function About() {
    return (
        <>
            <h1 className='about-heading'>About Us</h1>


            <div className='about-info-top'>
                <img src="https://coinsclone.mo.cloudinary.net/images/coinbase/coinbase-clone-app-development.png" alt="" width={30} />
                <div className='info-card'>
                    <h3>About CoinSeek</h3>
                    <p>Crypto creates economic freedom by ensuring that people can participate fairly in the economy, and CoinSeek is on a mission to increase economic freedom for more than 1 billion people. We’re updating the century-old financial system by providing a trusted platform that makes it easy for people and institutions to engage with crypto assets, including trading, staking, safekeeping, spending, and fast, free global transfers. We also provide critical infrastructure for onchain activity and support builders who share our vision that onchain is the new online. And together with the crypto community, we advocate for responsible rules to make the benefits of crypto available around the world.
                    </p>
                </div>
            </div>

            <div className='about-numbers'>
                <h2>CoinSeek powers the cryptoeconomy</h2>
                <div className='cryptoeconomy-info'>
                    <p>Customers around the world discover and begin their journeys with crypto through CoinSeek.</p>
                    <p>245,000 ecosystem partners in over 100 countries trust CoinSeek to easily and securely invest, spend, save, earn, and use crypto.</p>
                </div>
                <div className='numbers'>
                    <div className="number">
                        <h3>$ 218B</h3>
                        <h6>Quarterly volume traded</h6>
                    </div>
                    <div className="number">
                        <h3>$130B</h3>
                        <h6>Safeguarded assets</h6>
                    </div>
                    <div className="number">
                        <h3>100+</h3>
                        <h6>Countries</h6>
                    </div>
                    <div className="number">
                        <h3>1000+</h3>
                        <h6>Employees</h6>
                    </div>
                    <div className="number">
                        <h3>103M+</h3>
                        <h6>Users</h6>
                    </div>
                </div>
            </div>

            <div className="team-info">
                <h2>Our executive team</h2>
                <div className='members'>
                    <div className="member">
                        <img src="https://images.ctfassets.net/c5bd0wqjc7v0/Gb1z4fQgJf1R0iluwQnMG/0dabfde8014de86171a5dbc68dd29c7c/brian.jpg" alt=""  />
                        <h5>Brian Armstrong</h5>
                        <h3>Co-Founder & Chief Executive Officer</h3>
                    </div>
                    <div className="member">
                        <img src="https://images.ctfassets.net/c5bd0wqjc7v0/52qDvIszpcqMROGuUIMcPx/7b941a417b8f75fbf59a92091a9e1065/emilie.jpg" alt="" />
                        <h5>Emilie Choi</h5>
                        <h3>President & Chief Operating Officer</h3>
                    </div>
                    <div className="member">
                        <img src="https://images.ctfassets.net/c5bd0wqjc7v0/6ocC5nXlz4Zf5Xk2gBhfXN/0438d3d3afd1fa34c73ebe3c5d8748c5/LJ.jpg" alt="" />
                        <h5>L.J. Brock</h5>
                        <h3>Chief People Officer</h3>
                    </div>
                    <div className="member">
                        <img src="https://images.ctfassets.net/c5bd0wqjc7v0/24NvILrwg9YreAQ5AblUEi/bf7719956ef32151ab8434f3ef9587e9/manish.jpg" alt="" />
                        <h5>Manish Gupta</h5>
                        <h3>EVP , Engineering</h3>
                    </div>
                </div>
            </div>

            <div className="career-box">
                <div className='career-text'>
                    <h4>Working at CoinSeek</h4>
                    <p>Our mission is to increase economic freedom in the world. Join us and make an impact at a global scale.</p>
                    <Link>View open positions</Link>
                </div>
                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/5btpBgFB1sHcbmqLExyYvK/06d60e58192700a316a6bda8b915b1c5/working-at-cb-1.jpg" alt="" />
            </div>


            <div className='bottom-info-pera'>
                <p>By using this Site, you agree to the <span style={{color:'#6381FF'}}>CoinSeek Terms of Service</span>, Coinbase branding guidelines, and all Coinbase rules and policies, as may be available and updated from time to time. All company, product and service names used in this website are for identification purposes only and do not imply endorsement. You acknowledge that Coinbase is the sole owner of Coinbase trademarks and promise not to use the Site content or Coinbase marks for personal or commercial use. Coinbase may review use of the branding materials at any time and reserves the right to terminate or modify any use.</p>
            </div>

        </>
    )
}

export default About
