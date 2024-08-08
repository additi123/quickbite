import React from 'react'
import './nav_bar.css'
import { assets } from '../../assets/assets'

const nav_bar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li>home</li>
        <li>menu</li>
        <li>mobile app</li>
        <li>contact us</li>
      </ul>
      <div className="navbar-right">

        <img src={assets.search_icon} alt="" className="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" className="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default nav_bar
