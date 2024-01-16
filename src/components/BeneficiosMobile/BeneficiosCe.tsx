'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import '../../app/desarrollo-software/ServiciosPages.css'



export default function BeneficiosMobileCe() {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 7000
                }}
                modules={[Autoplay]}
                loop={true}
                className="mySwiperBeneficios"
            >
                <SwiperSlide>
                    <div className='beneficios_card'>
                        <p style={{ margin: 20, color: 'cyan', fontSize: 20, textAlign: 'center' }}>DESARROLLO DE TIENDAS EN LÍNEA</p>
                        <p>En Generación Tech, creamos y personalizamos su tienda en línea, adaptándola a sus necesidades y la identidad de su marca. Esto abarca la optimización de la interfaz de usuario y la experiencia de compra.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='beneficios_card'>
                        <p style={{ margin: 20, color: 'cyan', fontSize: 20, textAlign: 'center' }}>OPTIMIZACIÓN DE LA CONVERSIÓN</p>
                        <p>Enfocamos nuestros esfuerzos en mejorar la tasa de conversión, optimizando su sitio web para convertir visitantes en clientes. Esto implica mejoras en el proceso de compra, diseño y usabilidad.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='beneficios_card'>
                        <p style={{ margin: 20, color: 'cyan', fontSize: 20, textAlign: 'center' }}>EXPERIENCIA DE USUARIO OPTIMIZADA</p>
                        <p>Centramos nuestros esfuerzos en diseñar una experiencia de usuario atractiva y fácil de usar en su tienda en línea. Esto abarca la navegación, la búsqueda de productos y el proceso de pago.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='beneficios_card'>
                        <p style={{ margin: 20, color: 'cyan', fontSize: 20, textAlign: 'center' }}>INTEGRACIÓN CON SISTEMAS DE PAGO</p>
                        <p>Un servicio de marketing digital se enfocará en crear una estrategia sólida y personalizada para su negocio. Esto incluye la identificación de objetivos, público objetivo y competidores, con el objetivo de maximizar los resultados.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}



