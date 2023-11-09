'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import {Accordion, AccordionItem} from "@nextui-org/react";
import Ds from "@/components/Lotties/Ds";
import UxUi from '@/components/Lotties/UxUi';
import Support from '@/components/Lotties/Support';
import Hosting from '@/components/Lotties/Hosting';
import Image from 'next/image';
import logo from '../../assets/logo.svg'
import BeneficiosMobile from '@/components/BeneficiosMobile/BeneficiosMobile';
import 'swiper/css';
import 'swiper/css/pagination';
import './ServiciosPages.css'



export default function DesarrolloSoftware(){
    return (
        <div>
            <div className='title_container'>
                <h1 className='title'>Desarrollo de Software</h1>
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
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Desarrollo y diseños de sitios web a Medida/Landing Pages</p>
                                <Accordion className='accordion_card' variant="bordered" isCompact>
                                    <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="Leer más">
                                        En el panorama actual de los negocios en linea contar con un sitio web es esencial para mostrar su negocio o proyecto, este canal permite contar con presencia permanente en línea, ampliar  su alcance a nivel global y proporcionar una plataforma para mostrar sus productos o  servicios las 24 horas del día, los 7 días de la semana, mejorando la productividad de su empresa y facilitando la comunicación con clientes potenciales.
                                    </AccordionItem>
                                    </Accordion>
                                <Ds/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='card_container'>
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Diseño de Experiencia e Interfaz de Usuario (UX/UI)</p>
                                <Accordion className='accordion_card' variant="bordered" isCompact>
                                    <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="Leer más">
                                    El diseño de experiencia de usuario (UX) y el diseño de interfaz de usuario (UI) son esenciales para crear productos digitales exitosos y atractivos. Estos diseños influyen en la satisfacción del usuario, la retención, la conversión y la percepción de la marca. Invertir en UX/UI no solo mejora la experiencia del usuario, sino que también puede tener un impacto significativo en el rendimiento y el éxito de un producto digital.
                                    </AccordionItem>
                                    </Accordion>
                                <UxUi/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='card_container'>
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Mantenimiento y Soporte de Sofware</p>
                                <Accordion className='accordion_card' variant="bordered" isCompact>
                                    <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="Leer más">
                                    El mantenimiento y soporte de software es fundamental para asegurar que las aplicaciones y sistemas digitales sigan siendo efectivos, seguros y relevantes con el tiempo. Estas prácticas son esenciales para mantener la protección de su información, evitando el acceso a sus datos por parte de usuarios no autorizados.
                                    Ignorar el mantenimiento y el soporte de su software puede resultar altamente costoso, exponiéndose ademas a la perdida de datos propios o de sus clientes y a la vulnerabilidad de su información.
                                    </AccordionItem>
                                    </Accordion>
                                <Support/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='card_container'>
                                <p style={{color:'cyan', margin:20, fontSize:20}}>Alojamiento Web hosting</p>
                                <Accordion className='accordion_card' variant="bordered" isCompact>
                                    <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="Leer más">
                                    Un equipo de alojamiento web hosting eficiente es esencial para proporcionar un ambiente en línea seguro, de alto rendimiento y disponible en todo momento. Su experiencia y dedicación contribuyen directamente al éxito y la satisfacción de los usuarios de los sitios web y aplicaciones en línea, lo que es fundamental en un mundo digital altamente competitivo.
                                    </AccordionItem>
                                    </Accordion>
                                <Hosting/>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <div className='container_porqueGt' style={{margin:100}}>
                    <p style={{color:'cyan', margin:20, fontSize:20}}>¿Por qué diseñar su sitio web con nosotros?</p>
                    <div className='text_image_container'>
                        <div className='text_container'>
                            <p>
                                Generación Tech es mucho mas que una Empresa de desarrollos y servicios al cliente. Desde nuestros inicios postulamos que "Nuestro foco es la solución",  para ello, convocamos a un equipo de profesionales expertos en disciplinas especificas para cada necesidad del nuevo ecosistema digital, contamos con jóvenes talentos certificados y titulados en tecnologías disruptivas y de alto impacto, profesionales que saben lo que hacen y entienden el mundo del los negocios en linea, dispuestos a construir soluciones tecnológicas a medida.
                                Llevamos a cabo nuestros servicios mediante un proceso que comienza con la comprensión de las necesidades del cliente y la planificación detallada del proyecto. Luego diseñamos, desarrollamos y probamos el software, lo implementamos y proporcionamos soporte continuo. Mantenemos una comunicación constante con el cliente, documentamos el sistema y buscamos la retroalimentación para mejorar nuestros servicios y garantizar soluciones de alta calidad.
                            </p>
                        </div>
                        <Image className='logoGt' src={logo} alt='logo'/>
                    </div>
                </div>
                <div className='beneficios'>
                   <p style={{color:'cyan', margin:20, fontSize:20}}>BENEFICIOS DE CONTAR CON UN SITIO WEB A MEDIDA</p> 
                   <div className='benefecios_card_container'>
                    <div style={{display:'flex'}}>
                        <div className='beneficios_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>PERSONALIZACIÓN TOTAL</p>
                            <p>La programación propia permite una personalización completa del sitio web. Le permite  diseñar y desarrollar cada aspecto del sitio según sus necesidades y requisitos específicos, lo que resulta en un sitio web único y adaptado a su visión.</p>
                        </div>
                        <div className='beneficios_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>ESCALABILIDAD</p>
                            <p>Desarrollar un sitio web con programación propia le brinda la flexibilidad necesaria para escalar su sitio a medida que crece su negocio o proyecto. Puede agregar nuevas funciones y características de manera más eficiente sin depender de plataformas pre-construidas.</p>
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className='beneficios_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>PROPIEDAD TOTAL</p>
                            <p>Cuando creas su sitio web con programación propia, tiene la propiedad total de todo el código y los activos relacionados. Esto significa que no está  limitado por restricciones de licencia y puede  hacer cambios o mejoras en cualquier momento.</p>
                        </div>
                        <div className='beneficios_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>MENOS DEPENDENCIA</p>
                            <p>No está atado a las actualizaciones o cambios de políticas de terceros, como ocurre con las plataformas de gestión de contenido (CMS) pre-construidas. Esto le brinda un mayor control sobre la evolución de su sitio.</p>
                        </div>
                    </div>

                   </div>
                </div>
                <div className='beneficios_mobile'>
                    <p style={{color:'cyan', margin:20, fontSize:20, textAlign:'center'}}>BENEFICIOS DE CONTAR CON UN SITIO WEB A MEDIDA</p> 
                    <BeneficiosMobile/>
                </div>
                   
            </div>
                
        </div>
    )
}