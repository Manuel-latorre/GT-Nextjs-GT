// "use client"

// import './Servicios.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';
// import { Montserrat } from 'next/font/google';
// import {Button} from "@nextui-org/react";
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import 'swiper/css';
// import 'swiper/css/effect-flip';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import Link from 'next/link';


// const montserrat = Montserrat({
//   subsets:['latin'],
//   weight:['700', '500', '200']
// })




// const Servicios = () => {
   

    
//     return (
//         <div className={montserrat.className}>

//                 <div id='servicios' className='services'>

//                 <div className='container-servicios-mobile'>
//                 <>
//                 <p style={{fontSize: 30, fontWeight: '400', textAlign:'center', marginBottom: 80, marginTop: 50}}>SERVICIOS</p>
//             <Swiper
//                 effect={'flip'}
//                 grabCursor={true}
//                 autoplay={{
//                     delay: 4000,
//                     disableOnInteraction: false,
//                 }}
//                 modules={[EffectFlip, Pagination, Navigation, Autoplay]}
//                 className="mySwiper"
//                 >
                    
//                 <SwiperSlide>
//                 <div className="cardServicio" id='mobile'>
//                         <p className='tituloCard' id='titleMobile'>DESARROLLO DE SOFTWARE</p>
//                         <hr />
//                         <li className='li'>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                             <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 7, textAlign:'start', fontSize:14}}>Desarrollo y diseños de sitios web.</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                             <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 7, textAlign:'start', fontSize:14}}>Diseño de Experiencia e Interfaz de Usuario (UX/UI)</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                             <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 7, textAlign:'start', fontSize:14}}>Mantenimiento y Soporte de Software</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                             <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 7, textAlign:'start', fontSize:14}}>Alojamiento Web hosting</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                             <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 7, textAlign:'start', fontSize:14}}>Website Testing</p>
//                                 </div>
//                         <Button style={{marginTop:20, backgroundColor:'cyan'}}  variant="solid" href='/desarrollo-software' as={Link}>
//                             Explorar
//                         </Button>
//                         </li>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <div className="cardServicio" id='mobile'>
//                         <p className='tituloCard' id='titleMobile'>MARKETING <br/> DIGITAL</p>
//                         <hr />
//                         <li className='li'>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                             <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5, textAlign:'start', fontSize:14}}>Gestión de RRSS y generación de contenidos.</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                             <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5 , textAlign:'start', fontSize:14}}>Optimización de motores de búsqueda SEO.</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                             <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5, textAlign:'start', fontSize:14}}>E-mail Marketing.</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                             <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5, textAlign:'start', fontSize:14}}> Marketing de contenidos.</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                             <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5, textAlign:'start', fontSize:14}}>Optimización de motores de búsqueda SEM.</p>
//                             </div>
//                         <Button style={{marginTop:20, backgroundColor:'cyan'}}  variant="solid" href='/marketing-digital' as={Link}>
//                             Explorar
//                         </Button>  
//                         </li>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <div className="cardServicio" id='mobile'>
//                         <p className='tituloCard' id='titleMobile'>COMERCIO <br/> ELECTRONICO</p>
//                         <hr />
//                         <li className='li'>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5, textAlign:'start'}}>Auditoría Web</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5, textAlign:'start'}}>Auditoría Social Media</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5, textAlign:'start'}}>Métricas y KPI s</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5, textAlign:'start'}}>Análisis de ventas y conversiones</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5, textAlign:'start'}}>Análisis de comportamiento de cliente</p>
//                             </div>
//                         <Button style={{marginTop:20, backgroundColor:'cyan'}}  variant="solid" href='/comercio-electronico' as={Link}>
//                             Explorar
//                         </Button>
//                         </li>
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//             </>
//         </div>  
//                 <div className='container-servicios-web'>
//                 <>
//                 <p style={{fontSize: 30, fontWeight: '400', textAlign:'center', marginBottom: 80, marginTop: 50}}>SERVICIOS</p>

//                 <div className='cardsServicios'>
                
//                     <div className="cardServicio">
//                         <p className='tituloCard'>DESARROLLO DE SOFTWARE</p>
//                         <hr />
//                         <li className='li'>
//                         <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                         <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Desarrollo y diseños de sitios web.</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Diseño de Experiencia e Interfaz de Usuario (UX/UI)</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Mantenimiento y Soporte de Software</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Alojamiento Web hosting</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Website Testing</p>
//                                 </div>
//                         <Button style={{marginTop:20, backgroundColor:'cyan'}}  variant="solid" href='/desarrollo-software' as={Link}>
//                             Explorar
//                         </Button>
//                         </li>
//                     </div>
            
//                     <div className="cardServicio">
//                         <p className='tituloCard'>MARKETING <br/> DIGITAL</p>
//                         <hr />
//                         <li className='li'>
//                         <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} /> 
//                                 <p style={{marginLeft: 5, textAlignLast:'start', textAlign:'start', fontSize:14}}>Gestión de RRSS y generación de contenidos.</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5 , textAlignLast:'start', textAlign:'start', fontSize:14}}>Optimización de motores de búsqueda SEO.</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5, textAlign:'start', fontSize:14}}>E-mail Marketing.</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5, textAlign:'start', fontSize:14}}>Marketing de contenidos.</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5, textAlign:'start', fontSize:14}}>Optimización de motores de búsqueda SEM.</p>
//                             </div>
//                         <Button style={{marginTop:20, backgroundColor:'cyan'}}  variant="solid" href='/marketing-digital' as={Link}>
//                             Explorar
//                         </Button>
//                         </li>
//                     </div>

