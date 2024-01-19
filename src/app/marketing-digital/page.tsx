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
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['700', "600", "800", "900", '500', "400", "300", '200']
})
import { Accordion, AccordionItem } from "@nextui-org/react";


export default function MarketingDigital(){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <div>
            <div className="windSection punta">
                <p className={`${montserrat.className} sectionTitle`}>MARKETING DIGITAL</p>
            </div>
        <div className='marketingContainer'>
            
            <div className="sectionContainerM">
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p style={{color:"black"}}> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
            <div className="section1M" onClick={onOpen}>
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
                <div style={{ marginTop: 130 }}>
                    <div className="containerTextMarketing">
                        <h1 className={`${montserrat.className} tituloExpMark`}>MEDICIÓN Y ANÁLISIS</h1>
                        <div style={{ textAlign: "justify" }}>
                            <p className={`${montserrat.className} textoParrafo`}>En <strong>Generación Tech</strong>, la <strong>Tecnología</strong> es nuestra esencia. Diseñamos, creamos y mantenemos software para sitios web y aplicaciones móviles utilizando <strong>metodologías ágiles</strong>. Nos comprometemos a entregas puntuales, <strong>calidad</strong> y satisfacción del cliente mediante revisiones constantes y productos mínimos viables.</p>
                        </div>
                    </div>
                    <div className="containerTextMarketing">
                        <h1 className={`${montserrat.className} tituloExpMark`}>MAXIMIZACIÓN DE RECURSOS</h1>
                        <div style={{ textAlign: "justify" }}>
                            <p className={`${montserrat.className} textoParrafo`}>Nuestra área de <strong>Investigación</strong> es la base de cada proyecto. Evaluamos <strong>oportunidades</strong> de negocios, descubrimos necesidades del mercado y ejecutamos propuestas sólidas a partir de datos recopilados por nuestros especialistas en <strong>análisis</strong> de mercados y <strong>auditorias digitales</strong>.</p>
                        </div>
                    </div>
                    <div className="containerTextMarketing">
                        <h1 className={`${montserrat.className} tituloExpMark`}>DESARROLLOS</h1>
                        <div style={{ textAlign: "justify" }}>
                            <p className={`${montserrat.className} textoParrafo`}>La <strong>planificación</strong> es vital para el desarrollo de proyectos específicos, <strong>trazando objetivos</strong>, gestionando recursos, <strong>controlando tiempos y costos</strong>, mitigando riesgos y mejora la <strong>calidad</strong> de nuestros productos y servicios.</p>
                        </div>
                    </div>  <div className="containerTextMarketing">
                        <h1 className={`${montserrat.className} tituloExpMark`}>ENFOQUE ESTRATÉGICO</h1>
                        <div style={{ textAlign: "justify" }}>
                            <p className={`${montserrat.className} textoParrafo`}>
                                Nuestros <strong>desarrollos</strong> son clave para la <strong>competitividad</strong> en un entorno cambiante, permitiendo a las empresas <strong>adaptarse a las necesidades</strong> de los clientes, optimizar operaciones internas, lanzar nuevos productos y explorar oportunidades de <strong>crecimiento</strong>. En nuestra perspectiva, son fundamentales para el éxito a largo plazo en un mercado dinámico.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className={montserrat.className} style={{ marginTop: 100 }} id='faqs'>
                <p style={{ textAlign: 'center', fontSize: 30, marginBottom: 50 }}>PREGUNTAS FRECUENTES</p>
                <div className="accordion">
                    <Accordion variant="bordered" isCompact>
                        <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="¿Qué beneficios tiene el marketing digital para mi empresa?">
                            El marketing digital amplía la visibilidad y alcance de su marca, genera interacción y atrae nuevos clientes, proporcionando ventaja competitiva, identificando el público objetivo y midiendo el éxito y retorno de inversión.
                        </AccordionItem>
                        <AccordionItem className="accordionItem" key="2" aria-label="Accordion 2" title="¿Qué estrategia de marketing digital es la más adecuada para mi empresa?">
                            Dependiendo de sus objetivos, presupuesto y sector, en Generación Tech podemos diseñar un plan de marketing personalizado, adaptado a sus necesidades y expectativas, utilizando las herramientas y canales más adecuados.
                        </AccordionItem>
                        <AccordionItem className="accordionItem" key="3" aria-label="Accordion 3" title="¿Qué beneficios obtengo al contratar Generación Tech?">
                            Al elegir Generación Tech, garantizamos un trabajo profesional, eficiente y de calidad. Contará con el respaldo y la experiencia de nuestro equipo multidisciplinario durante todo el proceso.
                        </AccordionItem>
                        <AccordionItem className="accordionItem" key="4" aria-label="Accordion 4" title="¿Qué tipo de contenido debo generar para mi página web y mis redes sociales?">
                            Su contenido debe ser relevante, original, atractivo y valioso para la audiencia, respondiendo a los intereses y necesidades de los potenciales clientes. Además, debe estar optimizado para SEO y adaptado al formato y tono de cada medio.
                        </AccordionItem>
                    </Accordion>
                </div>
                <ContactoFaqs />
            </div>

        </div>
    )
}