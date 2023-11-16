"use client"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Montserrat } from 'next/font/google';
import {Button} from "@nextui-org/react";
import './Servicios.css'
import 'swiper/css';
import 'swiper/css/pagination';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';


const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '200']
})


export default function Servicios(){
    return (
        <div className={montserrat.className}>
            <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay:5000
                    }}
                    breakpoints={{
                        900:{
                            slidesPerView: 2
                        },
                        1600: {
                            slidesPerView: 3
                        }
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    className="mySwiperServices"
                    >
                        <SwiperSlide>
                            <div className='cardServicio'>
                            <p className='tituloCard'>DESARROLLO DE SOFTWARE</p>
                                <li>
                                <hr />
                                    <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                        <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                        <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Desarrollo y diseños de sitios web.</p>
                                    </div>
                                    <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                        <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                        <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Diseño de Experiencia e Interfaz de Usuario (UX/UI)</p>
                                    </div>
                                    <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                        <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                        <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Mantenimiento y Soporte de Software</p>
                                    </div>
                                    <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                        <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                        <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Alojamiento Web hosting</p>
                                    </div>
                                    <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                        <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                        <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Website Testing</p>
                                    </div>
                                </li>
                             <Button style={{marginTop:20, backgroundColor:'cyan'}}  variant="solid" href='/desarrollo-software' as={Link}>
                                 Explorar
                             </Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="cardServicio">
                               <p className='tituloCard'>MARKETING DIGITAL</p>
                                <li>
                               <hr />
                                    <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                        <CheckCircleOutlineIcon sx={{ fontSize: 30 }} /> 
                                        <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Gestión de RRSS y generación de contenidos.</p>
                                    </div>
                                    <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                        <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                        <p style={{marginLeft: 7 , textAlignLast:'start', textAlign:'start', fontSize:14}}>Optimización de motores de búsqueda SEO.</p>
                                    </div>
                                    <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                        <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                        <p style={{marginLeft: 7, textAlign:'start', fontSize:14}}>E-mail Marketing.</p>
                                    </div>
                                    <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                        <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                        <p style={{marginLeft: 7, textAlign:'start', fontSize:14}}>Marketing de contenidos.</p>
                                    </div>
                                    <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                        <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                        <p style={{marginLeft: 7, textAlign:'start', fontSize:14}}>Optimización de motores de búsqueda SEM.</p>
                                    </div>
                                </li>                     
                          <Button style={{marginTop:20, backgroundColor:'cyan'}}  variant="solid" href='/marketing-digital' as={Link}>
                              Explorar
                         </Button>
                        
                      </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="cardServicio">
                                  <p className='tituloCard'>COMERCIO <br/> ELECTRONICO</p>
                                    <li>
                                  <hr />

                                    <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                          <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                          <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Auditoría Web</p>
                                      </div>
                                      <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                          <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                          <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Auditoría Social Media</p>
                                      </div>
                                      <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                          <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                          <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Métricas y KPI s</p>
                                      </div>
                                      <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                          <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                          <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Análisis de ventas y conversiones</p>
                                      </div>
                                      <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                          <CheckCircleOutlineIcon sx={{ fontSize: 30 }} />
                                          <p style={{marginLeft: 7, textAlignLast:'start', textAlign:'start', fontSize:14}}>Análisis de comportamiento de cliente</p>
                                      </div>
                                    </li>
                                  <Button style={{marginTop:20, backgroundColor:'cyan'}}  variant="solid" href='/comercio-electronico' as={Link}>
                                      Explorar
                                  </Button>
                             </div>
                        </SwiperSlide>
                </Swiper>
        </div>
    )
}