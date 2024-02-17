import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbars.css'
import Logo from '../assets/Images/logo.png'
import Back from '../assets/Images/background.png'

export const Navbars = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container nav_body">
        <img src={Logo} alt="" />
          <div className='d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block'>
            <ul className="navbar-nav gap-4 ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Features</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Easy & Safe</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Togo Works</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Custom Support</NavLink>
              </li>
            </ul>
          </div>
          <button className='sign_btn'>
            Sign Up
          </button>
      </div>
    </nav>
  )
}
