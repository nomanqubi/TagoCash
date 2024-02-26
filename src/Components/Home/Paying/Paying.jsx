import React, { useState } from 'react'
import './Paying.css'
import Userlist from '../../../assets/svg/userlist.svg'
import Amount from '../../../assets/svg/amount.svg'
import Pay from '../../../assets/svg/pay.svg'

export const Paying = () => {

    const [step, setStep] = useState(1);

    return (
        <>
            <div className="container-fluid" style={{ background: "#F4F9FF" }}>
                <div className="row">
                    <div className="col-lg-6 paying_body pb-4">
                        <p className='paying_style pt-4'>Paying Anyone is <span className='paying_head'>Easier</span></p>
                        <div className='paying_pading d-flex flex-column'>
                            <button className='paying_btn' onClick={() => setStep(1)}>
                                <p className='paying_content' style={{ color: step === 1 ? '#0581F8' : '#FFFFFF33' }}>01</p>
                                <p className='paying_content_one' style={{ color: step === 1 ? '#0581F8' : 'white' }}>Choose Recipient</p>
                            </button>
                            {step === 1 && (
                                <p className='paying_content_two'>Find your partner on TagoCash app via their phone or email.</p>
                            )}
                            <button className='paying_btn' onClick={() => setStep(2)}>
                                <p className='paying_content' style={{ color: step === 2 ? '#0581F8' : '#FFFFFF33' }}>02</p>
                                <p className='paying_content_one' style={{ color: step === 2 ? '#0581F8' : 'white' }}>Enter Amount</p>
                            </button>
                            {step === 2 && (
                                <p className='paying_content_two'>Enter the amount to send from your wallet balance.</p>
                            )}
                            <button className='paying_btn' onClick={() => setStep(3)}>
                                <p className='paying_content' style={{ color: step === 3 ? '#0581F8' : '#FFFFFF33' }}>03</p>
                                <p className='paying_content_one' style={{ color: step === 3 ? '#0581F8' : 'white' }}>Confirm and Pay</p>
                            </button>
                            {step === 3 && (
                                <p className='paying_content_two'>Money is received by your partner in less than 10 seconds!</p>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6 paying_col">
                        {step === 1 && <img src={Userlist} alt="Userlist" className='paying_img' />}
                        {step === 2 && <img src={Amount} alt="Amount" className='paying_img' />}
                        {step === 3 && <img src={Pay} alt="Pay" className='paying_img' />}
                    </div>
                </div>
            </div>
        </>
    )
}
