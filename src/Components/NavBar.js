import React from 'react';
import './NavBar.css' ;

export default function NavBar() {
  return (
    <div className='navBar'>
        <navigator className='navLeft'>
            <div className='navShop'>Shop</div>
            <div className='navContact'>Contact</div>
        </navigator>
        <navigator className='navRight'>
            <div className='navSignİn'>Sign in</div>
            <div className='navCart'>Cart</div>
        </navigator>
    </div>
  )
}
