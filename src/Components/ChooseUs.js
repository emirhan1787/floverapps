import React from 'react'
import './ChooseUs.css'

export default function ChooseUs() {
  return (
    <div className='chooseUsMainDiv'>
        <div className='chooseUsTitleDiv'>
            <span className='h1'>Why choose us?</span>
        </div>
        <div className='chooseUsRightColumn'>
            <div className='chooseUsDescDiv'>
                <span className='chooseUsH2'>Stylish bouquets by florists</span>
                <span className='chooseUsText'>
                    At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.
                </span>
            </div>
            <div className='chooseUsDescDiv'>
                <span className='chooseUsH2'>On-time delivery</span>
                <span className='chooseUsText'>
                    Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.
                </span>
            </div>
            <div className='chooseUsDescDiv'>
                <span className='chooseUsH2'>Safe payment</span>
                <span className='chooseUsText'>
                    You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.
                </span>
            </div>
            <div className='chooseUsDescDiv'>
                <span className='chooseUsH2'>Subscription by your needs</span>
                <span className='chooseUsText'>
                    With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.
                </span>
            </div>
        </div>
    </div>
  )
}
