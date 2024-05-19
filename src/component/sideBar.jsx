import React from 'react'
import { NavLink, Link,useNavigate } from 'react-router-dom'
import { CryptoState } from '../cryptoContext'
import { Drawer } from '@material-ui/core';
import Auth from '../firebase';
import { onAuthStateChanged , signOut} from 'firebase/auth';


export default function SideBar() {
    const [state, setState] = React.useState({
        right: false,
    });

    const { user } = CryptoState()

    const navigate = useNavigate()
// console.log(user)
    const logOutEvent = () => {
        signOut(Auth)
        .then(()=> {
            navigate('/logIn')
        })
        .catch((error)=>{
            console.log(error)
        })
    }



    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <h2 className=' menu' onClick={toggleDrawer(anchor, true)}>Menu</h2>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <div className='side-bar-container'>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <h2>Menu <hr /></h2>
                                <div className='side-nav'>
                                    <NavLink to='/'>Home</NavLink>
                                    <NavLink to='/crypto'>Crypto</NavLink>
                                    <NavLink to='/nft'>NFT</NavLink>
                                    <NavLink to='/wallet'>Wallet</NavLink>
                                    <NavLink to='/about'>About Us</NavLink>
                                    <NavLink to='/contact'>Contact us</NavLink>
                                </div>
                            </div>
                            {user ?
                                <NavLink to='/profile' className='userInfo name'>
                                    <hr />
                                    {user.photoURL ? <img src={user.photoURL} alt="" className='userimg' /> :
                                        <img src='./userImages/ava-07.png' alt="" className='userimg' />}
                                    <h2>{user.displayName}</h2>
                                       
                                    <button onClick={logOutEvent}>LogOut</button>
                                    
                                </NavLink>
                                :

                                <Link to='/logIn' className='name '>SignIn/LogIn</Link>
                            }
                        </div>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
