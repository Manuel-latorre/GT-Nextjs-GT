import React from 'react'
import './AboutUs.css'
import Image from 'next/image'
import note from '../../assets/note.png'
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
        
          <h1>! Bienvenidos  a Generacion <strong style={{color:'#00fff5'}}>Tech</strong> !</h1>
          
        
        <h4 style={{fontWeight:400, textAlign:"center", fontSize:18}}>Transformando ideas en soluciones digitales</h4>
        <hr style={{width: '80%', margin:'auto', marginTop:'3%', marginBottom:'3%'}}/>
        <div style={{width:'85%', textAlign:'center', margin:'auto', marginTop: 20}}>
          <p> Somos Generación Tech, una empresa innovadora especializada en desarrollos y servicios tecnológicos. Nuestro equipo integrado por jóvenes profesionales está dispuesto a llevar tu negocio al siguiente nivel  “El Mercado Digital”</p>
        </div>

        <div className='btnAbout'>
        <Link className='btnContactame' href="/quienes-somos">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            ¿Quienes Somos?
        </Link>
        <a className='btnContactame' href="#contacto">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contacto
        </a>
                              
        </div>
      </div>

      <div className='note_container'>
        <Image src={note} alt='note'/>
      </div>
    </main>
    </div>
    <p className='textBienvenidosEra'>¡Bienvenido a una nueva era de posibilidades para su negocio!</p>
    </div>
  )
}

export default AboutUs