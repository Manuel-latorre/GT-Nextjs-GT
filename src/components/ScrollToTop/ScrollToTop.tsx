'use client'


import React, { useState, useEffect } from 'react';
import arrow from '../../assets/scrollup.png'
import './ScrollToTop.css';
import Wp from '../Lotties/Wp';
import Image from 'next/image';


const ScrollToTop = () => {
  const [isArrow, setIsArrow] = useState(false);

  const toggleArrowAnimation = () => {
    setIsArrow(!isArrow);
    setTimeout(scrollToTop, 0)
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Verificar si estamos en la parte superior de la página
      if (window.scrollY === 0) {
        setIsArrow(false);
      }
    };

    // Agregar un event listener para el evento scroll
    window.addEventListener('scroll', handleScroll);

    // Remover el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='scrollContainer'>
        <div>
            <Image onClick={toggleArrowAnimation} style={{cursor: 'pointer'}} src={arrow} alt="arrow" />
        </div>
        <Wp/>
    </div>
  );
};

export default ScrollToTop;