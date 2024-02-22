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

  const settings = {
    dots: false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1400, // XL
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200, // LG
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992, // MD
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, // SM
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 576, // XS
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480, // XS
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className='container-fluid p-0' style={{ background: "#052A4F", height: "200px", overflow: "hidden" }}>
        <Slider {...settings}>
          <img src={One} style={{ width: "100%" }} alt="" />
          <img src={Two} alt="" />
          <img src={Three} alt="" />
          <img src={Four} alt="" />
          <img src={Five} alt="" />
          <img src={Six} alt="" />
          <img src={Seven} alt="" />
          <img src={Eight} alt="" />
          <img src={Nine} alt="" />
          <img src={Ten} alt="" />
        </Slider>
      </div>


    </>
  )
}