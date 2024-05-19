import { inMemoryPersistence } from 'firebase/auth';
import React from 'react'
import { Link, redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Auth from '../../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification, updateProfile } from 'firebase/auth';

export default function SignInPages() {
    const [msg, setmsg] = React.useState('')
    const provider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const signIn = document.getElementsByClassName('signIn')
    const user = Auth.currentUser;
    const [info, setInfo] = React.useState({
        nameValue: '',
        emailValue: '',
        passwordValue: ''
    })

    function changeFun(event) {
        let { value, name } = event.target
        setInfo(preinfo => ({
            ...preinfo,
            [name]: value
        }))
    }






    const clickEvent = async (e) => {
        e.preventDefault();
        const email = info.emailValue;
        const password = info.passwordValue;
        const displayName = info.nameValue;

        await createUserWithEmailAndPassword(Auth, email, password)
           
            .then((userCredential) => {
                navigate('/')
            })

            .catch((error) => {
                alert('error:', error);
            });

    }


    function signWithGoogle() {
        signInWithPopup(Auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ....
                navigate('/')
                console.log(user);
            }).catch((error) => {
                alert(error)
            });
    }

    return (
        <div className='login-page'>
            <nav><h2>COIN SEEK</h2></nav>
            <div className='login-page-info'>
                <div className='login-page-left'>
                    <h1>Hello,</h1>
                    <h1>Welcome to the CoinSeek</h1>
                    <h6>We are here to provide you best experience on your trading. <br />
                    </h6>
                </div>
                <div className='login-page-right'>
                    <h3>Sign Up</h3>
                    <button className='withGoogle' onClick={signWithGoogle}><img src="google.png" alt="" />Sign in with Google</button>
                    <p id='or'> Or </p>
                    <form >
                        <input type="text" className='inputBox' id='name' placeholder='Name' name='nameValue' value={info.nameValue} onChange={changeFun} required />
                        <input type="email" className='inputBox' id='email' placeholder='Email' name='emailValue' value={info.emailValue} onChange={changeFun} required />
                        <input type="password" className='inputBox' id='password' placeholder='Password' name='passwordValue' value={info.passwordValue} onChange={changeFun} required />
                        <p>{msg}</p>
                        <div className='login-container'>
                            <button className='signIn' onClick={clickEvent}>Sign Up</button>
                            <p>already have account ? . . <Link to='/login'> login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
