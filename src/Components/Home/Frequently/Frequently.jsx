import React, { useState } from 'react'
import './Frequently.css'
import Quest from '../../../assets/Images/Group 34342.png'
import Plus from '../../../assets/Images/image 38.png'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

export const Frequently = () => {

    const [accordionItems, setAccordionItems] = useState([
        { isOpen: false, head: "01", title: "What is Tagocash?", detail: "The Tago platform is a closed-loop environment where users can exchange digital cash. TagoCash operates the same way real world cash does. Within TagoCash wallet, users can instantly give cash money to friends, family and vendors. At any time, users can move their cash out of the TagoCash wallet by transferring it to their own bank account, mobile money account or by picking it up cash at a MoneyGram store." },
        { isOpen: false, head: "02", title: "What does it means to put money into TagoCash wallet?", detail: "Putting your money in TagoCash wallet is the same as taking your money from the bank and putting it in your wallet or your purse. Your money just happens to be stored in digital form in TagoCash wallet." },
        { isOpen: false, head: "03", title: "Why do I need TagoCash?", detail: "Security, Safety, Privacy, Affordability, Mobility and Transferability to name just a few." },
        { isOpen: false, head: "04", title: "Who or What are Partner in the TagoCash app?", detail: "In TagoCash, you cannot send money to any stranger. The recipient needs to be added to your Partner's list. It is like Friends. You can invite anyone to sign up for TagoCash wallet for free. After signing up, you can find them and send them a partner connection request. After that, they can receive money from you." },
        { isOpen: false, head: "05", title: "How Much does it cost to open a TagoCash Wallet Account?", detail: "There is no fee to open TagoCash cash account. Download the mobile app or register on the web for free. There is no fee to put money into your TagoCash Wallet Account. There are two membership plans in TagoCash. A free plan and a paid plan. Most people can operate with the free plan. There is no fee to receive money from a TagoCash user. There are nominal fees for withdrawing physical cash (i.e converting from digital cash to physical money). There is also a nominal fee for converting US dollars to other currency denominations. TagoCash withdrawal fees vary from 1% to 2%, For full transparency, we clearly label and display those non TagoCash fees at the time of transaction for your approval." },
        { isOpen: false, head: "06", title: "Is TagoCash a free service?", detail: "For Tago Fan users, TagoCash is free to send and to receive for the first 30 days or for as long as there is more than $30 in your wallet. Otherwise, you will incur a $.50 charge for any transfer (send) beyond the monthly allocated 1 free transfer. You will have unlimited ability to receive from other users for free." }
    ]);

    const toggleAccordion = (index) => {
        setAccordionItems(prevItems =>
            prevItems.map((item, i) => ({
                ...item,
                isOpen: i === index ? !item.isOpen : false // Toggle the clicked item and close others
            }))
        );
    };

    const AccordionItem = ({ isOpen, toggleAccordion, head, title, detail }) => {
        return (
            <div className='accordion_fre_body pe-3 pb-2'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <div className='freq_line' style={{ background: isOpen ? '#0581F8' : '#CFD3D7' }} />
                        <div className='d-flex align-items-center'>
                            <div className='d-flex flex-column ms-3'>
                                <p className='freq_style'>{head}</p>
                                <p className={isOpen ? 'freq_head' : 'freq_heads'}>{title}</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div onClick={toggleAccordion} style={{ cursor: 'pointer' }}>
                            {isOpen ? <CiCirclePlus style={{ fontSize: "20px" }} /> : <CiCircleMinus style={{ fontSize: "20px" }} />}
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className='accordion_fre_detail open'>
                        <p className='m-0 pe-4'>{detail}</p>
                    </div>
                )}
            </div>
        );
    };


    return (
        <>
            <div className="container-fluid frequently_body pb-3">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col">
                            <p className='tago_cashies_style'>Frequently Asked <span className='get_tago'>Questions</span></p>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-lg-6">
                            <div className='d-flex flex-column gap-3'>
                            {accordionItems.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    isOpen={item.isOpen}
                                    toggleAccordion={() => toggleAccordion(index)}
                                    head={item.head}
                                    title={item.title}
                                    detail={item.detail}
                                />
                            ))}
                            <button className='freq_btn'>See More</button>
                            </div> 
                        </div>
                        <div className="col-lg-6 quest_img">
                                <img src={Quest} alt="" className='freq_img' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
