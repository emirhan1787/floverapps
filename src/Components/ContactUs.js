import React from 'react'
import './ContactUs.css'

export default function ContactUs() {
    return (
        <>
            <div className='contactUsMainDiv'>
                <div className='contactUsLeftCol'>
                    <div className='contactUsHeaderDiv'>
                        <span className='contactUsH1'>To Contact Us</span>
                        <div className='contactUsFormBlock'>
                            <div>
                                <span className='contactUsCallBackText'>We will call you back</span>
                            </div>
                            <div className='contactUsTextArea'>
                                <input className='contactUsTextNumber' placeholder='+90 xxx xxx xx xx'></input>
                                <button className='contactUsPhoneBtn'>BOOK A CALL</button>
                            </div>
                        </div>
                    </div>
                    <div className='contactUsAdressArea'>
                        <div className='contactUsPhoneAdress'>
                            <div className='contactUsH2Div'>
                                <span className='contactUsH2'>Phone</span>
                            </div>
                            <div className='contactUsPhoneNumbers'>
                                <div>
                                    <img src='/images/call.png' alt='right' />
                                    <span>+380980099777</span>
                                </div>
                                <div>
                                    <img src='/images/call.png' alt='right' />
                                    <span>+380980099777</span>
                                </div>
                            </div>
                        </div>
                        <div className='contactUsAdress'>
                            <div className='contactUsH2Div'>
                                <span className='contactUsH2'>Adress</span>
                            </div>
                            <div className='contactUsAdressLocation'>
                                <div>
                                    <span>+opening hours: 8 to 11 p.m.</span>
                                </div>
                                <div>
                                    <img src='/images/pindrop.png' alt='right' />
                                    <span>+opening hours: 8 to 11 p.m.</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='contactUsRightColumn'>
                    <img className='contactUsRightColumn' src='/images/rightColumn.png' alt='right' />
                </div>

            </div>
        </>
    )
}