//                     <div className="cardServicio">
//                         <p className='tituloCard'>COMERCIO <br/> ELECTRONICO</p>
//                         <hr />
//                         <li className='li'>
//                         <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5}}>Auditoría Web</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5}}>Auditoría Social Media</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5}}>Métricas y KPI s</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5}}>Análisis de ventas y conversiones</p>
//                             </div>
//                             <div style={{display:'flex', alignItems:'center', marginTop:10}}>
//                                 <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
//                                 <p style={{marginLeft: 5}}>Análisis de comportamiento de cliente</p>
//                             </div>
//                         <Button style={{marginTop:20, backgroundColor:'cyan'}}  variant="solid" href='/comercio-electronico' as={Link}>
//                             Explorar
//                         </Button>
//                         </li>
//                     </div>
//                 </div>
                
//                 </>
//                 </div>
                
//             </div> 
//         </div>
//   )
// }

// export default Servicios

'use client'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Servicios.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';




const Servicios = () => {
   
    return (
        <div id='servicios' className='services'>

            <div className='container-servicios-mobile'>
                <>
                    <p style={{ fontSize: 30, fontWeight: '400', textAlign: 'center', marginBottom: 80, marginTop: 50 }}>SERVICIOS</p>
                    <Swiper
                        effect={'flip'}
                        grabCursor={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        
                        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="cardServicio" id='mobile'>
                                <p className='tituloCard' id='titleMobile'>DESARROLLO DE SOFTWARE</p>
                                <hr />
                                <li className='li'>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Desarrollo y diseños de sitios web a Medida / Landing Pages</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Diseño de Experiencia e Interfaz de Usuario (UX/UI)</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Mantenimiento y Soporte de Software</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Alojamiento Web hosting</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Website Testing</p>
                                    </div>
                                </li>

                                <Link className='btnConoceMas' href='/desarrollo-software' id='btnConoceMasMobile'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Conocé más
                            </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cardServicio" id='mobile'>
                                <p className='tituloCard' id='titleMobile'>MARKETING <br /> DIGITAL</p>
                                <hr />
                                <li className='li'>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Gestión de Redes Sociales y generación de contenido</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Publicidad de motores de búsqueda (SEO)</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}> Email Marketing</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}> Marketing de contenido</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Optimización de motores de búsqueda (SEM)</p>
                                    </div>
                                </li>
                                <Link className='btnConoceMas' href='/marketing-digital' id='btnConoceMasMobile'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Conocé más
                            </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cardServicio" id='mobile'>
                                <p className='tituloCard' id='titleMobile'>COMERCIO <br /> ELECTRONICO</p>
                                <hr />
                                <li className='li'>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Auditoría Web</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Auditoría Social Media</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Métricas y KPIs</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Análisis de ventas y conversiones</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Análisis de comportamiento de cliente</p>
                                    </div>
                                </li>
                                <Link className='btnConoceMas' href='/comercio-electronico' id='btnConoceMasMobile'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Conocé más
                            </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
            <div className='container-servicios-web'>
                <>
                    <p style={{ fontSize: 30, fontWeight: '400', textAlign: 'center', marginBottom: 80, marginTop: 50 }}>SERVICIOS</p>

                    <div className='cardsServicios'>

                        <div className="cardServicio">
                            <p className='tituloCard'>DESARROLLO DE SOFTWARE</p>
                            <hr />
                            <li className='li'>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Desarrollo y diseños de sitios web a Medida / Landing Pages</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Diseño de Experiencia e Interfaz de Usuario (UX/UI)</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Mantenimiento y Soporte de Software</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Alojamiento Web hosting</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Website Testing</p>
                                </div>
                            </li>

                            <Link className='btnConoceMas' href='/desarrollo-software' id='btnConoceMasMobile'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Conocé más
                            </Link>
                        </div>

                        <div className="cardServicio">
                            <p className='tituloCard'>MARKETING <br /> DIGITAL</p>
                            <hr />
                            <li className='li'>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Gestión de Redes Sociales y generación de contenido</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Publicidad de motores de búsqueda (SEO)</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}> Email Marketing</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}> Marketing de contenido</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Optimización de motores de búsqueda (SEM)</p>
                                </div>
                            </li>
                            <Link className='btnConoceMas' href='/marketing-digital' id='btnConoceMasMobile'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Conocé más
                            </Link>
                        </div>

                        <div className="cardServicio">
                            <p className='tituloCard'>COMERCIO <br /> ELECTRONICO</p>
                            <hr />
                            <li className='li'>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Auditoría Web</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Auditoría Social Media</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Métricas y KPI´s</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Análisis de ventas y conversiones</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Análisis de comportamiento de cliente</p>
                                </div>
                            </li>
                            <Link className='btnConoceMas' href='/comercio-electronico' id='btnConoceMasMobile'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Conocé más
                            </Link>

                        </div>
                    </div>

                </>
            </div>
        </div>
    )
}

export default Servicios