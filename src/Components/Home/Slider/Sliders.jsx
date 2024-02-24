import React from 'react'
import './Sliders.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import One from '../../../assets/Images/1.png'
import Two from '../../../assets/Images/2.png'
import Three from '../../../assets/Images/3.png'
import Four from '../../../assets/Images/4.png'
import Five from '../../../assets/Images/5.png'
import Six from '../../../assets/Images/6.png'
import Seven from '../../../assets/Images/7.png'
import Eight from '../../../assets/Images/8.png'
import Nine from '../../../assets/Images/9.png'
import Ten from '../../../assets/Images/10.png'

export const Sliders = () => {

return (
    <>
      <div className='container-fluid p-0 slider_body'>
        <div className='slider_portion'>
          <div className='logos-slide'>
            <img src={One} className="slider-image" alt="" />
            <img src={Two} className="slider-image" alt="" />
            <img src={Three} className="slider-image" alt="" />
            <img src={Four} className="slider-image" alt="" />
            <img src={Five} className="slider-image" alt="" />
            <img src={Six} className="slider-image" alt="" />
            <img src={Seven} className="slider-image" alt="" />
            <img src={Eight} className="slider-image" alt="" />
            <img src={Nine} className="slider-image" alt="" />
            <img src={Ten} className="slider-image" alt="" />
          </div>
          <div className='logos-slide'>
            <img src={One} className="slider-image" alt="" />
            <img src={Two} className="slider-image" alt="" />
            <img src={Three} className="slider-image" alt="" />
            <img src={Four} className="slider-image" alt="" />
            <img src={Five} className="slider-image" alt="" />
            <img src={Six} className="slider-image" alt="" />
            <img src={Seven} className="slider-image" alt="" />
            <img src={Eight} className="slider-image" alt="" />
            <img src={Nine} className="slider-image" alt="" />
            <img src={Ten} className="slider-image" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}