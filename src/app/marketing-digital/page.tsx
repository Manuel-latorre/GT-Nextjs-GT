'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import {Accordion, AccordionItem} from "@nextui-org/react";
import { Montserrat } from 'next/font/google'
import BeneficiosMobile from '@/components/BeneficiosMobile/BeneficiosMobile';
import ContactoFaqs from '@/app/Faqs/ContactoFaqs';
import 'swiper/css';
import 'swiper/css/pagination';
import '../desarrollo-software/ServiciosPages.css'
import SocialMedia from '@/components/Lotties/SocialMedia';
import Seo from '@/components/Lotties/Seo';
import Email from '@/components/Lotties/Email';
import Sem from '@/components/Lotties/Sem';
import MarketingContent from '@/components/Lotties/MarketingContent';
import PreguntasFrecuentesMd from '@/components/Preguntas/Md';
import BeneficiosMobileMk from '@/components/BeneficiosMobile/BeneficiosMarketing';

const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '200']
})


export default function MarketingDigital(){
    return (
        <div className={montserrat.className}>
            <div className='title_container'>
                <h1 className='title'>Marketing Digital</h1>
                <p className='subtitle'>Nuestras soluciones</p>
            </div>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay:7000
                    }}
                    breakpoints={{
                        800:{
                            slidesPerView: 2
                        },
                        1200: {
                            slidesPerView: 3
                        }
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    className="mySwiperDs"
                    >
                        <SwiperSlide>
                            <div className='card_container'>
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Gestión de Redes Sociales y generación de contenido</p>
                                <Accordion className='accordion_card' variant="bordered" isCompact>
                                    <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="Leer más">
                                        Nuestro equipo de gestión de redes sociales y generación de contenido trabaja para construir y mantener una presencia efectiva en línea. Nuestro enfoque en la comunicación, el branding, el marketing y el análisis pretende contribuir al éxito y la visibilidad de su empresa en el mundo digital, donde la interacción con la audiencia es clave para el crecimiento.
                                    </AccordionItem>
                                    </Accordion>
                                <SocialMedia/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='card_container'>
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Optimización de motores de búsqueda (SEO)</p>
                                <Accordion className='accordion_card' variant="bordered" isCompact>
                                    <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="Leer más">
                                        La optimización de motores de búsqueda SEO se refiere a las estrategias y técnicas utilizadas para mejorar la visibilidad y la clasificación de un sitio web en los resultados de los motores de búsqueda como Google, Bing o Yahoo, busca mejorar la posición orgánica de un sitio web de manera gratuita.
                                        Nuestro equipo de especialistas en SEO busca maximizar su visibilidad en línea, atraer tráfico de calidad y crear las condiciones adecuadas para que los usuarios interactúen y se conviertan en clientes.
                                    </AccordionItem>
                                    </Accordion>
                                <Seo/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='card_container'>
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Email Marketing</p>
                                <Accordion className='accordion_card' variant="bordered" isCompact>
                                    <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="Leer más">
                                        Nuestro equipo de marketing evalúa contenido relevante para atraer audiencia, planifica y ejecuta estrategias de distribución de contenido, monitoriza el rendimiento del contenido mediante herramientas analíticas, identifica áreas de mejora y ajusta las estrategias en función de los datos recopilados para lograr el mejor rendimiento y alcance.
                                        Priorizamos la capacitación constante, la innovación y la mejora continua, pilares fundamentales para el éxito en el entorno digital altamente competitivo de hoy.
                                    </AccordionItem>
                                    </Accordion>
                                <Email/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='card_container'>
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Marketing de contenido</p>
                                <Accordion className='accordion_card' variant="bordered" isCompact>
                                    <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="Leer más">
                                        Nuestro equipo de optimización está preparado para abordar estos desafíos y hacer que los objetivos de marketing se cumplan en un mundo digital altamente competitivo. 
                                    </AccordionItem>
                                    </Accordion>
                                <MarketingContent/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='card_container'>
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Optimización de motores de búsqueda (SEM)</p>
                                <Accordion className='accordion_card' variant="bordered" isCompact>
                                    <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="Leer más">
                                        El SEM es una estrategia digital que implica el uso de anuncios pagados para aumentar la visibilidad de un sitio web en los resultados de búsqueda de los motores como Google, es crucial para empresas que buscan una presencia online efectiva y rápida. Proporciona una herramienta valiosa para aumentar la visibilidad, atraer tráfico calificado y alcanzar objetivos de marketing en un corto período de tiempo.
                                        Nuestro equipo de optimización está preparado para abordar estos desafíos y hacer que los objetivos de marketing se cumplan en un mundo digital altamente competitivo.
                                    </AccordionItem>
                                    </Accordion>
                                <Sem/>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <div className='container_porqueGt' style={{marginBottom:100}}>
                    <p>
                        Nuestras soluciones en marketing digital involucran estrategias y tácticas en línea para promocionar productos o servicios. Esto incluye la planificación de campañas, la creación de contenido, la gestión de redes sociales, la publicidad en línea, el análisis de datos y la optimización.
                        Nuestro objetivo es aumentar la visibilidad, atraer clientes potenciales y convertirlos en ventas, todo mientras se mide y se ajusta continuamente la estrategia para obtener resultados efectivos.
                    </p>
                        
                </div>
                <div className='beneficios'>
                   <p style={{color:'cyan', margin:20, fontSize:20}}>BENEFICIOS DE CONTAR CON UN EQUIPO DE MARKETING</p> 
                   <div className='benefecios_card_container'>
                    <div style={{display:'flex'}}>
                        <div className='beneficios_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>MEDICIÓN Y ANÁLISIS</p>
                            <p>Un servicio de marketing digital se centrará en desarrollar una estrategia sólida y personalizada para su negocio. Esto implica identificar sus objetivos, público objetivo y competidores para crear una estrategia que maximice los resultados.</p>
                        </div>
                        <div className='beneficios_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>MAXIMIZACIÓN DE RECURSOS</p>
                            <p>En Generación Tech contamos con acceso a herramientas y software de marketing de última generación que pueden ser costosos si se adquieren de manera individual. Esto facilita la implementación de estrategias avanzadas.</p>
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className='beneficios_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>ENFOQUE ESTRATÉGICO</p>
                            <p>En Generación Tech utilizamos herramientas avanzadas de seguimiento y análisis para evaluar el rendimiento de las campañas. Esto permite ajustar y optimizar estrategias en tiempo real para obtener mejores resultados.</p>
                        </div>
                        <div className='beneficios_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>RESULTADOS MEDIBLES</p>
                            <p>El marketing digital permite un seguimiento preciso de los resultados y el retorno de la inversión (ROI). Desde Generación Tech proporcionamos  informes detallados y métricas para evaluar el rendimiento de tus campañas.</p>
                        </div>
                    </div>

                   </div>
                </div>
                <div className='beneficios_mobile'>
                    <p style={{color:'cyan', margin:20, fontSize:20, textAlign:'center'}}>BENEFICIOS DE CONTAR CON UN SITIO WEB A MEDIDA</p> 
                    <BeneficiosMobileMk/>
                </div>
                   
            </div>
            <div className='preguntas_frecuentes'>
                <ContactoFaqs/>
                <PreguntasFrecuentesMd/>
            </div>
        </div>
    )
}