import React from 'react'
import './Paying.css'
import Group from '../../../assets/Images/groups.png'

export const Paying = () => {
    return (
        <>
            <div className="container-fluid" style={{background: "#F4F9FF"}}>
                <div className="row">
                    <div className="col-lg-6 paying_body pb-4">
                        <p className='paying_style pt-4'><span className='paying_head'>Paying Easier</span> To Anyone</p>
                        <div className='ps-5 pe-5'>
                            <p className='paying_content'>01</p>
                            <p className='paying_content_one'>Choose Recipient</p>
                            <p className='paying_content_two'>Find your partner on TagoCash app via their phone or email.</p>
                            <p className='paying_content'>02</p>
                            <p className='paying_content_one'>Enter Amount</p>
                            <p className='paying_content_two'>Enter the amount to send from your wallet balance.</p>
                            <p className='paying_content'>03</p>
                            <p className='paying_content_one'>Confirm and Pay</p>
                            <p className='paying_content_two'>Money is received by your partner in less than 10 seconds!</p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <img src={Group} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
