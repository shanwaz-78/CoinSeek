import React from 'react'
import {Link , Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './footer'


export default function HomeLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
