import React, { useState, useEffect } from 'react'
import './Exchange.css'
import Vector from '../../../assets/Images/Vectorone.png'
import AE from '../../../assets/Images/ae.png'
import Europe from '../../../assets/Images/europe.png'
import Circle from '../../../assets/Images/Group 45.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import countryList from './Countrylist';
import Wallet from '../../../assets/Images/image 30.png'
import Flash from '../../../assets/Images/image 31.png'
import Easy from '../../../assets/Images/image 32.png'

export const Exchange = () => {

    const [selectedCountries, setSelectedCountries] = useState({});

    function loadFlag(event) {
        const countryCode = event.target.value;
        const dropdownId = event.target.id; // Get the ID of the dropdown
        setSelectedCountries(prevState => ({
            ...prevState,
            [dropdownId]: countryCode // Update the selected country for the corresponding dropdown
        }));
    }

    return (
        <>
            <div className="container-fluid exchange_body mt-5 pb-5 position-relative">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6 cols_gap pt-4">
                            <div>
                                <p className='exchange_style'>Best <span className='exchange_stylish'>Exchange rates</span></p>
                                <div className="d-flex align-items-center pt-4">
                                    <div className="exchange_box">
                                        <img src={Wallet} alt="" />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p className='exchanges_content'>Free Wallet Transfer</p>
                                        <p className='exchange_content'>No intermediaries. It is like exchanging cash in person!</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="exchange_box">
                                        <img src={Flash} alt="" />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p className='exchanges_content'>Instant Transfer Delivery</p>
                                        <p className='exchange_content'>If you lose your wallet key, we can help you recover. We've <br /> built our own account recovery system.</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="exchange_box">
                                        <img src={Easy} alt="" />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p className='exchanges_content'>Safe and Secure</p>
                                        <p className='exchange_content'>Safe and easy to use 2-Factor Authentication process, <br /> including FaceID and FingerprintID</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 cols_gap exchangerate pt-4 pb-5">
                            <div className="exchangerate_box ps-4 pe-4 pt-4 pb-4 position-relative">
                                <p className='exchangerate_content'>You send exactly</p>
                                <div className='exchange_input ps-3'>
                                    <div className='exchange_box_one pe-2'>
                                        <input type="text" className='exchangerate_input' />
                                    </div>
                                    <div className='exchange_box_two'>
                                        <img
                                            src={selectedCountries.dropdown1 ? `https://flagcdn.com/48x36/${countryList[selectedCountries.dropdown1].toLowerCase()}.png` : 'https://flagcdn.com/48x36/ae.png'}
                                            style={{ width: "18%" }}
                                            alt="Flag"
                                        />
                                        <select id="dropdown1" className='drop_style_head' onChange={loadFlag} value={selectedCountries.dropdown1 || ''}>
                                            {Object.keys(countryList).map((currencyCode) => (
                                                <option key={currencyCode} value={currencyCode}>
                                                    {countryList[currencyCode]}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <img src={Circle} alt="" className='circle_img' />
                                <p className='exchangerate_content mt-4'>Receipient gets</p>
                                <div className='exchange_input ps-3' style={{ border: "1px solid #E1E1E1" }}>
                                    <div className='exchange_box_one pe-2'>
                                        <input type="text" className='exchangerate_input' />
                                        <input type="text" className='exchange_input_one' />
                                    </div>
                                    <div className='exchange_box_two'>
                                        <img
                                            src={selectedCountries.dropdown2 ? `https://flagcdn.com/48x36/${countryList[selectedCountries.dropdown2].toLowerCase()}.png` : 'https://flagcdn.com/48x36/ae.png'}
                                            style={{ width: "18%" }}
                                            alt="Flag"
                                        />
                                        <select id="dropdown2" className='drop_style_head' onChange={loadFlag} value={selectedCountries.dropdown2 || ''}>
                                            {Object.keys(countryList).map((currencyCode) => (
                                                <option key={currencyCode} value={currencyCode}>
                                                    {countryList[currencyCode]}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4 col-6">
                                        <p className='rate_style'>1GBP = 1.17 Euro</p>
                                    </div>
                                    <div className="col-sm-4 col-6">
                                        <p className='rate_style'>10GBP = 11.72 Euro</p>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className='rate_style'>100GBP = 117.20 Euro</p>
                                    </div>
                                </div>
                                <button className='exchange_btn'>Exchange Now</button>
                                <div className='d-flex gap-2 mt-3'>
                                    <div className='exchange_circle'>i</div>
                                    <p className='exchangerate_content' style={{ color: "#5A5555" }}>Exchange rate may vary at the time of transaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Vector} alt="" className='exchange_vector' />
            </div>
        </>
    )
}
