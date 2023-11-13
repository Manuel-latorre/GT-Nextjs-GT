'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import '../../app/desarrollo-software/ServiciosPages.css'



export default function BeneficiosMobileCe (){
    return (
                <div>
                    <Swiper
                     slidesPerView={1}
                     spaceBetween={30}
                     autoplay={{
                         delay:7000
                     }}
                     modules={[Autoplay]}
                     loop={true}
                     className="mySwiperBeneficios"
                     >
                        <SwiperSlide>
                            <div className='beneficios_card'>
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>DESARROLLO DE TIENDAS EN LÍNEA</p>
                                <p>En Generación Tech creamos y personalizamos su tienda en línea para que se ajuste a sus necesidades y a la identidad de su marca. Esto incluye la optimización de la interfaz de usuario y la experiencia de compra.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='beneficios_card'>
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>OPTIMIZACIÓN DE LA CONVERCIÓN</p>
                                <p>Nos enfocamos en mejorar la tasa de conversión, lo que significa que trabajar en la optimización de su sitio web para convertir visitantes en clientes. Esto incluye mejoras en el proceso de compra, el diseño y la usabilidad</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='beneficios_card'>
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>EXPERIENCIA DE USUARIO OPTIMIZADA</p>
                                <p>Nos enfocamos en crear una experiencia de usuario atractiva y fácil de usar en su tienda en línea. Esto incluye la navegación, la búsqueda de productos y el proceso de pago.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='beneficios_card'>
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>INTEGRACIÓN CON SISTEMAS DE PAGO</p>
                                <p>Un servicio de marketing digital se centrará en desarrollar una estrategia sólida y personalizada para su negocio. Esto implica identificar sus objetivos, público objetivo y competidores para crear una estrategia que maximice los resultados.</p>
                            </div>
                        </SwiperSlide>
                </Swiper>
                   </div>
    )
}
                
                
                
                