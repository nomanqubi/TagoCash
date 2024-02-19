import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbars.css'
import Logo from '../assets/Images/logo.png'
import { IoReorderThreeOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiFillCloseSquare } from "react-icons/ai";

export const Navbars = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container nav_body">
          <img src={Logo} alt="" />
          <div className='d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block'>
            <ul className="navbar-nav gap-4 ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Features</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Easy & Safe</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Togo Works</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Custom Support</NavLink>
              </li>
            </ul>
          </div>
          <div className='d-flex align-items-center'>
            <Button onClick={handleShow} className="d-xxl-none d-xl-none d-lg-none d-block" style={{ fontSize: "25px" }}>
              <IoReorderThreeOutline />
            </Button>
            <button className='sign_btn'>
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="top">
        <div className='d-flex justify-content-end pt-2 pe-4'>
          <button type="button" className='close_btn' onClick={handleClose}><AiFillCloseSquare /></button>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Features</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Easy & Safe</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Togo Works</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Custom Support</NavLink>
            </li>
          </ul>
        </div>
      </Offcanvas>
    </>
  )
}
