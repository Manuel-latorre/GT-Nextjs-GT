import React from 'react'
import Faqs from '../../components/Lotties/Faqs'
import './ContactoFaqs.css'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '200']
})

const ContactoFaqs = () => {
  return (
    <div className={montserrat.className} id='faqs'>
        <div className='container-faqs-solucion'>
            <div className='container-texto-faqs'>
                <p className='titulo-faqs'>¿No encontraste la respuesta que buscabas?</p>
                <p style={{fontSize:20}}>Podes contactarnos completando el formulario desde la sección de <a className='btnContactoFaqs' href="https://wa.me/541150034462?text=¡Hola%20Generacion%20Tech!%20Me%20gustaría%20saber%20acerca%20de..." target="_blank">CONTACTO</a> o simplemente tocar en el botón de chat de nuestra página para hablar con un representante en tiempo real.</p>
                <div style={{marginTop:40, marginBottom:20}}>
                    <a href="https://wa.me/541150034462?text=¡Hola%20Generacion%20Tech!%20Me%20gustaría%20saber%20acerca%20de..." target="_blank" className='btnAsesor'>Hablar con un asesor</a>
                </div>
            </div>
            <div className='container-lottie-faqs'>
                <Faqs/>
            </div>
        </div>
    </div>
  )
}

export default ContactoFaqs