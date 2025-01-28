import React from 'react'
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Header=()=> {
  return (
    <div className='header'>
        <h1 className='logo'>Professional pro</h1>
        <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/professional'>Professional</Link>
        <Link href='/contact'>contact</Link>
        <FaShoppingCart style={{color:'white',fontSize:'22px'}}/>
        </nav>
      
    </div>
  )
}

export default Header;
