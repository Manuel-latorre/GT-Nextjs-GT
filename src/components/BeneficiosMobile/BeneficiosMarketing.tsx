'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import '../../app/desarrollo-software/ServiciosPages.css'



export default function BeneficiosMobileMk (){
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
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>MEDICIÓN Y ANÁLISIS</p>
                                <p>Un servicio de marketing digital se centrará en desarrollar una estrategia sólida y personalizada para su negocio. Esto implica identificar sus objetivos, público objetivo y competidores para crear una estrategia que maximice los resultados.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='beneficios_card'>
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>MAXIMIZACIÓN DE RECURSOS</p>
                                <p>En Generación Tech contamos con acceso a herramientas y software de marketing de última generación que pueden ser costosos si se adquieren de manera individual. Esto facilita la implementación de estrategias avanzadas.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='beneficios_card'>
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>ENFOQUE ESTRATÉGICO</p>
                                <p>En Generación Tech utilizamos herramientas avanzadas de seguimiento y análisis para evaluar el rendimiento de las campañas. Esto permite ajustar y optimizar estrategias en tiempo real para obtener mejores resultados.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='beneficios_card'>
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>RESULTADOS MEDIBLES</p>
                                <p>El marketing digital permite un seguimiento preciso de los resultados y el retorno de la inversión (ROI). Desde Generación Tech proporcionamos informes detallados y métricas para evaluar el rendimiento de tus campañas.</p>
                            </div>
                        </SwiperSlide>
                </Swiper>
                   </div>
    )
}
                
                
                
                