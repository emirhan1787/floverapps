import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footerMainDiv'>
       <div className='footerReminder'>
        <span className='footerReminderText'>
            Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address
        </span>
        <div className='footerEmailArea'>
            <input placeholder='E-mail'></input>
        </div>
        <button className='footerRemindBtn'>Remind</button>
       </div>
       <div className='footerContactUs'>
        <span>Contact Us</span>
        <div className='footerContactUsAdress'>
            <span className='footerContactUsAdressText'>Adress</span>
            <span className='footerContactAdressLocation'>15/4 Khreshchatyk Street, Kyiv </span>
        </div>
        <div className='footerContactUsPhone'>
            <span className='footerContactUsPhoneText'>Phone</span>
            <span className='footerContactUsPhoneAdress'>+380980099777</span>
        </div>
        <div className='footerContactUsPhone'>
            <span className='footerContactUsMail'>General Enquiry:</span>
            <span className='footerContactUsMailAdress'>+Kiev.Florist.Studio@gmail.com</span>
        </div>
        <div className='footerContactUsSocials'>
            <span className='footerContactUsFollowText'>Follow Us</span>
            <div className='footerContactUsConnects'>
                <img src='images/Telegram.png'/>
                <img src='images/Pinterest.png'/>
                <img src='images/Facebook.png'/>
                <img src='images/Twitter.png'/>
                <img src='images/Instagram.png'/>
            </div>
        </div>
       </div>
       <div className='footerShop'>
        <span className='footerShopH1'>Shop</span>
        <div className='footerShopCategoryList'>
            <span>All Products</span>
            <span>Fresh Flowers</span>
            <span>Dried Flowers</span>
            <span>Live Plants</span>
            <span>Designer Vases</span>
            <span>Aroma Candles</span>
            <span>Freshener Diffuser</span>
        </div>
        <span className='footerShopH1'>Service</span>
        <div className='footerShopServices'>
            <span>Flower Subcription</span>
            <span>Wedding & Event Decor</span>
        </div>
       </div>
       <div className='footerAboutUs'>
        <span className='footerAboutUsHeading1'>About Us</span>
        <div className='footerAboutUsBlog'>
            <span>Our story</span>
            <span>Blog</span>
        </div>
        <div className='footerAboutUsShipping'>
            <span>Shipping & returns</span>
            <span>Terms & conditions</span>
            <span>Privacy policy</span>
        </div>
       </div> 
    </div>
  )
}
