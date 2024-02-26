import React, { useState } from 'react'
import './Tago.css'
import Group from '../../../assets/Images/image 39.png'
import Star from '../../../assets/Images/image 40.png'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

export const Tago = () => {

    const [accordionItems, setAccordionItems] = useState([
        { isOpen: false, title: "Tagocash is globally available", detail: "TagoCash is the cash of where you happen to be Instantly exchangeable for local consumption." },
        { isOpen: false, title: "TagoCash is very safe", detail: "TagoCash is the cash of where you happen to be Instantly exchangeable for local consumption." },
        { isOpen: false, title: "Tagocash is globally available", detail: "Using TagoCash protects your privacy. You do not need to share your address or bank or credit/debit card details with anyone. When you want to give TagoCash to someone, you only need their mobile number and email address." }
    ]);

    const toggleAccordion = (index) => {
        setAccordionItems(prevItems =>
            prevItems.map((item, i) => ({
                ...item,
                isOpen: i === index ? !item.isOpen : false // Toggle the clicked item and close others
            }))
        );
    };

    const AccordionItem = ({ isOpen, toggleAccordion, title, detail }) => {
        return (
            <div className='accordion_body ps-2 pe-2 pt-2 pb-2' style={{ border: isOpen ? '1px solid #0581F8' : '1px solid #8F8F8F' }}>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        {isOpen ? <img src={""} alt="" style={{ marginRight: '32px' }} /> : <img src={Star} alt="" style={{ marginRight: '10px' }} />}

                        <p className='accordion_style' style={{ color: isOpen ? '#0581F8' : '#2C2C2C' }}>{title}</p>
                    </div>
                    <div onClick={toggleAccordion} style={{ cursor: 'pointer' }}>
                        {isOpen ? <IoMdArrowDropup style={{ fontSize: "20px" }} /> : <IoMdArrowDropdown style={{ fontSize: "20px" }} />}
                    </div>
                </div>
                {isOpen && (
                    <div className='accordion_detail open'>
                        <p className='m-0 pe-4'>{detail}</p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col">
                            <p className='tago_cashies_style'>Tago<span style={{ color: "#1B3D9D" }}>Cash </span>
                                is better than <span className='get_tago'>Cash!</span>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 img_div">
                            <img src={Group} alt="" className='tago_img' />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center tago_accordion">
                            <div className='d-flex gap-4 flex-column'>
                                {accordionItems.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        isOpen={item.isOpen}
                                        toggleAccordion={() => toggleAccordion(index)}
                                        title={item.title}
                                        detail={item.detail}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}