import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CryptoState } from "../cryptoContext";

import SideBar from './sideBar';
import { positions } from '@mui/system';
import Auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {

    const { currency, setCurrency, user } = CryptoState();


    const navigate = useNavigate()

    const logOutEvent = () => {
        signOut(Auth)
            .then(() => {
                navigate('/logIn')
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const activeStyles = {
        color: ' #053d5b',
        borderBottom: '1px solid #053d5b'
    }


    return (
        <header className='header'>
            <h2>CoinSeek</h2>

            <div className='nav nav-hide'>
                <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/'>Home</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/crypto'>Crypto</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/nft'>NFT</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyles : null} to='/wallet'>Wallet</NavLink>
            </div>

            <div className="nav">
                <select name="" id="currency-selector" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <option value="inr">INR</option>
                    <option value="usd">USD</option>
                </select>

                <SideBar />
                {user ?
                    <NavLink to='/profile' className='userInfo nav-hide'>
                        {user.photoURL ? <img src={user?.photoURL} alt="" className='userimg' /> :
                            <img src='./userImages/ava-07.png' alt="" className='userimg' />}
                        <button className='logout-button' onClick={logOutEvent}>LogOut</button>
                    </NavLink>
                    :
                    <button className='sign-in-button nav-hide '>  <Link to='/logIn' >SignIn</Link></button>
                }
            </div>


        </header>
    )
}
