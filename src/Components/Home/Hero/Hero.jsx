import React from 'react'
import './Hero.css'
import Googles from '../../../assets/Images/googles.png'
import Appstore from '../../../assets/Images/app_store.png'
import Group from '../../../assets/Images/Group 34243.png'
import Elipse from '../../../assets/Images/Ellipse 7.png'
import Elipseone from '../../../assets/Images/Ellipse 10.png'
import Elipsetwo from '../../../assets/Images/Ellipse 8.png'
import Elipsethree from '../../../assets/Images/Ellipse 9.png'

export const Hero = () => {
    return (
        <>
            <div className="container-fluid hero">
                <div className="container pt-5">
                    <div className="row pb-5">
                        <div className="col-lg-6">
                            <p className='hero_style'>We are the Future!</p>
                            <p className='hero_stylish'>Everywhere <br /> you go, <span className='tago_style'>Tago!</span></p>
                            <p className='hero_detail pt-2'><strong>Tago<span style={{ color: "#0581F8" }}>Cash</span> is Your Global Companion</strong></p>
                            <p className='tago_stylish'>Cash is King. Don't Leave Home Without it!</p>
                            <div className='d-flex gap-4'>
                                <button className='google_play ps-3 pe-3 pt-3 pb-3'>
                                    <img src={Googles} alt="" style={{ width: "100%" }} />
                                </button>
                                <button className='google_play ps-3 pe-3 pt-3 pb-3'>
                                    <img src={Appstore} alt="" style={{ width: "100%" }} />
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5 w-50 d-flex justify-content-end align-items-end position-relative hero_second">
                            <img src={Group} alt="" className='hero_img' />
                            <img src={Elipse} alt="" className='elipse_style' />
                            <img src={Elipseone} alt="" className='elipse_styles' />
                            <img src={Elipsetwo} alt="" className='elipse_styless' />
                            <img src={Elipsethree} alt="" className='elipse_stylish' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
