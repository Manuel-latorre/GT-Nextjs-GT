import React from 'react'
import './AboutUs.css'
import Image from 'next/image'
import mac from '../../assets/Rectangle.svg'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'


const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '200']
})


const AboutUs = () => {
  return (
    <div className={montserrat.className} style={{marginTop:50}}>

    <div className='divAboutUs' id='nosotros'>

    <main className='main'>
      <div className='aboutText'>
        <div style={{display:"flex",flexDirection:"column"}} className='TextoAboutFirst'>
        <h1 className={`${montserrat.className} gt`}>GENERACIÓN <br /> <span style={{color:"#00FFFC"}}>TECH</span></h1>
        <p className={`${montserrat.className} trans`}>TRANSFORMANDO IDEAS EN   <span style={{color:"#00FFFC"}}>SOLUCIONES DIGITALES</span></p>
        </div>
        <div className='btnAbout'>
        <Link className='btnContactame' href="#WHO">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            ¿Quiénes Somos?
        </Link>                              
        </div>
      </div>
        <Image width={700} src={mac} alt='note' className='imageMac'/>
    </main>
    </div>
    </div>
  )
}

export default AboutUs