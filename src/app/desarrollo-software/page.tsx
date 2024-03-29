'use client'

import React from 'react';
import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import PreguntasFrecuentesDs from '@/components/Preguntas/Ds';
import ContactoFaqs from '@/app/Faqs/ContactoFaqs';
import 'swiper/css';
import "../marketing-digital/marketing.css"
import 'swiper/css/pagination';
import './ServiciosPages.css'
import uxui from "../../assets/uxui.svg"
import hosting from "../../assets/hosting.svg"
import mantenimiento from "../../assets/mantenimiento.svg"
import desarollo from "../../assets/desarollo.svg"
const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '200']
})


export default function DesarrolloSoftware(){

    return (
        <div className={montserrat.className}>
            <div className="windSection punta">
                <p className={`${montserrat.className} sectionTitle`}>DESARROLLO DE SOFTWARE</p>
            </div>
             <div className='marketingContainer'>
            
            <div className="sectionContainerM">
         
            <div className="section1M">
                <div className="sectionText">
                    
                <p className={`${montserrat.className} gestionTitulo`}>DESAROLLO<br /></p>
                <p className={`${montserrat.className} gestionTitulo`}>DE SITIOS <br />WEB</p>
                </div>
                <Image src={desarollo} width={180} height={180} alt='gestion'/>
            </div>
            <div className="section2M" >
                <div className="sectionText">
                <p className={`${montserrat.className} gestionTitulo`} style={{color:"#fff"}}>DISEÑO <br />UXUI</p>
                </div>
                <Image src={uxui} width={180} height={180} alt='gestion'/>
            </div><div className="section3M">
                <div className="sectionText" style={{marginLeft:20}}>
                <p className={`${montserrat.className} gestionTitulo`} style={{color:"white"}}>MANTENIMIENTO</p>
                <p className={`${montserrat.className} gestionSubtitulo`} style={{color:"#fff"}}>
                    <br />Y SOPORTE DE <br />SOFTWARE
                </p>
                </div>
                <Image src={mantenimiento} width={150} height={150} alt='gestion'/>
            </div><div className="section4M">
                <div className="sectionText">
                <p className={`${montserrat.className} gestionTitulo`} style={{color:"white"}}>ALOJAMIENTO</p>
                <p className={`${montserrat.className} gestionSubtitulo`} style={{color:"white"}}>WEB HOSTING</p>
                </div>
                <Image src={hosting} width={220} height={220} alt='gestion'/>
            </div>
            </div>
            <div style={{marginTop:130}} className='containerContainer'>
                <div className="containerTextMarketing">
                <h1 className={`${montserrat.className} tituloExpMark`}>PERSONALIZACIÓN TOTAL</h1>
                <div style={{textAlign:"justify"}}>
                <p className={`${montserrat.className} textoParrafo`}>
                La programación propia permite una personalización completa del sitio
                web. Le permite  diseñar y desarrollar cada aspecto del sitio según sus
                necesidades y requisitos específicos, lo que resulta en un sitio web 
                único y adaptado a su visión.

                </p>
                </div>
                </div>
                <div className="containerTextMarketing">
                <h1 className={`${montserrat.className} tituloExpMark`}>ESCALABILIDAD</h1>
                <div style={{textAlign:"justify"}}>
                <p className={`${montserrat.className} textoParrafo`}>
                    Desarrollar un sitio web con programación propia le brinda la 
                    flexibilidad necesaria para escalar su sitio a medida que crece su 
                    negocio o proyecto. Puede agregar nuevas funciones y características de 
                    manera más eficiente sin depender de plataformas pre-construidas.

                </p>
                </div>
                </div>
                <div className="containerTextMarketing">
                <h1 className={`${montserrat.className} tituloExpMark`}>PROPIEDAD TOTAL</h1>
                <div style={{textAlign:"justify"}}>
                <p className={`${montserrat.className} textoParrafo`}>

                Cuando creas su sitio web con programación propia, tiene la propiedad
                total de todo el código y los activos relacionados. Esto significa que 
                no está  limitado por restricciones de licencia y puede  hacer cambios o
                mejoras en cualquier momento.

</p>
                </div>
                </div>  <div className="containerTextMarketing">
                <h1 className={`${montserrat.className} tituloExpMark`}>MENOS DEPENDENCIA</h1>
                <div style={{textAlign:"justify"}}>
                <p className={`${montserrat.className} textoParrafo`}>
                    No está atado a las actualizaciones o cambios de políticas de 
                    terceros, como ocurre con las plataformas de gestión de contenido (CMS) 
                    pre-construidas. Esto le brinda un mayor control sobre la evolución de 
                    su sitio.
                </p>
                </div>
                </div>

            </div>
        </div>       
                <PreguntasFrecuentesDs/>
                <ContactoFaqs/>
            </div>
    )
}