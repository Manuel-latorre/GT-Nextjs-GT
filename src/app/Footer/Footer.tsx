
import logo from '../../assets/logo.png'
import Image from 'next/image'
import './Footer.css'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'


const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '200']
})

const Footer = () => {
  return (
    <div className={montserrat.className}>
      <div className='containerFooter'>
        <div className="sectionContainerF">
          <div className="linksContainerFooter">
            <h3 style={{fontSize:20, fontWeight:'bold'}}>Links</h3>
            <div className="linksFooter">
                <a style={{padding:4}} href='/'>Inicio</a>
                <a style={{padding:4}} href='nosotros'>Nostros</a>
                <a style={{padding:4}} href='/#servicios'>Servicios</a>
                <a style={{padding:4}} href='/#faqs'>FAQs</a>
                <a style={{padding:4}} href='/#nuestroEquipo'>Nuestro equipo</a>
                <a style={{padding:4}} href='/#contacto'>Contacto</a>
            </div>
          </div>
          <div className="contacto">
            <h3 style={{fontSize:20, fontWeight:'bold'}}>Contacto</h3>
            <div className="contact">
                <svg width={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="email"> <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z" fill="#00fffb"></path> </g> </g> </g></svg>
                <p style={{marginLeft:10}}>generaciontech.gt@gmail.com</p>
            </div>

            <div className="contact">
              <Link style={{display:'flex', alignItems:'center'}} href="https://wa.me/541150034462?text=¡Hola%20Generacion%20Tech!%20Me%20gustaría%20saber%20acerca%20de..." target="_blank">
                <svg width={40} fill="#00fffb" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path></g></svg>
                <p style={{marginLeft:10}}>+54 11 5003 4462</p>
              </Link>
            </div>

            <div className="contact">
              <svg width={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.1819 10.1818C20.1819 16.5455 12.0001 22 12.0001 22C12.0001 22 3.81824 16.5455 3.81824 10.1818C3.81824 8.01187 4.68025 5.93079 6.21464 4.3964C7.74902 2.86201 9.8301 2 12.0001 2C14.17 2 16.2511 2.86201 17.7855 4.3964C19.3199 5.93079 20.1819 8.01187 20.1819 10.1818Z" stroke="#00fffb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0001 12.9091C13.5063 12.9091 14.7274 11.688 14.7274 10.1818C14.7274 8.67559 13.5063 7.45454 12.0001 7.45454C10.4939 7.45454 9.27283 8.67559 9.27283 10.1818C9.27283 11.688 10.4939 12.9091 12.0001 12.9091Z" stroke="#00fffb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>     
                <p style={{marginLeft:10}}>Buenos Aires, Argentina</p>
            </div>
          </div>
          <div className="redesContainerFooter">
            <h3 style={{fontSize:20, fontWeight:'bold'}}>Redes</h3>

              <div className="linkedinContainer">
                
              <Link style={{display:'flex', alignItems:'center'}} href='https://www.linkedin.com/in/generaci%C3%B3n-tech-50b2a529b/' target='_blank'>
                <svg width={30} fill="#00fffb" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin</title> <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>              
                <p style={{marginLeft:10}}>Linkedin</p>
              </Link>
              </div>

              <div className="linkedinContainer">
                <Link style={{display:'flex', alignItems:'center'}} href='https://www.instagram.com/generaciontech.gt/' target='_blank'>
                  <svg width={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.65 7.2H16.66M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z" stroke="#00fffb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  <p style={{marginLeft:10}}>Instagram</p>
                </Link>
              </div>

              <div className="linkedinContainer">
                <Link style={{display:'flex', alignItems:'center'}} href='https://www.facebook.com/profile.php?id=61550779187103&locale=es_LA' target='_blank'>
                <svg width={40} fill="#00fffb" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>facebook</title> <path d="M1.188 5.594h18.438c0.625 0 1.188 0.563 1.188 1.188v18.438c0 0.625-0.563 1.188-1.188 1.188h-18.438c-0.625 0-1.188-0.563-1.188-1.188v-18.438c0-0.625 0.563-1.188 1.188-1.188zM14.781 17.281h2.875l0.125-2.75h-3v-2.031c0-0.781 0.156-1.219 1.156-1.219h1.75l0.063-2.563s-0.781-0.125-1.906-0.125c-2.75 0-3.969 1.719-3.969 3.563v2.375h-2.031v2.75h2.031v7.625h2.906v-7.625z"></path> </g></svg>
                    <p style={{marginLeft:10}}>Facebook</p>
                </Link>
              </div>
          </div>
        </div>
        <div className="terminosFooter">
          <p>© 2023 Generacion Tech. Todos los derechos reservados. El contenido, diseño y gráficos de este sitio web están protegidos por las leyes de derechos de autor y propiedad intelectual. Queda estrictamente prohibida la reproducción, distribución, transmisión, modificación o uso no autorizado de cualquier parte de este sitio sin el consentimiento previo por escrito de Generacion Tech. Generacion Tech se reserva el derecho de tomar las medidas legales necesarias en caso de violación de estos derechos. Todas las marcas comerciales mencionadas en este sitio son propiedad de sus respectivos dueños. Cualquier uso no autorizado del contenido de este sitio web puede estar sujeto a acciones legales. Para obtener permisos o realizar consultas sobre el uso del contenido de Generacion Tech, por favor, póngase en contacto a través de generaciontech.gt@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer