'use client'

import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import Image from 'next/image'
import Loader from '../Loader/Loader'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const handleNosotrosClick = () => {
        setShowLoader(true);

        setTimeout(() => {
            setShowLoader(false);
        }, 2000);

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
    
        // Limpia el escuchador de eventos al desmontar el componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


  return (
    
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>

            <div>
                <a href="/">
                    <Image  className='logo' src={logo} alt="" />
                </a>
            </div>


            <div  className={`nav_items ${isOpen && 'open'}`}>
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
            <div className={`nav_toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            {showLoader && <Loader />}
        </nav>
    
  )
}

export default Navbar