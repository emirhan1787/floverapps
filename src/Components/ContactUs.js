import React from 'react'
import './ContactUs.css'

export default function ContactUs() {
  return (
    <div className='mainDiv'>
        <div className='leftColumn'>
            <div className='headerDiv'>
                <span className='h1'>To Contact Us</span>
                <div className='formBlock'>
                    <div>
                        <span className='callBackText'>We will call you back</span>
                    </div>
                    <div className='textArea'>
                        <input className='textNumber' placeholder='+90 xxx xxx xx xx'></input>
                        <button className='phoneBtn'>BOOK A CALL</button>
                    </div>
                </div>
            </div>
            <div className='adressArea'>
                <div className='phoneAdress'>
                    <div className='h2Div'>
                        <span className='h2'>Phone</span>
                    </div>
                    <div className='phoneNumbers'>
                        <div>
                            <img src='/images/call.png'></img>
                            <span>+380980099777</span>
                        </div>
                        <div>
                            <img src='/images/call.png'></img>
                            <span>+380980099777</span>
                        </div>
                    </div>
                </div>
                <div className='adress'>
                    <div className='h2Div'>
                        <span className='h2'>Adress</span>
                    </div>
                    <div className='adressLocation'>
                    <div>
                            <span>+opening hours: 8 to 11 p.m.</span>
                        </div>
                        <div>
                            <img src='/images/pindrop.png'></img>
                            <span>+opening hours: 8 to 11 p.m.</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className='rightColumn'>
            <img className='rightColumn' src='/images/rightColumn.png'></img>
        </div>

            </div>
        
    )
}