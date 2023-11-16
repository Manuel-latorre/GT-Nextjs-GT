 'use client'

 import React, { useState, useEffect, useRef } from 'react';
 import logo from '../../assets/logo.svg';
 import Image from 'next/image';
 import Link from 'next/link';
 import Loader from '../Loader/Loader'
 import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navRef = useRef(null);

  const handleNosotrosClick = () => {
    setShowLoader(true);

    setTimeout(() => {
        setShowLoader(false);
    }, 1000);

};

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Use type assertion to tell TypeScript that navRef.current is an HTMLDivElement
      if (navRef.current && !(navRef.current as HTMLDivElement).contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div>
        <a href="/">
          <Image className='logo' src={logo} alt="" />
        </a>
      </div>

      <div className={`nav_items ${isOpen && 'open'}`}>
        <Link onClick={handleNosotrosClick} className='btnNav' href="/">
          Inicio
        </Link>
        <Link onClick={handleNosotrosClick} className='btnNav' href="/quienes-somos">
          Quienes somos
        </Link>
        <Link onClick={handleNosotrosClick} className='btnNav' href="/#servicios">
          Servicios
        </Link>
        <Link onClick={handleNosotrosClick} className='btnNav' href="/#faqs">
          FAQs
        </Link>
        <Link onClick={handleNosotrosClick} className='btnNav' href="/#contacto">
          Contacto
        </Link>
      </div>

      <div className={`nav_toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {showLoader && <Loader />}
    </nav>
  );
};

export default Navbar;

