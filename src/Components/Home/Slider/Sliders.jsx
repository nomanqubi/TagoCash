import React from 'react'
import './Sliders.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tag from '../../../assets/Images/image 22.png'
import Tagone from '../../../assets/Images/image 17.png'
import Tagtwo from '../../../assets/Images/image 18.png'
import Tagthree from '../../../assets/Images/image 19.png'
import Tagfour from '../../../assets/Images/image 20.png'
import Tagfive from '../../../assets/Images/image 21.png'

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
          <img src={Tag} style={{ width: "100%" }} alt="" />
          <img src={Tagone} alt="" />
          <img src={Tagtwo} alt="" />
          <img src={Tagthree} alt="" />
          <img src={Tagfour} alt="" />
          <img src={Tagfive} alt="" />
        </Slider>
      </div>


    </>
  )
}