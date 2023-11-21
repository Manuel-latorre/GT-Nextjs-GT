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
  const [shouldCloseMenu, setShouldCloseMenu] = useState(false); // Nuevo estado
  const navRef = useRef(null);

  const handleNosotrosClick = () => {
    setShowLoader(true);
    setShouldCloseMenu(true); // Establecer el estado para cerrar el menú

    setTimeout(() => {
        setShowLoader(false);
        setShouldCloseMenu(false); // Restablecer el estado después de que se complete la acción
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
      if (navRef.current && !(navRef.current as HTMLDivElement).contains(event.target as Node) && shouldCloseMenu) {
        setIsOpen(false);
      }
    }

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [shouldCloseMenu]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div>
        <a href="/">
          <Image className='logo' src={logo} alt="" />
        </a>
      </div>

      <div className={`nav_items ${isOpen && 'open'}`}>
        <Link onClick={() => { handleNosotrosClick(); setIsOpen(false); }} className='btnNav' href="/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          Inicio
        </Link>
        <Link onClick={() => { handleNosotrosClick(); setIsOpen(false); }} className='btnNav' href="/quienes-somos">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          Quienes somos
        </Link>
        <Link onClick={() => { handleNosotrosClick(); setIsOpen(false); }} className='btnNav' href="/#servicios">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          Servicios
        </Link>
        <Link onClick={() => { handleNosotrosClick(); setIsOpen(false); }} className='btnNav' href="/#faqs">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          FAQs
        </Link>
        <Link onClick={() => { handleNosotrosClick(); setIsOpen(false); }} className='btnNav' href="/#contacto">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
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

