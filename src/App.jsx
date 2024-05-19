import React from "react"
import LoginPages from "./pages/login-signIn-pages/LoginPages"
import SignInPages from "./pages/login-signIn-pages/signInPage"
// import LoginPage from "./pages/login-signIn-pages/LoginPage"
import Home from "./pages/home"
import NftHome from "./pages/NFT/NftHome"
import NftCollection from "./pages/NFT/NftCollection"
import NftDetaile from "./pages/NFT/NftDetaile"
import Create from "./pages/NFT/Create"
import HomeLayout from "./component/HomeLayout"
import NftLayout from "./component/NftLayout"
import CryptoHome from "./pages/crypto/CryptoHome"
import Wallet from "./pages/Wallet"
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CryptoDetail from "./pages/crypto/cryptoDetail"
import Profile from "./pages/profile"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  return (
    <>


      <BrowserRouter  >
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path='/' element={<Home />} />
            <Route path="nft" element={<NftLayout />}>
              <Route index element={<NftHome />} />
              <Route path="market" element={<NftCollection />} />
              <Route path="market/:id" element={<NftDetaile />} />
              <Route path="create" element={<Create />} />
            </Route>
            <Route path="crypto" element={<CryptoHome />} />
            <Route path='crypto/:id' element={<CryptoDetail />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path='login' element={<LoginPages/>} />
          <Route path='signUp' element={<SignInPages />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
