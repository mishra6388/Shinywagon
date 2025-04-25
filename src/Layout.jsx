import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import FloatingButtons from './components/FloatingButtons'


const Layout = () => {
  return (
   <>
    <Header/>
    <Outlet/>
    <FloatingButtons/>
    <Footer/>
   </>
  )
}

export default Layout