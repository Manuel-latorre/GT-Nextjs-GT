'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import {Accordion, AccordionItem} from "@nextui-org/react";
import { Montserrat } from 'next/font/google'
import {ScrollShadow} from "@nextui-org/react";

import ContactoFaqs from '@/app/Faqs/ContactoFaqs';
import 'swiper/css';
import 'swiper/css/pagination';
import '../desarrollo-software/ServiciosPages.css'
import PreguntasFrecuentesCe from '@/components/Preguntas/Ce';
import BeneficiosMobileCe from '@/components/BeneficiosMobile/BeneficiosCe';
import AudiWeb from '@/components/Lotties/AudiWeb';
import AudiMedia from '@/components/Lotties/AudiMedia';
import Metricas from '@/components/Lotties/Metricas';
import Ventas from '@/components/Lotties/Ventas';
import User from '@/components/Lotties/User';

const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '200']
})


export default function MarketingDigital(){
    return (
        <div className={montserrat.className}>
            <div className='title_container'>
                <h1 className='title'>Comercio Electrónico</h1>
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
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Auditoría Web</p>
                                <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                        <div className='container_service_info'>
                                            <p className='textService'>Nuestra área de Comercio Electrónico está integrada por un equipo de profesionales especializados en auditorías de canales digitales. Hacemos seguimientos, revisiones y análisis de cada canal solicitado en la búsqueda de fallas que obstaculicen la navegación, la usabilidad, la velocidad de carga, la interacción, y la seguridad. Elevamos informes de resultados y proponemos nuestras soluciones.</p>
                                            <AudiWeb/>
                                        </div>
                                </ScrollShadow>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='card_container'>
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Auditoría Social Media</p>
                                <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                    <div className='container_service_info'>
                                        <p className='textService'>
                                            Generación Tech nació con el propósito de brindar soluciones digitales y nuestro servicio de auditoría social media en este sentido es crucial para que las empresas alcancen los resultados esperados.
                                            Evaluamos e informamos el estado de situación de su marca, analizamos su presencia en línea, su imagen, su tono de voz, su reputación y el impacto de sus estrategias.
                                            Aplicamos métricas y  Kpis  para la elaboración de nuestros informes.
                                            La auditoría Social Media es una inversión, ya que contribuye directamente a la adquisición y retención de clientes.
                                        </p>                                 
                                        <AudiMedia/>
                                    </div>
                                </ScrollShadow>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='card_container'>
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Métricas Y KPIS</p>
                                <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                    <div className='container_service_info'>
                                        <p className='textService'>Nuestro equipo de e-mail marketing ejerce un papel esencial en el proceso de relación, la adquisición de nuevos clientes y la generación de ingresos. Contamos con capacidad para diseñar, ejecutar y optimizar campañas de e-mail marketing efectivas clave para el éxito en el marketing digital, ya que permite llegar a la audiencia de manera personalizada y medible.</p>                                  
                                        <Metricas/>
                                    </div>
                                </ScrollShadow>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='card_container'>
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Análisis de ventas y conversiones</p>
                                <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                    <div className='container_service_info'>
                                        <p className='textService'>
                                            Las ventas digitales y la conversión son pilares esenciales en el comercio en línea. La capacidad de transformar visitantes en clientes es crucial para el éxito de cualquier negocio en el entorno digital.
                                            Nuestro equipo analiza e identifica estas necesidades en el entorno virtual y eleva en informes detallados que lo ayuden a crecer y transformar su realidad de negocio.
                                        </p>
                                        <Ventas/>
                                    </div>
                                </ScrollShadow>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='card_container'>
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Análisis del comportamiento del usuario</p>
                                <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                    <div className='container_service_info'>
                                        <p className='textService'> Comprender cómo los usuarios navegan por un sitio web o una aplicación ayuda a identificar áreas de mejora en la experiencia del usuario. En Generación Tech realizamos pruebas de usabilidad para realizar ajustes en función de los datos recopilados. </p>                                   
                                        <User/>
                                    </div>
                                </ScrollShadow>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <div className='container_porqueGt' style={{marginBottom:100}}>
                    <p>
                        Como analistas en comercio electrónico nuestras soluciones se centran en evaluar detenidamente datos de ventas y tráfico en línea, evaluar el rendimiento general de tiendas virtuales, detectar tendencias y oportunidades de mejora, optimizar la experiencia del usuario, llevar a cabo análisis competitivos, perfeccionar las tasas de conversión y retención de clientes, así como proponer mejoras para el sitio web y medir el retorno de la inversión en estrategias de marketing digital.
                        Estas funciones son fundamentales para el éxito y el crecimiento sostenible de un negocio en línea, nosotros lo ofrecemos auditando y emitiendo informes profesionales.
                    </p>
                        
                </div>
                <div className='beneficios'>
                   <p style={{color:'cyan', margin:20, fontSize:20}}>BENEFICIOS DE CONTAR CON UN EQUIPO DE COMERCIO ELECTRONICO</p> 
                   <div className='benefecios_card_container'>
                    <div style={{display:'flex'}}>
                        <div className='beneficios_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>DESARROLLO DE TIENDAS EN LÍNEA</p>
                            <p>En Generación Tech creamos y personalizamos su tienda en línea para que se ajuste a sus necesidades y a la identidad de su marca. Esto incluye la optimización de la interfaz de usuario y la experiencia de compra.</p>
                        </div>
                        <div className='beneficios_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>OPTIMIZACIÓN DE LA CONVERCIÓN</p>
                            <p>Nos enfocamos en mejorar la tasa de conversión, lo que significa que trabajar en la optimización de su sitio web para convertir visitantes en clientes. Esto incluye mejoras en el proceso de compra, el diseño y la usabilidad</p>
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className='beneficios_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>EXPERIENCIA DE USUARIO OPTIMIZADA</p>
                            <p>Nos enfocamos en crear una experiencia de usuario atractiva y fácil de usar en su tienda en línea. Esto incluye la navegación, la búsqueda de productos y el proceso de pago.</p>
                        </div>
                        <div className='beneficios_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>INTEGRACIÓN CON SISTEMAS DE PAGO</p>
                            <p>Un servicio de marketing digital se centrará en desarrollar una estrategia sólida y personalizada para su negocio. Esto implica identificar sus objetivos, público objetivo y competidores para crear una estrategia que maximice los resultados.</p>
                        </div>
                    </div>

                   </div>
                </div>
                <div className='beneficios_mobile'>
                    <p style={{color:'cyan', margin:20, fontSize:20, textAlign:'center'}}>BENEFICIOS DE CONTAR CON UN SITIO WEB A MEDIDA</p> 
                    <BeneficiosMobileCe/>
                </div>
                   
            </div>
            <div className='preguntas_frecuentes'>
                <PreguntasFrecuentesCe/>
                <ContactoFaqs/>
            </div>
        </div>
    )
}