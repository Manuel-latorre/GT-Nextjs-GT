import React from 'react'

import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import './QuienesSomos.css'

const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '400','200']
})


function Quien() {
  return (
    <div className='AboutTexting' id='WHO'> 
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center" }} className='containerFull'>
        <h2 className={`${montserrat.className} quienesSomos`}>¿QUIÉNES <span style={{color:"#00FFFC"}}>SOMOS?</span></h2>
        <div className='quienContainer'>

        <p style={{margin:20}}>
          En Generación Tech, un equipo apasionado de jóvenes amantes de la tecnología trabaja para impulsar a las empresas hacia el futuro digital. Nos emociona la innovación y estamos aquí para convertir su visión en realidad mediante el desarrollo de software y la gestión de canales digitales. No solo hablamos el lenguaje de la tecnología, ¡lo vivimos y lo respiramos! Estamos encantados de colaborar con empresas que buscan prosperar en el mundo digital en constante cambio, llevando creatividad y eficiencia a cada proyecto que emprendemos.
        </p>
        </div>
        <cite style={{color:"#00FFFC"}} className='cita'>“Para Generación Tech una buena planificación es la clave del éxito.”</cite>
    </div>
    </div>
  )
}

export default Quien