import React from 'react'
import './OurService.css'

export default function 
() {
  return (
    <div className='mainDiv'>
        <div className='topDiv'>
            <span className='h1'>Our Service</span>
        </div>
        <div className='subsArea'>
            <div className='imgArea'>
                <img src='/images/subsimg.png' alt='resim' className='subsimg'></img>
            </div>
            <div className='serviceDesc'>
                <span className='serviceText'>service</span>
                <span className='h2'>Flower Subscriptions</span>
                <span className='text'>Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</span>
                <button className='button'>Subscribe Now</button>
            </div>
         
        </div>
        <div className='contentColumn'>
             <div className='topContent'>
                 <img src='/images/serviceSection.png'></img>
            </div>
            <div className='bottomContent'>
                <div className='bottomContentArea'>
                    <div className='heading'>
                        <img className='logo' src='/images/googlelogo.png'></img>
                        <span className='reviewsText'>REVİEWS</span>
                        <span className='bottomHeading'>Our Clients Say</span>
                        <div className='sliderBar'>
                            <img src='/images/leftarrow.png' alt='resim'></img>
                            <div className='bottomTextArea'></div>
                            <span className='bottomText'>“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”</span>
                            <img src='/images/rightarrow.png' alt='resim'></img>
                        </div>
                        <button className='readButton'>READ REVİWES</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
