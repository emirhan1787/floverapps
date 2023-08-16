import React from 'react'
import './ContentCategory.css'

      const LeftCards=[
        {
          category: "Fresh Flovers",
        },
        {
          img:"./images/image2.png",
        },
        {
          category: "Live Plants",
        },
        {
          img:"./images/image4.png",
        },
        {
          category: "Fresheners",
        }

      ]

      const RightCards = [
        {
          img: "./images/image1.png",
        },
        {
          category: "Dried Flowers",
        },
        {
          img:"./images/image3.png",
        },
        {
          category: "Aroma Candels",
        },
        {
          img:"./images/image5.png",
        },
      ]


    const ContentCategory = () => {
  
      
        return (
          <div className='rightColumn'>

            <div className='leftCard'>
            {LeftCards.map((i,key) => (
              <div key={key} >
                <span className='imgName'>{i.category}</span>
                <img className='img' src={i.img}></img>
              </div>
            ))}
            </div>

                 <div className='lightCard'>
            {RightCards.map((i,key) => (
              <div key={key}>
                <span className='imgName'>{i.category}</span>
                <img className='img' src={i.img}></img>
              </div>
              
            ))}
          
          </div>
          
          </div>
          
          
          
          
        );
      };


export default ContentCategory