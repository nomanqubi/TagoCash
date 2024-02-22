import React from 'react'
import './Footer.css'
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
                <div className="col-4">
                  <div className="d-flex flex-column">
                    <p className='footer_link'>Quick links</p>
                    <ul className='d-flex flex-column p-0 gap-2'>
                      <a href="" className='footer_links'>Home</a>
                      <a href="" className='footer_links'>About</a>
                      <a href="" className='footer_links'>Exchange Rate</a>
                      <a href="" className='footer_links'>Security</a>
                      <a href="" className='footer_links'>Partners</a>
                    </ul>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex flex-column">
                    <p className='footer_link'>News</p>
                    <ul className='d-flex flex-column p-0 gap-2'>
                      <a href="" className='footer_links'>Blog</a>
                      <a href="" className='footer_links'>FAQ</a>
                      <a href="" className='footer_links'>Presse kit</a>
                    </ul>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex flex-column">
                    <p className='footer_link'>Others</p>
                    <ul className='d-flex flex-column p-0 gap-2'>
                      <a href="" className='footer_links'>How it Works?</a>
                      <a href="" className='footer_links'>Why TAGO?</a>
                      <a href="" className='footer_links'>Benefits with Tago</a>
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
              <div className='d-flex gap-5' style={{paddingLeft: "60px"}}>
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
