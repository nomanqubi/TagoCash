import React, { useState } from 'react'
import './Everwhere.css'
import Vector from '../../../assets/Images/vectorthree.png'
import Vectorone from '../../../assets/Images/vectorfour.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import USA from '../../../assets/Images/usa.png'
import Arrow from '../../../assets/Images/arrow.png'
import Arrowone from '../../../assets/Images/arrowone.png'
import { RiArrowDropUpLine } from "react-icons/ri";
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoIosRadioButtonOn } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

export const Everywhere = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage the visibility of the dropdown
    const [selectedOption, setSelectedOption] = useState(null); // State to store the selected option

    const handleRadioChange = (id) => {
        setSelectedOption(id);
        console.log(id)
    };

    const handleClearSelection = () => {
        setSelectedOption(null); // Clear the selected option
    };


    return (
        <>
            <div className="container-fluid position-relative pb-5">
                <img src={Vector} alt="" className='every_img' />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='everywhere_style pt-4'>Everywhere You Go <br />
                            <span className='everywhere_stylish mt-5'>TagoCash</span></div>
                        </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                        <div className="col-md-4"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}>
                            <div className="search_input_container">
                                <button className='everywhere_input ps-3 pe-3'
                                    style={{ background: "none", border: isDropdownOpen ? "2px solid #0581F8" : "1px solid #94979A" }}
                                >
                                    Deposit Option
                                </button>
                                {isDropdownOpen ? (
                                    <RiArrowDropUpLine className="search_icon me-3" />
                                ) : (
                                    <RiArrowDropDownLine className="search_icon me-3" />
                                )}

                            </div>
                            {isDropdownOpen && (
                                <div className='dropdown_every_list mt-2 pt-3 ps-3 pe-3 pb-3'
                                >
                                    <div className='d-flex flex-column gap-2'>
                                        <label style={{ cursor: "pointer" }}>
                                            <input
                                                type="radio"
                                                name="radiobutton"
                                                checked={selectedOption === "Bank Deposit"}
                                                onChange={() => handleRadioChange("Bank Deposit")}
                                                style={{ display: "none" }}
                                            />
                                            <span className="check_find">
                                                {selectedOption === "Bank Deposit" ? <IoIosRadioButtonOn className='radio_icon' /> : <IoIosRadioButtonOff className='radio_icon' />}
                                            </span>
                                            <span className='drop_option ms-2'>Bank Deposit</span>
                                        </label>

                                        <div className='d-flex gap-2'>
                                            <label style={{ cursor: "pointer" }}>
                                                <input
                                                    type="radio"
                                                    name="radiobutton"
                                                    checked={selectedOption === "Bank Withdraw"}
                                                    onChange={() => handleRadioChange("Bank Withdraw")}
                                                    style={{ display: "none" }}
                                                />
                                                <span className="check_find">
                                                    {selectedOption === "Bank Withdraw" ? <IoIosRadioButtonOn className='radio_icon' /> : <IoIosRadioButtonOff className='radio_icon' />}
                                                </span>
                                                <span className='drop_option ms-2'>Bank Withdraw</span>
                                            </label>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <label style={{ cursor: "pointer" }}>
                                                <input
                                                    type="radio"
                                                    name="radiobutton"
                                                    checked={selectedOption === "Cash Deposit"}
                                                    onChange={() => handleRadioChange("Cash Deposit")}
                                                    style={{ display: "none" }}
                                                />
                                                <span className="check_find">
                                                    {selectedOption === "Cash Deposit" ? <IoIosRadioButtonOn className='radio_icon' /> : <IoIosRadioButtonOff className='radio_icon' />}
                                                </span>
                                                <span className='drop_option ms-2'>Cash Deposit</span>
                                            </label>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <label style={{ cursor: "pointer" }}>
                                                <input
                                                    type="radio"
                                                    name="radiobutton"
                                                    checked={selectedOption === "Cash Withdraw"}
                                                    onChange={() => handleRadioChange("Cash Withdraw")}
                                                    style={{ display: "none" }}
                                                />
                                                <span className="check_find">
                                                    {selectedOption === "Cash Withdraw" ? <IoIosRadioButtonOn className='radio_icon' /> : <IoIosRadioButtonOff className='radio_icon' />}
                                                </span>
                                                <span className='drop_option ms-2'>Cash Withdraw</span>
                                            </label>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <label style={{ cursor: "pointer" }}>
                                                <input
                                                    type="radio"
                                                    name="radiobutton"
                                                    checked={selectedOption === "Creditcard Deposit"}
                                                    onChange={() => handleRadioChange("Creditcard Deposit")}
                                                    style={{ display: "none" }}
                                                />
                                                <span className="check_find">
                                                    {selectedOption === "Creditcard Deposit" ? <IoIosRadioButtonOn className='radio_icon' /> : <IoIosRadioButtonOff className='radio_icon' />}
                                                </span>
                                                <span className='drop_option ms-2'>Creditcard Deposit</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-4">
                            <div className="search_input_container">
                                <input type="text" className="search_input ps-3 pe-3" placeholder="Search Countries" />
                                <CiSearch className="search_icon me-3" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <div className='d-flex justify-content-center'>
                                {selectedOption && (
                                    <p className='select_option'>
                                        {selectedOption}
                                        <IoIosClose style={{ fontSize: "25px", cursor: "pointer" }} onClick={handleClearSelection} />
                                    </p>
                                )}
                                {/* <p className='select_option'>{selectedOption}<IoIosClose style={{ fontSize: "25px" }} /></p> */}
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
                                    <div className='d-flex flex-column gap-1' style={{ width: "75%" }}>
                                        <div className='d-flex gap-1'>
                                            <div className='every_circle ms-3' />
                                            <p className='every_cash'>Bank Deposit</p>
                                            <div className='every_circle ms-3' />
                                            <p className='every_cash'>Bank Withdraw</p>
                                            <div className='every_circle ms-3' />
                                            <p className='every_cash'>Cash Withdraw</p>
                                        </div>
                                        <div className='d-flex gap-1 mt-1 ms-3'>
                                            <div className='every_circle' />
                                            <p className='every_cash'>Cash Deposit</p>
                                            <div className='every_circle ms-3' />
                                            <p className='every_cash'>Creditcard Deposit</p>
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
                <img src={Vectorone} alt="" style={{ position: "absolute", bottom: "0", right: "0" }} />
            </div>
        </>
    )
}
