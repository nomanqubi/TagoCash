import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbars.css'
import Logo from '../assets/Images/logo.png'
import { IoReorderThreeOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiFillCloseSquare } from "react-icons/ai";
import Polygon from '../assets/Images/Polygon 1.png'

export const Navbars = () => {

  const [activeTab, setActiveTab] = useState('Home');
  const [show, setShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavLinkClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${scrollPosition > 0 ? 'scrolled' : ''}`}>
        <div className="container nav_body">
          <img src={Logo} alt="" />
          <div className='d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block'>
            <ul className="navbar-nav gap-4 ">
              <li className="nav-item">
                <NavLink className={`nav-link ${activeTab === 'Home' ? 'actives' : ''}`} to="/" onClick={() => handleNavLinkClick('Home')}>Home</NavLink>
                {activeTab === 'Home' && <img src={Polygon} alt="" />}
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${activeTab === 'Features' ? 'actives' : ''}`} to="/" onClick={() => handleNavLinkClick('Features')}>Features</NavLink>
                {activeTab === 'Features' && <img src={Polygon} alt="" />}
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${activeTab === 'Easy & Safe' ? 'actives' : ''}`} to="/" onClick={() => handleNavLinkClick('Easy & Safe')}>Easy & Safe</NavLink>
                {activeTab === 'Easy & Safe' && <img src={Polygon} alt="" />}
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${activeTab === 'Togo Works' ? 'actives' : ''}`} to="/" onClick={() => handleNavLinkClick('Togo Works')}>Togo Works</NavLink>
                {activeTab === 'Togo Works' && <img src={Polygon} alt="" />}
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${activeTab === 'Custom Support' ? 'actives' : ''}`} to="/" onClick={() => handleNavLinkClick('Custom Support')}>Custom Support</NavLink>
                {activeTab === 'Custom Support' && <img src={Polygon} alt="" />}
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
        <ul className="navbar-nav gap-4 ">
              <li className="nav-item">
                <NavLink className={`nav-link ${activeTab === 'Home' ? 'actives' : ''}`} to="/" onClick={() => handleNavLinkClick('Home')}>Home</NavLink>
                {activeTab === 'Home' && <img src={Polygon} alt="" />}
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${activeTab === 'Features' ? 'actives' : ''}`} to="/" onClick={() => handleNavLinkClick('Features')}>Features</NavLink>
                {activeTab === 'Features' && <img src={Polygon} alt="" />}
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${activeTab === 'Easy & Safe' ? 'actives' : ''}`} to="/" onClick={() => handleNavLinkClick('Easy & Safe')}>Easy & Safe</NavLink>
                {activeTab === 'Easy & Safe' && <img src={Polygon} alt="" />}
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${activeTab === 'Togo Works' ? 'actives' : ''}`} to="/" onClick={() => handleNavLinkClick('Togo Works')}>Togo Works</NavLink>
                {activeTab === 'Togo Works' && <img src={Polygon} alt="" />}
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${activeTab === 'Custom Support' ? 'actives' : ''}`} to="/" onClick={() => handleNavLinkClick('Custom Support')}>Custom Support</NavLink>
                {activeTab === 'Custom Support' && <img src={Polygon} alt="" />}
              </li>
            </ul>
        </div>
      </Offcanvas>
    </>
  )
}
