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
                                <p>La programación propia permite una personalización completa del sitio web. Le permite  diseñar y desarrollar cada aspecto del sitio según sus necesidades y requisitos específicos, lo que resulta en un sitio web único y adaptado a su visión.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='beneficios_card'>
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>ESCALABILIDAD</p>
                                <p>Desarrollar un sitio web con programación propia le brinda la flexibilidad necesaria para escalar su sitio a medida que crece su negocio o proyecto. Puede agregar nuevas funciones y características de manera más eficiente sin depender de plataformas pre-construidas.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='beneficios_card'>
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>PROPIEDAD TOTAL</p>
                                <p>Cuando creas su sitio web con programación propia, tiene la propiedad total de todo el código y los activos relacionados. Esto significa que no está limitado por restricciones de licencia y puede hacer cambios o mejoras en cualquier momento.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='beneficios_card'>
                                <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>MENOS DEPENDENCIA</p>
                                <p>No está atado a las actualizaciones o cambios de políticas de terceros, como ocurre con las plataformas de gestión de contenido (CMS) pre-construidas. Esto le brinda un mayor control sobre la evolución de su sitio.</p>
                            </div>
                        </SwiperSlide>
                </Swiper>
                   </div>
    )
}
                
                
                
                