import './Header.css';
import * as React from 'react';
function Header() {
    return (
      <div className='header-container'>
          <div className='top-wrapper'>
          <p>LOGO</p>
          <button type='button' className='header-button'>Profile</button>
          <button type='button' className='header-button header-button__select'>English</button>
          </div>
          <h1 className='promo-text'>Travel the world and buy<br/>
          direct from the fly companies</h1>
      </div>
    );
  }
  
  export default Header;