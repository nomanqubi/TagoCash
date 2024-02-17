import React from 'react'
import './Fasst.css'
import Vector from '../../../assets/Images/Vector.png'
import Vectorone from '../../../assets/Images/Vector (1).png'
import Line from '../../../assets/Images/Rectangle 13.png'
import Lineone from '../../../assets/Images/Rectangle 14.png'
// import iconData from './lordicons/icon.json';

export const Fasst = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className='fasst_body pb-5'>
                            <img src={Vector} alt="" className='vector_style' />
                            <img src={Vectorone} alt="" className='vector_stylish' />
                            <p className='fasst_style'>TagoCash is <span className='fasst_box'>F.A.S.S.T</span></p>
                            <div className='d-flex justify-content-center mt-4'>
                                <img src={Lineone} alt="" />
                                <img src={Line} alt="" style={{ width: "5%" }} />
                            </div>
                            <div className="row m-0 mt-4">
                                <div className="col d-flex justify-content-center align-items-center flex-column">
                                    <div className='icon_box'>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/xzalkbkz.json"
                                            trigger="hover"
                                            style={{ width: '60px', height: '60px' }}
                                        ></lord-icon>
                                    </div>
                                    <div className='fasst_stylish mt-3'><span style={{ color: "#0581F8" }}>F</span>ast</div>
                                    <p className='tago_stylish' style={{ textAlign: "center" }}>Near real-time <br /> transaction</p>
                                </div>
                                <div className="col d-flex justify-content-center align-items-center flex-column card_line">
                                    <div className='icon_box ms-4'>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/xzalkbkz.json"
                                            trigger="hover"
                                            style={{ width: '60px', height: '60px' }}
                                        ></lord-icon>
                                    </div>
                                    <div className='fasst_stylish mt-3'><span style={{ color: "#0581F8" }}>A</span>ffordable</div>
                                    <p className='tago_stylish' style={{ textAlign: "center" }}>Free internal transfer.<br />1% to 2% conversion.</p>
                                </div>
                                <div className="col d-flex justify-content-center align-items-center flex-column card_line">
                                    <div className='icon_box'>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/xzalkbkz.json"
                                            trigger="hover"
                                            style={{ width: '60px', height: '60px' }}
                                        ></lord-icon>
                                    </div>
                                    <div className='fasst_stylish mt-3'><span style={{ color: "#0581F8" }}>S</span>afe: Biometric Authentication.</div>
                                    <p className='tago_stylish' style={{ textAlign: "center" }}>Only accessible to you</p>
                                </div>
                                <div className="col d-flex justify-content-center align-items-center flex-column card_line">
                                    <div className='icon_box'>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/xzalkbkz.json"
                                            trigger="hover"
                                            style={{ width: '60px', height: '60px' }}
                                        ></lord-icon>
                                    </div>
                                    <div className='fasst_stylish mt-3'><span style={{ color: "#0581F8" }}>S</span>ecure</div>
                                    <p className='tago_stylish' style={{ textAlign: "center" }}>Only accessible to you</p>
                                </div>
                                <div className="col d-flex justify-content-center align-items-center flex-column card_line">
                                    <div className='icon_box'>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/xzalkbkz.json"
                                            trigger="hover"
                                            style={{ width: '60px', height: '60px' }}
                                        ></lord-icon>
                                    </div>
                                    <div className='fasst_stylish mt-4'><span style={{ color: "#0581F8" }}>T</span>ransparent</div>
                                    <p className='tago_stylish' style={{ textAlign: "center" }}>No hidden fees,<br />You pay what you see</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}