import React from 'react'
import './Hero.css'
import Appstore from '../../../assets/Images/app.png'
import Google from '../../../assets/Images/google.png'
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
                            <p className='hero_stylish'>Everywhere you go, <span className='tago_style'>Tago!</span></p>
                            <p className='tago_stylish'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                            <div className='d-flex'>
                                <img src={Appstore} alt="" />
                                <img src={Google} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center position-relative">
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
