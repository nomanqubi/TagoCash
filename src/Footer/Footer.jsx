import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Images/logo.png'
import Googles from '../assets/Images/googles.png'
import Appstore from '../assets/Images/app_store.png'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export const Footer = () => {
  return (
    <>
      <div className="container-fluid footer_body">
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-6">
              <img src={Logo} alt="" />
              <p className='footer_tago_head'>Wherever You Go, <span style={{ color: "#0581F8" }}>Tago!</span> </p>
              <div className='d-flex gap-4 pt-4'>
                <button className='google_play ps-3 pe-3 pt-3 pb-3'>
                  <img src={Googles} alt="" style={{ width: "100%" }} />
                </button>
                <button className='google_play ps-3 pe-3 pt-3 pb-3'>
                  <img src={Appstore} alt="" style={{ width: "100%" }} />
                </button>
              </div>
              <div className='stay_line mt-3' style={{ width: "67%" }} />
              <p className='footer_copy mt-3'>© 2024 Map -All right reserved</p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex flex-column">
                    <p className='footer_link'>Quick links</p>
                    <ul className='d-flex flex-column p-0 gap-2'>
                      <NavLink to="/" className='footer_links'>Home</NavLink>
                      <NavLink to="/" className='footer_links'>About</NavLink>
                      <NavLink to="/" className='footer_links'>Exchange Rate</NavLink>
                      <NavLink to="/" className='footer_links'>Security</NavLink>
                      <NavLink to="/" className='footer_links'>Partners</NavLink>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex flex-column">
                    <p className='footer_link'>News</p>
                    <ul className='d-flex flex-column p-0 gap-2'>
                      <NavLink to="/" className='footer_links'>Blog</NavLink>
                      <NavLink to="/" className='footer_links'>FAQ</NavLink>
                      <NavLink to="/" className='footer_links'>Presse kit</NavLink>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex flex-column">
                    <p className='footer_link'>Others</p>
                    <ul className='d-flex flex-column p-0 gap-2'>
                      <NavLink to="/" className='footer_links'>How it Works?</NavLink>
                      <NavLink to="/" className='footer_links'>Why TAGO?</NavLink>
                      <NavLink to="/" className='footer_links'>Benefits with Tago</NavLink>
                    </ul>
                    <div className='d-flex gap-2 mt-3'>
                      <div className='footer_social_box'>
                        <FaLinkedinIn />
                      </div>
                      <div className='footer_social_box'>
                        <FaTwitter />
                      </div>
                      <div className='footer_social_box'>
                        <IoIosSend />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='footer_name mt-2'>
                <p className='footer_bottom_links'>Terms & Condtion</p>
                <p className='footer_bottom_links'>Privacy Policy</p>
                <p className='footer_bottom_links'>Cookie Policy</p>
                <p className='footer_bottom_links'>MAP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
