import React from 'react'
import './Stay.css'
import Group from '../../../assets/Images/Rectangle 85.png'


export const Stay = () => {
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
                    <div className="col-md-4">
                        <div className='stay_card'>
                            <div className='d-flex flex-column'>
                                <img src={Group} alt="" />
                                <div className='ps-4 pt-4 pe-4 pb-2'>
                                    <p className='stay_style'>7 New Insights You Should Know Currency Exchange</p>
                                    <p className='stay_detail'>If you hear a cat hissing, spitting or growling, stay away, as that indicates it is .....</p>
                                    <div className='stay_line mt-3'/>
                                    <p className='stay_date mt-3'>27 JAN, 2022 | <span style={{color:"#0581F8"}}>Digital Currency</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='stay_card'>
                            <div className='d-flex flex-column'>
                                <img src={Group} alt="" />
                                <div className='ps-4 pt-4 pe-4 pb-2'>
                                    <p className='stay_style'>7 New Insights You Should Know Currency Exchange</p>
                                    <p className='stay_detail'>If you hear a cat hissing, spitting or growling, stay away, as that indicates it is .....</p>
                                    <div className='stay_line mt-3'/>
                                    <p className='stay_date mt-3'>27 JAN, 2022 | <span style={{color:"#0581F8"}}>Digital Currency</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='stay_card'>
                            <div className='d-flex flex-column'>
                                <img src={Group} alt="" />
                                <div className='ps-4 pt-4 pe-4 pb-2'>
                                    <p className='stay_style'>7 New Insights You Should Know Currency Exchange</p>
                                    <p className='stay_detail'>If you hear a cat hissing, spitting or growling, stay away, as that indicates it is .....</p>
                                    <div className='stay_line mt-3'/>
                                    <p className='stay_date mt-3'>27 JAN, 2022 | <span style={{color:"#0581F8"}}>Digital Currency</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                    <button className='freq_btn'>See More</button>
                    </div>
                </div>
            </div>
        </>
    )
}
