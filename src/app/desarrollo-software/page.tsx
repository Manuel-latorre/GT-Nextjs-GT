'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Montserrat } from 'next/font/google'
import { ScrollShadow } from "@nextui-org/react";
import Ds from "@/components/Lotties/Ds";
import UxUi from '@/components/Lotties/UxUi';
import Support from '@/components/Lotties/Support';
import Hosting from '@/components/Lotties/Hosting';
import Image from 'next/image';
import logo from '../../assets/logo.svg'
import BeneficiosMobile from '@/components/BeneficiosMobile/BeneficiosMobile';
import PreguntasFrecuentesDs from '@/components/Preguntas/Ds';
import ContactoFaqs from '@/app/Faqs/ContactoFaqs';
import 'swiper/css';
import 'swiper/css/pagination';
import './ServiciosPages.css'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['700', '500', '200']
})


export default function DesarrolloSoftware() {
    return (
        <div className={montserrat.className}>
            <div className='title_container'>
                <h1 className='title'>Desarrollo de Software</h1>
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
                            <p style={{ color: 'cyan', margin: 20, fontSize: 20 }}>Desarrollo y diseños de sitios web a Medida/Landing Pages</p>
                            <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                <div className='container_service_info'>
                                    <p className='textService'> Hoy, tener un sitio web es esencial para mostrar su negocio en el panorama digital. Proporciona presencia constante en línea, amplía su alcance global y ofrece una plataforma para exhibir productos o servicios las 24/7. Mejora la productividad y facilita la comunicación con clientes potenciales.</p>
                                    <Ds />
                                </div>
                            </ScrollShadow>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card_container'>
                            <p style={{ color: 'cyan', margin: 20, fontSize: 20 }}>Diseño de Experiencia e Interfaz de Usuario (UX/UI)</p>
                            <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                <div className='container_service_info'>
                                    <p className='textService'>El diseño UX/UI es esencial para el éxito de productos digitales, influyendo en la satisfacción del usuario, la retención, la conversión y la percepción de la marca. Invertir en UX/UI no solo mejora la experiencia del usuario, sino que también impacta positivamente en el rendimiento y el éxito del producto digital.</p>
                                    <UxUi />
                                </div>
                            </ScrollShadow>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card_container'>
                            <p style={{ color: 'cyan', margin: 20, fontSize: 20 }}>Mantenimiento y Soporte de Sofware</p>
                            <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                <div className='container_service_info'>
                                    <p className='textService'>El mantenimiento y soporte de software son fundamentales para garantizar la eficacia, seguridad y relevancia a lo largo del tiempo. Estas prácticas protegen la información y evitan el acceso no autorizado. Ignorarlas puede ser costoso y exponer a la pérdida de datos y vulnerabilidad de la información.</p>
                                    <Support />
                                </div>
                            </ScrollShadow>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card_container'>
                            <p style={{ color: 'cyan', margin: 20, fontSize: 20 }}>Alojamiento Web hosting</p>
                            <ScrollShadow className="w-[300px] h-[400px]" hideScrollBar>
                                <div className='container_service_info'>
                                    <p className='textService'>Un hosting web eficiente es esencial para un ambiente en línea seguro y de alto rendimiento. Su dedicación contribuye al éxito y satisfacción de los usuarios en un entorno digital altamente competitivo.</p>
                                    <Hosting />
                                </div>
                            </ScrollShadow>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <div className='container_porqueGt' style={{ marginBottom: 100 }}>
                    <p style={{ color: 'cyan', margin: 20, fontSize: 20 }}>¿Por qué diseñar su sitio web con nosotros?</p>
                    <div className='text_image_container'>
                        <div className='text_container'>
                            <p className='text_porqueGt'>                                        <p>Generación Tech va más allá de ser una empresa de desarrollos y servicios al cliente. Nos enfocamos en la solución, convocando a un equipo de profesionales certificados en tecnologías disruptivas. Ofrecemos servicios personalizados desde la comprensión de las necesidades hasta la implementación, con comunicación constante y búsqueda de retroalimentación para garantizar soluciones de alta calidad.</p>
</p>
                        </div>
                        <Image className='logoGt' src={logo} alt='logo' />
                    </div>
                </div>
                <div className='beneficios'>
                    <p style={{ color: 'cyan', margin: 20, fontSize: 20 }}>BENEFICIOS DE CONTAR CON UN SITIO WEB A MEDIDA</p>
                    <div className='benefecios_card_container'>
                        <div style={{ display: 'flex' }}>
                            <div className='beneficios_card'>
                                <p style={{ margin: 20, color: 'cyan', fontSize: 20, textAlign: 'center' }}>PERSONALIZACIÓN TOTAL</p>
                                <p>La programación propia permite una personalización total del sitio web, diseñando y desarrollando cada aspecto según sus necesidades y requisitos específicos, logrando un sitio único y adaptado a su visión.</p>
                            </div>
                            <div className='beneficios_card'>
                                <p style={{ margin: 20, color: 'cyan', fontSize: 20, textAlign: 'center' }}>ESCALABILIDAD</p>
                                <p>Desarrollar con programación propia permite escalar el sitio con el crecimiento del negocio, añadiendo funciones de forma eficiente, sin depender de plataformas pre-construidas.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className='beneficios_card'>
                                <p style={{ margin: 20, color: 'cyan', fontSize: 20, textAlign: 'center' }}>PROPIEDAD TOTAL</p>
                                <p>Crear un sitio web con programación propia otorga total propiedad del código y activos. Sin restricciones de licencia, puedes realizar cambios o mejoras en cualquier momento.</p>
                            </div>
                            <div className='beneficios_card'>
                                <p style={{ margin: 20, color: 'cyan', fontSize: 20, textAlign: 'center' }}>MENOS DEPENDENCIA</p>
                                <p>Al no depender de actualizaciones o cambios de políticas de terceros, a diferencia de las plataformas pre-construidas, tienes un mayor control sobre la evolución de tu sitio al desarrollarlo con programación propia.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='beneficios_mobile'>
                    <p style={{ color: 'cyan', margin: 20, fontSize: 20, textAlign: 'center' }}>BENEFICIOS DE CONTAR CON UN SITIO WEB A MEDIDA</p>
                    <BeneficiosMobile />
                </div>

            </div>
            <div className='preguntas_frecuentes'>
                <PreguntasFrecuentesDs />
                <ContactoFaqs />
            </div>
        </div>
    )
}