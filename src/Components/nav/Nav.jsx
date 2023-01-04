import React, { useState } from 'react';
import './nav.css';

import { AiOutlineHome, AiOutlineUser, AiOutlineSafetyCertificate } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';


const icons = [
  { href: '#', Icon: AiOutlineHome },
  { href: '#about', Icon: AiOutlineUser },
  { href: '#experience', Icon: BiBook },
  { href: '#certification', Icon: AiOutlineSafetyCertificate },
  { href: '#services', Icon: RiServiceLine },
  { href: '#contact', Icon: BiMessageSquareDetail }
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      {icons.map(icon => (
      <a key={icon.href} href={icon.href} onClick={() => 
        setActiveNav(icon.href)} className={activeNav === icon.href ? 'active' : ''}><icon.Icon /></a>
      ))}
    </nav>
  )
}

export default Nav;