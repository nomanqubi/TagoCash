import React, { useEffect } from 'react'
import './Fasst.css'
import Vector from '../../../assets/Images/Vector.png'
import Vectorone from '../../../assets/Images/Vector (1).png'
import Line from '../../../assets/Images/Rectangle 13.png'
import Lineone from '../../../assets/Images/Rectangle 14.png'
import Lottie from 'react-lottie';
import Coin from '../../../../Coin.json';
import Auth from '../../../../Auth.json';
import Eye from '../../../../Eye.json'
import Tick from '../../../../Tick.json'
import Flash from '../../../../Flash.json'
import Lock from '../../../../Lock.json'

export const Fasst = () => {

    const coinOptions = {
        loop: true,
        autoplay: true,
        animationData: Coin,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const authOptions = {
        loop: true,
        autoplay: true,
        animationData: Auth,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const eyeOptions = {
        loop: true,
        autoplay: true,
        animationData: Eye,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const tickOptions = {
        loop: true,
        autoplay: true,
        animationData: Lock,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const flashOptions = {
        loop: true,
        autoplay: true,
        animationData: Flash,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const cardData = [
        {
            iconOptions: flashOptions,
            title: "Fast",
            subTitle: "Near real-time transaction"
        },
        {
            iconOptions: coinOptions,
            title: "Affordable",
            subTitle: "Free internal transfer. 1% to 2% conversion."
        },
        {
            iconOptions: authOptions,
            title: "Safe:Biometric Authentication.",
            subTitle: "Biometric Authentication. Only accessible to you."
        },
        {
            iconOptions: tickOptions,
            title: "Secure: ",
            subTitle: "Only accessible to you"
        },
        {
            iconOptions: eyeOptions,
            title: "Transparent",
            subTitle: "No hidden fees, You pay what you see"
        }
    ];

    const Card = ({ iconOptions, title, subTitle, isLast }) => (
        <div className={`col ${isLast ? '' : 'card_line'}`}>
            <div className='d-flex justify-content-center align-items-center' style={{ height: "110px", width: "100%" }}>
                <div className='icon_box'>
                    <Lottie options={iconOptions} height={60} width={60} />
                </div>
            </div>
            <div className='fasst_stylish'><span style={{ color: "#0581F8" }}>{title.charAt(0)}</span>{title.slice(1)}</div>
            <p className='fasst_styles'>{subTitle}</p>
        </div>
    );

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className='fasst_body pb-5'>
                            <img src={Vector} alt="" className='vector_style' />
                            <img src={Vectorone} alt="" className='vector_stylish' />
                            <p className='fasst_style'>TagoCash is <span className='fasst_box'>FASST</span></p>
                            <div className='d-flex justify-content-center mt-4'>
                                <img src={Lineone} alt="" />
                                <img src={Line} alt="" style={{ width: "5%" }} />
                            </div>
                            <div className="row m-0 mt-4">
                                {cardData.map((card, index) => (
                                    <Card key={index} {...card} isLast={index === cardData.length - 1} className="m-0 p-0" />
                                ))}
                            </div>
                            {/* <div className="row m-0 mt-4">
                                <div className="col">
                                    <div className='d-flex justify-content-center align-items-center' style={{ height: "110px", width: "100%" }}>
                                        <div className='icon_box'>
                                        <Lottie options={flashOptions} height={60} width={60} />
                                        </div>
                                    </div>
                                    <div className='fasst_stylish'><span style={{ color: "#0581F8" }}>F</span>ast</div>
                                    <div className='tago_stylish' style={{ textAlign: "center" }}>Near real-time <br /> transaction</div>
                                </div>
                                <div className="col card_line">
                                    <div className='d-flex justify-content-center align-items-center' style={{ height: "110px", width: "100%" }}>
                                        <div className='icon_box'>
                                        <Lottie options={coinOptions} height={60} width={60} />
                                        </div>
                                    </div>
                                    <div className='fasst_stylish'><span style={{ color: "#0581F8" }}>A</span>ffordable</div>
                                    <p className='tago_stylish' style={{ textAlign: "center" }}>Free internal transfer.<br />1% to 2% conversion.</p>
                                </div>
                                <div className="col card_line">
                                    <div className='d-flex justify-content-center align-items-center' style={{ height: "110px", width: "100%" }}>
                                        <div className='icon_box'>
                                        <Lottie options={authOptions} height={60} width={60} />
                                        </div>
                                    </div>
                                    <div className='fasst_stylish'><span style={{ color: "#0581F8" }}>S</span>afe: Biometric Authentication.</div>
                                    <p className='tago_stylish' style={{ textAlign: "center" }}>Only accessible to you</p>
                                </div>
                                <div className="col card_line">
                                    <div className='d-flex justify-content-center align-items-center' style={{ height: "110px", width: "100%" }}>
                                        <div className='icon_box'>
                                        <Lottie options={tickOptions} height={60} width={60} />
                                        </div>
                                    </div>
                                    <div className='fasst_stylish'><span style={{ color: "#0581F8" }}>S</span>ecure</div>
                                    <p className='tago_stylish' style={{ textAlign: "center" }}>Only accessible to you</p>
                                </div>
                                <div className="col card_line">
                                    <div className='d-flex justify-content-center align-items-center' style={{ height: "110px", width: "100%" }}>
                                        <div className='icon_box'>
                                        <Lottie options={eyeOptions} height={60} width={60} />
                                        </div>
                                    </div>
                                    <div className='fasst_stylish'><span style={{ color: "#0581F8" }}>T</span>ransparent</div>
                                    <p className='tago_stylish' style={{ textAlign: "center" }}>No hidden fees,<br />You pay what you see</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}