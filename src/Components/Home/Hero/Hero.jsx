import React from 'react'
import './Hero.css'
import Googles from '../../../assets/Images/googles.png'
import Appstore from '../../../assets/Images/app_store.png'
import Group from '../../../assets/Images/Group 34243.png'
import Elipse from '../../../assets/Images/Ellipse 7.png'
import Elipseone from '../../../assets/Images/Ellipse 10.png'
import Elipsetwo from '../../../assets/Images/Ellipse 8.png'
import Elipsethree from '../../../assets/Images/Ellipse 9.png'
import Slide from '../../../assets/Images/slide.gif'
import Lottie from 'react-lottie';
import World from '../../../assets/lottie/World.json';

export const Hero = () => {

    const worldOptions = {
        loop: true,
        autoplay: true,
        animationData: World,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <>
            <div className="container-fluid hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <p className='hero_style'>We are the Future!</p>

                            <p className='hero_stylish'>Wherever You Go,</p>

                            {/* <div className='ocean'> */}
                                {/* <div className='wave'></div> */}
                                <span className='tago_style hero_stylish'>Tago!</span>
                            {/* </div> */}

                            <p className='hero_detail pt-4'><strong>Tago<span style={{ color:"#0581F8"}}>Cash</span> is Your Global Companion</strong></p>
                            <p className='tago_stylish pt-2'>Cash is King. Don't Leave Home Without it!</p>
                            <div className='d-flex gap-4 pt-5'>
                                <button className='google_play ps-3 pe-3 pt-3 pb-3'>
                                    <img src={Googles} alt="" style={{ width: "100%" }} />
                                </button>
                                <button className='google_play ps-3 pe-3 pt-3 pb-3'>
                                    <img src={Appstore} alt="" style={{ width: "100%" }} />
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5 hero_second">
                            {/* <div className='hero_div_stlye'>
                                <img src={Group} alt="" className='hero_img' />
                                <img src={Elipse} alt="" className='elipse_style' />
                                <img src={Elipseone} alt="" className='elipse_styles' />
                                <img src={Elipsetwo} alt="" className='elipse_styless' />
                                <img src={Elipsethree} alt="" className='elipse_stylish' />
                            </div> */}
                            <Lottie options={worldOptions} height={320} width={320} />

                            <img src={Slide} alt="" className='slide_hero' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
