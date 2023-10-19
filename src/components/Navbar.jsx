import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import bg_nav from '../assets/Projects-bg.jpg';




const Navbar = ({textColor, NavPosition}) => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };

  // Function to handle the click on a link and set it as active
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  // Define your navigation links
  const links = [
    { to: '/', label: 'Projets' },
    { to: '/about', label: 'About' },
    { to: '/playground', label: 'Playground' },
    { to: '/contact', label: 'Contact Us'},
  ];

  // backgroundImage: `url(${bg_nav})` 



  return (
    <div className='bg-transparent flex w-full justify-between items-center h-20 md:px-10 xsm:px-5 z-10' style={{ color:  textColor, position: NavPosition}}>
      <div>
        <div className='font-logo'>Brand Name</div>
      </div>
      <div className='flex art-hide'>
        <div className='text-xl font-normal'>Art Director / Motion designer freelance</div>
      </div>
      <ul className='hidden md:flex'>
        {links.map((link, index) => (
          <Link to={link.to} key={index}>
            <li
              onClick={() => handleLinkClick(index)}
              className={activeLink === index ? 'active-linkk' : ''}
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={23}  style={{ color:  textColor}}/> : <HiOutlineMenuAlt4 size={30}  style={{ color:  textColor}}/>}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav}  style={{ color:  "black", transition: 'transform 1s', transform: nav ? 'translateY(0%)' : 'translateY(-100%)', opacity: 1, backgroundImage: `url(${bg_nav})`}} className={nav ? 'absolute text-black left-0 top-20 w-full px-4 py-7 flex flex-col rounded-b-[16px]' : 'absolute left-[-100]'}>
        <ul className={nav ? 'block' : 'hidden'}>
          {links.map((link, index) => (
            <Link to={link.to} key={index}>
              <li
                onClick={() => handleLinkClick(index)}
                className={activeLink === index ? 'active-linkk' : ''}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;