'use client'

import React from 'react';
import { Montserrat } from 'next/font/google'
import ContactoFaqs from '@/app/Faqs/ContactoFaqs';
import 'swiper/css';
import 'swiper/css/pagination';
import '../desarrollo-software/ServiciosPages.css'
import "../marketing-digital/marketing.css"
import metrica from "../../assets/Metricas.svg"
import analisis from "../../assets/analisis.svg"
import usuarios from "../../assets/usuarios.svg"
import auditoria from "../../assets/auditoria.svg"
import PreguntasFrecuentesCe from '@/components/Preguntas/Ce';
import BeneficiosMobileCe from '@/components/BeneficiosMobile/BeneficiosCe';
import Image from 'next/image';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['700', '500', '200']
})


export default function MarketingDigital() {
    return (
        <div className={montserrat.className} >
            <div className="windSection punta">
                <p className={`${montserrat.className} sectionTitle`}>COMERCIO ELECTRÓNICO</p>
            </div>
        <div className='marketingContainer'>

        <div className="sectionContainerM" >
         <div className="section1M">
             <div className="sectionText">
                 
             <p className={`${montserrat.className} gestionTitulo`}>METRICAS</p>
             <p className={`${montserrat.className} gestionSubtitulo`}>Y KPIS</p>
             </div>
             <Image src={metrica} width={180} height={180} alt='gestion'/> 
         </div>
         <div className="section2M" >
             <div className="sectionText" style={{marginLeft:20}}>
             <p className={`${montserrat.className} gestionTitulo`} style={{color:"#fff"}}>ANÁLISIS DE <br />VENTA</p>
             <p className={`${montserrat.className} gestionSubtitulo`} style={{color:"#fff"}}>Y CONVERSIONES</p>
             </div>
             <Image src={analisis} width={180} height={180} alt='gestion'/>
         </div><div className="section3M">
             <div className="sectionText" style={{marginLeft:29}}>
             <p className={`${montserrat.className} gestionTitulo`} style={{color:"white"}}>ANÁLISIS</p>
             <p className={`${montserrat.className} gestionSubtitulos`} style={{color:"white"}}>DE USUARIOS</p>
             </div>
             <Image src={usuarios} width={200} height={200} alt='gestion'/>
         </div><div className="section4M">
             <div className="sectionText">
             <p className={`${montserrat.className} gestionTitulo`} style={{color:"white"}}>AUDITORÍA</p>
             <p className={`${montserrat.className} gestionSubtitulo`} style={{color:"white"}}>WEB</p>
             </div>
             <Image src={auditoria} width={220} height={220} alt='gestion'/>
         </div>
         
         </div>
         <div style={{marginTop:130 }}>
                <div className="containerTextMarketing">
                <h1 className={`${montserrat.className} tituloExpMark`}>DESARROLLO DE TIENDAS EN LÍNEA</h1>
                <div style={{textAlign:"justify"}}>
                <p className={`${montserrat.className} textoParrafo`}>
                En Generación Tech creamos y personalizamos su tienda en línea para que se ajuste a sus necesidades y a la identidad de su marca. Esto incluye la optimización de la interfaz de usuario y la experiencia de compra.
                </p>
                </div>
                </div>
                <div className="containerTextMarketing">
                <h1 className={`${montserrat.className} tituloExpMark`}>OPTIMIZACIÓN DE LA CONVERCIÓN</h1>
                <div style={{textAlign:"justify"}}>
                <p className={`${montserrat.className} textoParrafo`}>
                Nos enfocamos en mejorar la tasa de conversión, lo que significa que trabajar en la optimización de su sitio web para convertir visitantes en clientes. Esto incluye mejoras en el proceso de compra, el diseño y la usabilidad

                </p>
                </div>
                </div>
                <div className="containerTextMarketing">
                <h1 className={`${montserrat.className} tituloExpMark`}>EXPERIENCIA DE USUARIO OPTIMIZADA</h1>
                <div style={{textAlign:"justify"}}>
                <p className={`${montserrat.className} textoParrafo`}>

               
Nos enfocamos en crear una experiencia de usuario atractiva y fácil de usar en su tienda en línea. Esto incluye la navegación, la búsqueda de productos y el proceso de pago.

</p>
                </div>
                </div>  <div className="containerTextMarketing">
                <h1 className={`${montserrat.className} tituloExpMark`}>INTEGRACIÓN CON SISTEMAS DE PAGO</h1>
                <div style={{textAlign:"justify"}}>
                <p className={`${montserrat.className} textoParrafo`}>
                Un servicio de marketing digital se centrará en desarrollar una estrategia sólida y personalizada para su negocio. Esto implica identificar sus objetivos, público objetivo y competidores para crear una estrategia que maximice los resultados.
                </p>
                </div>
                </div>

            </div>
            </div>
            <div className='preguntas_frecuentes'>
                <PreguntasFrecuentesCe />
                <ContactoFaqs />
            </div>
        </div>
    )
}