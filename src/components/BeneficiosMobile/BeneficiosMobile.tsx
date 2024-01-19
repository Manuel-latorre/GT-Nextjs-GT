'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import '../../app/desarrollo-software/ServiciosPages.css'



export default function BeneficiosMobile (){
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
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>PERSONALIZACIÓN TOTAL</p>
                        <p>La programación propia posibilita una personalización total del sitio web, permitiéndote diseñar y desarrollar cada aspecto según tus necesidades específicas. El resultado es un sitio único y adaptado a tu visión.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='beneficios_card'>
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>ESCALABILIDAD</p>
                        <p>Desarrollar un sitio web con programación propia proporciona la flexibilidad necesaria para escalar con el crecimiento de su negocio o proyecto. Permite la incorporación eficiente de nuevas funciones y características sin depender de plataformas pre-construidas.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='beneficios_card'>
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>PROPIEDAD TOTAL</p>
                        <p>Al crear tu sitio web con programación propia, posees la propiedad total del código y los activos relacionados. Esto implica que no estás limitado por restricciones de licencia y puedes realizar cambios o mejoras en cualquier momento.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='beneficios_card'>
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>MENOS DEPENDENCIA</p>
                        <p>Al no depender de las actualizaciones o cambios de políticas de terceros, a diferencia de las plataformas de gestión de contenido (CMS) pre-construidas, obtienes un mayor control sobre la evolución de tu sitio al desarrollarlo con programación propia.</p>
                            </div>
                        </SwiperSlide>
                </Swiper>
                   </div>
    )
}
                
                
                
                