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
    <div className='AboutTexting'> 
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
        <h2 className={`${montserrat.className} quienesSomos`}>¿QUIÉNES <span style={{color:"#00FFFC"}}>SOMOS?</span></h2>
        <p style={{margin:20}}>
        Somos un apasionado grupo de jóvenes amantes de la tecnología que ha unido fuerzas para impulsar a las empresas hacia el futuro digital. Nuestro equipo vibra con la emoción de la innovación y está aquí para transformar su visión en realidad a través del desarrollo de software y la gestión de canales digitales. En Generación Tech, no solo hablamos el lenguaje de la tecnología, ¡lo vivimos y lo respiramos! Estamos encantados de trabajar con empresas que buscan adaptarse y prosperar en el mundo digital en constante cambio. Nuestra misión es llevar la creatividad y la eficiencia a cada proyecto que emprendemos.
        </p>
        <cite style={{color:"#00FFFC"}}>“Para Generación Tech una buena planificación es la clave del éxito.”</cite>
        <button className='botonAbout'>Leer más</button>
    </div>
    </div>
  )
}

export default Quien