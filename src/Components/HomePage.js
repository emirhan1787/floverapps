import React from 'react'
import './HomePage.css'
import {useState} from 'react';
import NavBar from './NavBar';
import ContentCategory from './ContentCategory';
import ChooseUs from './ChooseUs';
import ContactUs from './ContactUs';
import OurService from './OurService';


export default function HomePage() {
  return (
    <div className='mainSection'>
        <NavBar/>
        <div className='topSection'>
            <div className='leftColumn'>
                <div className='row1'>
                    <span className='row1Heading'>Kyiv LuxeBouqets®</span>
                    <span className='row1Text'>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</span>
                </div>
                <div className='row2'>
                    <img className='imgHero' src='images/imgHero.png'></img>
                    <div className='imgDescription'>
                        <span className='imgDescTxt'>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</span>
                    </div>
                </div>
            </div>
            <div className='rightColumn'>
                <div className='contentCategory'>
                    <div className='contenCard'>
                    <ContentCategory/>
                    </div>
                </div>
            </div>
        </div>
        <div className='aboutUS'>
           <div className='leftAbout'>
            <div className='divAboutTitle'><span className='textAbout'>About us</span></div>
           </div>
           <div className='rightAbout'>
            <div className='aboutTextArea'>
                <span className='aboutHeader'>
                    Kyiv LuxeBouquets
                </span>
                <span className='aboutContent'>
                    We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.
                </span>
            </div>
            <button className='learnButton'>LEARN MORE</button>
           </div> 
        </div>
        <div className='chooseUS'>
            <ChooseUs/>
        </div>
        <div className='contactUs'>
            <ContactUs/>
        </div>
        <div className='ourService'>
            <OurService/>
        </div>
    </div>
  )
}
