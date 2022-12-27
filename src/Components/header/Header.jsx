import React from 'react';
import './header.css'; 
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import Profile from '../../Assets/profile.PNG';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Kevin Rodas</h1>
        <h5 className="text-light">IT Technician</h5>
        <CTA />

        <div className="me">
          <img src={Profile} alt="me" /> 
        </div>
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;