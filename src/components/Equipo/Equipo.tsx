

'use client'

import React, { useRef, useState } from 'react';
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['700', '600', '500', '400', '200']
})
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Button } from "@nextui-org/react";
import './Equipo.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

// import pao from '../../assets/pao.png'
const pao = require('../../assets/pao.png')

// import mati from '../../assets/mati.png'
const mati = require('../../assets/mati.png')

// import damian from '../../assets/damian.png'
const damian = require('../../assets/damian.png')

// import guille from '../../assets/guille.png'
const guille = require('../../assets/guille.png')

// import walter from '../../assets/walter.png'
const walter = require('../../assets/walter.png')

import Link from 'next/link';



export default function App() {
    return (
        <div id='equipo' style={{ marginTop: 100 }}>
            <p style={{ textAlign: 'center', marginBottom: 50 }} className='tituloServiciosTeam'>NUESTRO EQUIPO</p>
            <Swiper
                slidesPerView={1}
                spaceBetween={25}
                autoplay={{
                    delay: 4000
                }}
                breakpoints={{
                    700: {
                        slidesPerView: 2
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                }}
                modules={[Autoplay]}
                loop={true}
                className="mySwiperEquipo"
            >
                <SwiperSlide>
                    <div className="cardEquipo">
                        <div className='imageCardEquipo'>
                            <Image width={150} src={damian} alt='Damián Gómez' />
                            <p style={{ fontWeight: 'bolder', color: '#555555' }} className='cardTitleService'>Damián <br /><span style={{ color: "#00B6AF" }}>Gómez</span></p>
                        </div>
                        <div className='rolContainer'>
                            <div style={{ marginTop: 10 }}>
                                <p className={`${montserrat.className} rol`}>Director Operativo</p>
                                <hr />
                                <p className={`${montserrat.className} rolDescription`}>Responsable de supervisar las operaciones diarias de la empresa, asegurando la optimización de los procesos, el cumplimiento de los plazos y los estandares de calidad.</p>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <Button as={Link} href='https://www.linkedin.com/in/walter-gomez-b97909179/' target='_blank' variant='solid' color='primary'>
                                    <svg width={20} fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Lind</title> <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>
                                    <h1 className={montserrat.className} style={{ fontSize: 14, fontWeight: 600 }}>Damian Gómez</h1>
                                </Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardEquipo" id='black'>
                        <div className='imageCardEquipo'>
                            <Image width={150} src={walter} alt='Walter Gómez' />
                            <p style={{ fontWeight: 'bolder', color: '#FFFF' }} className='cardTitleService'>Walter <br /><span style={{ color: "#00B6AF" }}>Gómez</span></p>
                        </div>
                        <div className='rolContainer'>
                            <div style={{ marginTop: 10 }}>
                                <p className={`${montserrat.className} rol`}>Director Ejecutivo</p>
                                <hr />
                                <p className={`${montserrat.className} rolDescription`} style={{ color: "white" }}>Responsable de definir la visión a largo plazo de la empresa y desarrollar estrategias para alcanzar los objetivos de la organización.</p>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <Button as={Link} href='https://www.linkedin.com/in/wgsadvise/' target='_blank' variant='solid' color='primary'>
                                    <svg width={20} fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Linked</title> <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>
                                    <h1 className={montserrat.className} style={{ fontSize: 14, fontWeight: 600 }}>Walter Gómez</h1>

                                </Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardEquipo " id='green'>
                        <div className='imageCardEquipo'>
                            <Image width={150} src={pao} alt='Paola Vera' />
                            <p style={{ fontWeight: 'bolder', color: '#555555' }} className='cardTitleService' >Paola <br /><span style={{ color: "#FFFF" }}>Vera</span></p>
                        </div>
                        <div className='rolContainer'>
                            <div style={{ marginTop: 10 }}>
                                <p className={`${montserrat.className} rol`} style={{ color: "white" }}>Marketing Manager</p>
                                <hr />
                                <p className={`${montserrat.className} rolDescription`} style={{ color: "white" }}>Desarrollo de las estrategias de comunicación para los canales digitales.</p>
                            </div>
                            <div style={{ marginTop: 40 }}>
                                <Button as={Link} href='http://www.linkedin.com/in/paola-giselle-vera-26a0501b6' target='_blank' variant='solid' color='primary'>
                                    <svg width={20} fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Linked</title> <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>
                                    <h1 className={montserrat.className} style={{ fontSize: 14, fontWeight: 600 }}>Paola Vera</h1>
                                </Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardEquipo" >
                        <div className='imageCardEquipo'>
                            <Image width={150} src={mati} alt='Matías Hernandez' />
                            <p style={{ fontWeight: 'bolder', color: '#555555' }} className='cardTitleService'>Matías <br /><span style={{ color: "#00B6AF" }}>Hernandez</span></p>
                        </div>
                        <div className='rolContainer'>
                            <div style={{ marginTop: 10 }}>
                                <p className={`${montserrat.className} rol`}>Tech Manager</p>
                                <hr />
                                <p className={`${montserrat.className} rolDescription`}>Colaboración en el desarrollo de soluciones y sitios webs tanto en el Frontend como en el Backend</p>
                            </div>
                            <div style={{ marginTop: 40 }}>
                                <Button as={Link} href='https://www.linkedin.com/in/matiashernandez00/' target='_blank' variant='solid' color='primary'>
                                    <p style={{ color: 'white' }}></p>
                                    <svg width={20} fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Linked</title> <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>
                                    <h1 className={montserrat.className} style={{ fontSize: 14, fontWeight: 600 }}>Matias Hernandez</h1>

                                </Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardEquipo" id='green'>
                        <div className='imageCardEquipo'>
                            <Image width={150} src={guille} alt='Guillermina Díaz' />
                            <p style={{ fontWeight: 'bolder', color: '#555555' }} className='cardTitleService' >Guillermina <br /><span style={{ color: "#FFFF" }}>Díaz</span></p>
                        </div>
                        <div className='rolContainer'>
                            <div style={{ marginTop: 10 }}>
                                <p className={`${montserrat.className} rol`} style={{ color: "white" }}>Desarrolladora Backend</p>
                                <hr />
                                <p className={`${montserrat.className} rolDescription`} style={{ color: "white" }}>Encargada del manejo de información y estructura de Bases de Datos</p>
                            </div>
                            <div style={{ marginTop: 40 }}>
                                <Button as={Link} href='https://www.linkedin.com/in/guillerminaadiaz/' target='_blank' variant='solid' color='primary'>
                                    <p style={{ color: 'white' }}></p>
                                    <svg width={20} fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Linked</title> <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>
                                    <h1 className={montserrat.className} style={{ fontSize: 14, fontWeight: 600 }}>Guillermina Diaz</h1>
                                </Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
