import React from 'react'
import NavBar from '../NavBar'

import "../Page2/CategoryPage"
import Footer from '../../Footer/Footer'

const imagescategory = [
    {
        img:"/indeximages/indeximg1.png"
    },
    {
        img:"/indeximages/indeximg2.png"

    },
    {
        img:"/indeximages/indeximg3.png"

    },
    {
        img:"/indeximages/indeximg4.png"

    },
    {
        img:"/indeximages/indeximg5.png"

    },
    {
        img:"/indeximages/indeximg6.png"

    },
    {
        img:"/indeximages/indeximg7.png"

    },
    {
        img:"/indeximages/indeximg8.png"

    },
    {
        img:"/indeximages/indeximg9.png"

    },
    {
        img:"/indeximages/indeximg10.png"

    },
]

export default function CategoryPage() {
  return (
    <div className='indexBody'>
        <NavBar/>
        <div className='indexMainSection'>
            <img src='images/indexleftcolumn' alt='resim'/>
            <div className='mainSectionRight'>
            {imagescategory?.map((i,key) => (
              <div key={key} >
                <img className='indeximg' src={i.img}></img>
              </div>
            ))}
            </div>

        </div>
        <Footer/>
    </div>
  )
}
