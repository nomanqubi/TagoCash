import React from 'react'
import './GetMore.css'
import Group from '../../../assets/Images/Group 34320.png'

export const GetMore = () => {
  return (
    <>
      <div className="container-fluid get_body pb-5">
        <div className="row pt-5">
          <div className="col">
            <p className='get_style'><span className='get_tago'>Get More</span> With Tago Cash</p>
            <p className='get_stylish'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatu Duis aute irure dolor in reprehenderit in volupta</p>
          </div>
        </div>
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-6">
              <div className='get_bodies'>
                <div className='ps-4 pt-4 pe-4 pb-4'>
                  <p className='local_style'>Local Cash</p>
                  <p className='widthdraw_style'>Withdraw local cash in 100+ Countries</p>
                  <p className='local_style pt-3'>Instant Transfer</p>
                  <p className='widthdraw_style'>Instant transfer to and from any mobile money account</p>
                  <p className='local_style pt-3'>21,000+ Store</p>
                  <p className='widthdraw_style'>Withdraw or deposit currency from 21,000+ store</p>
                  <p className='local_style pt-3'>Linked Accounts</p>
                  <p className='widthdraw_style'>Instant transfer to and from linked bank accounts</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={Group} alt="" style={{width: "100%"}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
