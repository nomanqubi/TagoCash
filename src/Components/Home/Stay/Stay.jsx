import React from 'react'
import './Stay.css'
import Group from '../../../assets/Images/Rectangle 85.png'


export const Stay = () => {

    const StayCard = ({ title, detail, date, currency }) => {
        return (
            <div className='stay_card'>
                <div className='d-flex flex-column'>
                    <img src={Group} alt="" />
                    <div className='ps-4 pt-4 pe-4 pb-2'>
                        <p className='stay_style'>{title}</p>
                        <p className='stay_detail'>{detail}</p>
                        <div className='stay_line mt-3' />
                        <p className='stay_date mt-3'>{date} <span style={{ color: "#0581F8" }}>{currency}</span></p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="container pb-5">
                <div className="row pt-5">
                    <div className="col">
                        <p className='get_style'>Stay Updated With <span className='get_tago'>Our Blog</span></p>
                        <p className='get_stylish'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatu Duis aute irure dolor in reprehenderit in volupta</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4 stay_cards">
                        <StayCard
                            title="7 New Insights You Should Know Currency Exchange"
                            detail="If you hear a cat hissing, spitting or growling, stay away, as that indicates it is ..."
                            date="27 JAN, 2022 |"
                            currency="Digital Currency"
                        />
                    </div>
                    <div className="col-md-4 stay_cards">
                        <StayCard
                            title="7 New Insights You Should Know Currency Exchange"
                            detail="If you hear a cat hissing, spitting or growling, stay away, as that indicates it is ..."
                            date="27 JAN, 2022 |"
                            currency="Digital Currency"
                        />
                    </div>
                    <div className="col-md-4">
                        <StayCard
                            title="7 New Insights You Should Know Currency Exchange"
                            detail="If you hear a cat hissing, spitting or growling, stay away, as that indicates it is ..."
                            date="27 JAN, 2022 |"
                            currency="Digital Currency"
                        />
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <button className='freq_btn'>See More</button>
                    </div>
                </div>
            </div>
        </>
    )
}