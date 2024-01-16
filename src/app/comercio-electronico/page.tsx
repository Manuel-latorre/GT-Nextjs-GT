'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Montserrat } from 'next/font/google'
import { ScrollShadow } from "@nextui-org/react";

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
    subsets: ['latin'],
    weight: ['700', '500', '200']
})


export default function MarketingDigital() {
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
                        delay: 7000
                    }}
                    breakpoints={{
                        800: {
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
                            <p style={{ color: 'cyan', margin: 20, fontSize: 20 }}>Auditoría Web</p>
                            <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                <div className='container_service_info'>
                                    <p className='textService'>Nuestro equipo de Comercio Electrónico se compone de profesionales especializados en auditorías de canales digitales. Realizamos seguimientos, revisiones y análisis detallados de cada canal, buscando posibles fallas que afecten la navegación, usabilidad, velocidad de carga, interacción y seguridad. Presentamos informes detallados de los resultados y proponemos soluciones para mejorar.</p>
                                    <AudiWeb />
                                </div>
                            </ScrollShadow>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card_container'>
                            <p style={{ color: 'cyan', margin: 20, fontSize: 20 }}>Auditoría Social Media</p>
                            <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                <div className='container_service_info'>
                                    <p className='textService'>
                                        Generación Tech fue creada con el propósito de ofrecer soluciones digitales, y nuestro servicio de auditoría en redes sociales es esencial para que las empresas logren los resultados deseados. Realizamos evaluaciones detalladas del estado de su marca, analizamos su presencia en línea, tono de voz, reputación e impacto de sus estrategias. Utilizamos métricas y KPIs para elaborar informes. La auditoría en redes sociales es una inversión que contribuye directamente a la adquisición y retención de clientes.
                                    </p>
                                    <AudiMedia />
                                </div>
                            </ScrollShadow>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card_container'>
                            <p style={{ color: 'cyan', margin: 20, fontSize: 20 }}>Métricas Y KPIS</p>
                            <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                <div className='container_service_info'>
                                    <p className='textService'>
                                        Nuestro equipo de e-mail marketing desempeña un papel esencial en la gestión de relaciones, la adquisición de nuevos clientes y la generación de ingresos. Poseemos la capacidad para diseñar, ejecutar y optimizar campañas de e-mail marketing efectivas, clave para el éxito en el marketing digital, al permitir llegar de manera personalizada y medible a la audiencia.</p>
                                    <Metricas />
                                </div>
                            </ScrollShadow>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card_container'>
                            <p style={{ color: 'cyan', margin: 20, fontSize: 20 }}>Análisis de ventas y conversiones</p>
                            <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                <div className='container_service_info'>
                                    <p className='textService'>
                                        Las ventas digitales y la conversión son fundamentales en el comercio en línea. La habilidad de convertir visitantes en clientes es crucial para el éxito en el entorno digital. Nuestro equipo analiza y identifica estas necesidades en el entorno virtual, proporcionando informes detallados para ayudarle a crecer y transformar la realidad de su negocio.
                                    </p>
                                    <Ventas />
                                </div>
                            </ScrollShadow>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card_container'>
                            <p style={{ color: 'cyan', margin: 20, fontSize: 20 }}>Análisis del comportamiento del usuario</p>
                            <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                <div className='container_service_info'>
                                    <p className='textService'> Comprender cómo los usuarios navegan por un sitio web o una aplicación es clave para identificar áreas de mejora en la experiencia del usuario. En Generación Tech, llevamos a cabo pruebas de usabilidad y realizamos ajustes basados en los datos recopilados. </p>
                                    <User />
                                </div>
                            </ScrollShadow>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <div className='container_porqueGt' style={{ marginBottom: 100 }}>
                    <p>
                        Como analistas en comercio electrónico, nos especializamos en evaluar detalladamente datos de ventas y tráfico online, analizar el rendimiento de tiendas virtuales, detectar tendencias, optimizar la experiencia del usuario, realizar análisis competitivos y mejorar tasas de conversión. Nuestras soluciones son fundamentales para el éxito y crecimiento sostenible de los negocios en línea, proporcionando auditorías y emitiendo informes profesionales.
                    </p>

                </div>
                <div className='beneficios'>
                    <p style={{ color: 'cyan', margin: 20, fontSize: 20 }}>BENEFICIOS DE CONTAR CON UN EQUIPO DE COMERCIO ELECTRONICO</p>
                    <div className='benefecios_card_container'>
                        <div style={{ display: 'flex' }}>
                            <div className='beneficios_card'>
                                <p style={{ margin: 20, color: 'cyan', fontSize: 20, textAlign: 'center' }}>DESARROLLO DE TIENDAS EN LÍNEA</p>
                                <p>En Generación Tech, creamos y personalizamos su tienda en línea, adaptándola a sus necesidades y la identidad de su marca. Esto abarca la optimización de la interfaz de usuario y la experiencia de compra.</p>
                            </div>
                            <div className='beneficios_card'>
                                <p style={{ margin: 20, color: 'cyan', fontSize: 20, textAlign: 'center' }}>OPTIMIZACIÓN DE LA CONVERSIÓN</p>
                                <p>Enfocamos nuestros esfuerzos en mejorar la tasa de conversión, optimizando su sitio web para convertir visitantes en clientes. Esto implica mejoras en el proceso de compra, diseño y usabilidad.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className='beneficios_card'>
                                <p style={{ margin: 20, color: 'cyan', fontSize: 20, textAlign: 'center' }}>EXPERIENCIA DE USUARIO OPTIMIZADA</p>
                                <p>Centramos nuestros esfuerzos en diseñar una experiencia de usuario atractiva y fácil de usar en su tienda en línea. Esto abarca la navegación, la búsqueda de productos y el proceso de pago.</p>
                            </div>
                            <div className='beneficios_card'>
                                <p style={{ margin: 20, color: 'cyan', fontSize: 20, textAlign: 'center' }}>INTEGRACIÓN CON SISTEMAS DE PAGO</p>
                                <p>Un servicio de marketing digital se enfocará en crear una estrategia sólida y personalizada para su negocio. Esto incluye la identificación de objetivos, público objetivo y competidores, con el objetivo de maximizar los resultados.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='beneficios_mobile'>
                    <p style={{ color: 'cyan', margin: 20, fontSize: 20, textAlign: 'center' }}>BENEFICIOS DE CONTAR CON UN SITIO WEB A MEDIDA</p>
                    <BeneficiosMobileCe />
                </div>

            </div>
            <div className='preguntas_frecuentes'>
                <PreguntasFrecuentesCe />
                <ContactoFaqs />
            </div>
        </div>
    )
}