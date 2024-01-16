'use client'

import React from 'react';
import { Montserrat } from 'next/font/google'
import gestion from "../../assets/gestionR.svg"
import email from "../../assets/email.svg"
import seo from "../../assets/seo.svg"
import content from "../../assets/content.svg"
import 'swiper/css';
import 'swiper/css/pagination';
import '../desarrollo-software/ServiciosPages.css'
import Faqs from '../Faqs/Faqs';
import "../Faqs/Faqs.css"
import ContactoFaqs from '../Faqs/ContactoFaqs';
import '../Faqs/ContactoFaqs.css';
import "./marketing.css"
import Image from 'next/image';
const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', "600","800","900",'500', "400","300",'200']
})
import {Accordion, AccordionItem} from "@nextui-org/react";


export default function MarketingDigital(){
    return (
        <div>
            <div className="windSection punta">
                <p className={`${montserrat.className} sectionTitle`}>MARKETING DIGITAL</p>
            </div>
        <div className='marketingContainer'>
            
            <div className="sectionContainerM">
            <div className="section1M">
                <div className="sectionText">
                <p className={`${montserrat.className} gestionTitulo`}>GESTIÓN <br /> DE REDES</p>
                <p className={`${montserrat.className} gestionSubtitulo`}>Y GENERACIÓN <br /> DE CONTENIDO</p>
                </div>
                <Image src={gestion} width={220} height={220} alt='gestion'/>
            </div>
            <div className="section2M">
                <div className="sectionText">
                <p className={`${montserrat.className} gestionTitulo`} style={{color:"#fff"}}>EMAIL</p>
                <p className={`${montserrat.className} gestionSubtitulo`} style={{color:"#00FFFC", fontWeight:500}}>MARKETING</p>
                </div>
                <Image src={email} width={220} height={220} alt='gestion'/>
            </div><div className="section3M">
                <div className="sectionText">
                <p className={`${montserrat.className} gestionTitulo`} style={{color:"white"}}>SEO</p>
                <p className={`${montserrat.className} gestionSubtitulo`} style={{color:"#fff"}}>OPTIMIZACIÓN PARA
                <br />
                MOTORES
                <br />
                DE BUSQUEDA
                </p>
                </div>
                <Image src={seo} width={220} height={220} alt='gestion'/>
            </div><div className="section4M">
                <div className="sectionText">
                <p className={`${montserrat.className} gestionTitulo`} style={{color:"white"}}>MARKETING</p>
                <p className={`${montserrat.className} gestionSubtitulo`} style={{color:"white"}}>DE CONTENIDO</p>
                </div>
                <Image src={content} width={220} height={220} alt='gestion'/>
            </div>
            </div>
            <div style={{marginTop:130}}>
                <div className="containerTextMarketing">
                <h1 className={`${montserrat.className} tituloExpMark`}>MEDICIÓN Y ANÁLISIS</h1>
                <div style={{textAlign:"justify"}}>
                <p className={`${montserrat.className} textoParrafo`}>En <strong>Generación Tech</strong>, nuestra área de <strong>Tecnología</strong> es la esencia de nuestro trabajo. Diseñamos, creamos y mantenemos software para sitios web y aplicaciones móviles, utilizando <strong>metodologías ágiles</strong> para garantizar eficiencia y productividad. Nos comprometemos a entregas a tiempo, <strong>calidad</strong> y satisfacción de nuestros clientes mediante revisiones constantes y productos mínimos viables.</p>
                </div>
                </div>
                <div className="containerTextMarketing">
                <h1 className={`${montserrat.className} tituloExpMark`}>MAXIMIZACIÓN DE RECURSOS</h1>
                <div style={{textAlign:"justify"}}>
                <p className={`${montserrat.className} textoParrafo`}>Nuestra área de <strong>Investigación</strong> es la piedra fundamental de cada proyecto, desde aquí evaluamos <strong>oportunidades</strong> de negocios, tratando de descubrir las necesidades del mercado, para luego ejecutar propuestas con bases sólidas a partir de datos relevados por nuestros profesionales especialistas en <strong>análisis</strong> de mercados y <strong>auditorias digitales</strong>.</p>
                </div>
                </div>
                <div className="containerTextMarketing">
                <h1 className={`${montserrat.className} tituloExpMark`}>DESARROLLOS</h1>
                <div style={{textAlign:"justify"}}>
                <p className={`${montserrat.className} textoParrafo`}>La <strong>planificación</strong> es vital para el desarrollo de proyectos específicos, medibles, alcanzables, relevantes y temporales. Siendo esta área la que <strong>traza objetivos</strong>, gestiona recursos, <strong>controla tiempos y costos</strong>, mitiga riesgos y mejora la <strong>calidad</strong> de nuestros productos y servicios.</p>
                </div>
                </div>  <div className="containerTextMarketing">
                <h1 className={`${montserrat.className} tituloExpMark`}>ENFOQUE ESTRATÉGICO</h1>
                <div style={{textAlign:"justify"}}>
                <p className={`${montserrat.className} textoParrafo`}>
                Nuestros <strong>desarrollos</strong> son clave para mantenernos <strong>competitivos</strong> en un entorno en constante cambio. Permiten a las empresas <strong>adaptarse a las necesidades</strong> cambiantes de los clientes, optimizar operaciones internas, introducir nuevos productos y explorar oportunidades de <strong>crecimiento</strong>. En nuestra perspectiva, son fundamentales para la supervivencia y éxito a largo plazo en un mercado dinámico.
                </p>
                </div>
                </div>

            </div>
        </div>

        <div className={montserrat.className} style={{marginTop: 100}} id='faqs'>
      <p style={{textAlign:'center', fontSize:30, marginBottom:50}}>PREGUNTAS FRECUENTES</p>
      <div className="accordion">
        <Accordion variant="bordered" isCompact>
          <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="¿Qué beneficios tiene el marketing digital para mi empresa?">
          El marketing digital le permite aumentar la visibilidad y el alcance de su marca, generar interacción y atraer nuevos clientes, crear una ventaja competitiva frente a su competencia, determinar e identificar su público objetivo y medir el éxito y el retorno de su inversión.
          </AccordionItem>
          <AccordionItem className="accordionItem" key="2" aria-label="Accordion 2" title="¿Qué estrategia de marketing digital es la más adecuada para mi empresa?">
          Depende de los objetivos, el presupuesto y el sector de su empresa. En Generación Tech podemos ayudarlo a diseñar un plan de marketing y una propuesta personalizada que se adapte a sus necesidades y expectativas, utilizando las herramientas y los canales más convenientes.
          </AccordionItem>
          <AccordionItem className="accordionItem" key="3" aria-label="Accordion 3" title="¿Qué beneficios obtengo al contratar Generación Tech?">
          Al contratar Generación Tech, obtendrá la garantía de un trabajo profesional, eficiente y de calidad. Además, cuentas con el apoyo y la experiencia de un equipo multidisciplinario que lo asesorará y lo acompañará en todo el proceso.
          </AccordionItem>
          <AccordionItem className="accordionItem" key="4" aria-label="Accordion 4" title="¿Qué tipo de contenido debo generar para mi página web y mis redes sociales?">
          El contenido que genere debe ser relevante, original, atractivo y de valor para su audiencia. Debe responder a los intereses y necesidades de los potenciales clientes. Estos contenidos deben estar optimizados para los motores de búsqueda (SEO) y adaptados al formato y al tono de cada medio.
          </AccordionItem>
        </Accordion>
      </div>
      <ContactoFaqs/>
    </div>

        </div>
    )
}