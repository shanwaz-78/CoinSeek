import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import {useHistory} from 'react-router-dom'
import Auth from '../../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { CryptoState } from '../../cryptoContext';

export default function LoginPages() {
    const { user } = CryptoState();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const [info, setInfo] = React.useState({
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



    const clickEvent = async (event) => {
        event.preventDefault()
        const email = info.emailValue;
        const password = info.passwordValue;
        await signInWithEmailAndPassword(Auth, email, password)
            .then((userCredential) => {

                console.log(userCredential.user)
                navigate('/')
               alert('WelCome back',userCredential.user?.displayName)
            })
            .catch((error) => {
                alert('error:',error)
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
                alert('WelCome back',user?.displayName)
            }).catch((error) => {
                alert(error)
            });
    }




    return (

        <div className='login-page'>
            <nav>
                <h2>COIN SEEK</h2>
            </nav>
            <div className='login-page-info'>
                <div className='login-page-left'>
                    <h1>Hello,</h1>
                    <h1>Welcomeback to the CoinSeek</h1>
                    <h6>We are here to provide you best experience on your trading. <br />
                    </h6>
                </div>
                <div className='login-page-right'>
                    <h3>Login</h3>
                    <button className='withGoogle' onClick={signWithGoogle}><img src="google.png" alt="" />Sign in with Google</button>
                    <p id='or'> Or </p>
                    <form >
                        <input type="email" className='inputBox' id='email' placeholder='UserName/Email' name='emailValue' value={info.emailValue} onChange={changeFun} />
                        <input type="password" className='inputBox' id='password' placeholder='Password' name='passwordValue' value={info.passwordValue} onChange={changeFun} />

                        <div className='login-container'>
                            <button className='login' onClick={clickEvent} >Login</button>
                            <p>Don't have account ? . . <Link to='/signUp'> signIn</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
