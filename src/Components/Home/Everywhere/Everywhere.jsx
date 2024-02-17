import React from 'react'
import './Everwhere.css'
import Vector from '../../../assets/Images/vectorthree.png'
import Vectorone from '../../../assets/Images/vectorfour.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import USA from '../../../assets/Images/usa.png'
import Arrow from '../../../assets/Images/arrow.png'
import Arrowone from '../../../assets/Images/arrowone.png'

export const Everywhere = () => {
    return (
        <>
            <div className="container-fluid position-relative pb-5">
                <img src={Vector} alt="" className='every_img' />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='everywhere_style pt-4'>Everywhere You Go <br /><span className='everywhere_stylish'>TagoCash</span></div>
                        </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                        <div className="col-md-4">
                            <select className="everywhere_input ps-3 pe-3" aria-label="Deposit Options">
                                <option value="" >Deposit Option</option>
                                <option value="Bank">Bank</option>
                                <option value="ATM">ATM</option>
                                <option value="Card">Card</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <div className='everywhere_input ps-3 pe-3' style={{ border: "1px solid #0581F8" }}>
                                <div className='d-flex justify-content-between align-items-center w-100'>
                                    <p className='everywhere_drop_head'>Search Countries</p>
                                    <p style={{ fontSize: "25px", margin: "0", cursor: "pointer" }}><CiSearch /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <div className='every_box ps-3'>
                                <div className='d-flex align-items-center'>
                                    <div style={{ borderRight: "1px solid #D9D9D9", paddingRight: "7px", width: "10%" }}>
                                        <img src={USA} alt="" />
                                    </div>
                                    <div className='d-flex flex-column gap-1 align-items-center' style={{ width: "75%" }}>
                                        <div className='d-flex gap-2 mt-1 align-items-center'>
                                            <div className='every_circle ms-3' />
                                            <p className='every_cash'>Cash Withdraw</p>
                                            <div className='every_circle ms-3' />
                                            <p className='every_cash'>Cash Withdraw</p>
                                            <div className='every_circle ms-3' />
                                            <p className='every_cash'>Cash Withdraw</p>
                                        </div>
                                        <div className='d-flex gap-2 mt-1 align-items-center'>
                                            <div className='every_circle ms-3' />
                                            <p className='every_cash'>Cash Withdraw</p>
                                            <div className='every_circle ms-3' />
                                            <p className='every_cash'>Cash Withdraw</p>
                                            <div className='every_circle ms-3' />
                                            <p className='every_cash'>Cash Withdraw</p>
                                        </div>
                                    </div>
                                    <div className='every_box_one d-flex justify-content-center align-items-center'>
                                        <img src={Arrowone} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='every_box d-flex align-items-center ps-3 pe-3'>
                                <div className='d-flex justify-content-between align-items-center w-100'>
                                    <div>
                                        <img src={USA} alt="" />
                                        <span className='everywhere_drop_head ps-2'>USA</span>
                                    </div>
                                    <div>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='every_box d-flex align-items-center ps-3 pe-3'>
                                <img src={USA} alt="" />
                                <span className='everywhere_drop_head ps-2'>USA</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <div className='every_box d-flex align-items-center ps-3'>
                                <div className='d-flex justify-content-between align-items-center w-100'>
                                    <div>
                                        <img src={USA} alt="" />
                                        <span className='everywhere_drop_head ps-2'>USA</span>
                                    </div>
                                    <div className='every_box_one d-flex justify-content-center align-items-center'>
                                        <img src={Arrowone} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='every_box d-flex align-items-center ps-3 pe-3'>
                                <div className='d-flex justify-content-between align-items-center w-100'>
                                    <div>
                                        <img src={USA} alt="" />
                                        <span className='everywhere_drop_head ps-2'>USA</span>
                                    </div>
                                    <div>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='every_box d-flex align-items-center ps-3 pe-3'>
                                <img src={USA} alt="" />
                                <span className='everywhere_drop_head ps-2'>USA</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <div className='every_box d-flex align-items-center ps-3'>
                                <div className='d-flex justify-content-between align-items-center w-100'>
                                    <div>
                                        <img src={USA} alt="" />
                                        <span className='everywhere_drop_head ps-2'>USA</span>
                                    </div>
                                    <div className='every_box_one d-flex justify-content-center align-items-center'>
                                        <img src={Arrowone} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='every_box d-flex align-items-center ps-3 pe-3'>
                                <div className='d-flex justify-content-between align-items-center w-100'>
                                    <div>
                                        <img src={USA} alt="" />
                                        <span className='everywhere_drop_head ps-2'>USA</span>
                                    </div>
                                    <div>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='every_box d-flex align-items-center ps-3 pe-3'>
                                <img src={USA} alt="" />
                                <span className='everywhere_drop_head ps-2'>USA</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col d-flex justify-content-center">
                            <button className='everywhere_btn'>
                                See More
                            </button>
                        </div>
                    </div>
                </div>
                <img src={Vectorone} alt="" style={{position: "absolute", bottom: "0", right: "0"}} />
            </div>
        </>
    )
}
