import React from 'react'
import Header from '../common/header-component'
import Footer from '../common/footer-component'
import Home from '../home-component'

function Main() {
  return (
    <div>
        <h1>Main app</h1>
        <Header/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default Main