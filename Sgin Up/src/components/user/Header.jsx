import React, { useEffect } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import '../../App.css';

function Header({ OpenSidebar }) {
  useEffect(() => {
    console.log("Header component mounted");
  }, []);

  return (
    <header className='header bg-blue'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
        <input 
          type="text" 
          placeholder="Search" 
          className='search-input'
        />
      </div>
      <div className='header-title'>
        <h3>DASHBOARD</h3>
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  );
}

export default Header;
