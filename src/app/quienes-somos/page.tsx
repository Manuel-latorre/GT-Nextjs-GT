import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import './QuienesSomos.css'


const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '200']
})



export default function QuienesSomos(){
    return(
        <div className={montserrat.className}>
            <p className='quienesSomos'>¿Quiénes Somos?</p>
            <div className='quienesSomos_descripcion'>
                <p>
                    Generación Tech, un equipo apasionado de jóvenes amantes de la tecnología, está aquí para transformar su visión en realidad a través del desarrollo de software y la gestión de canales digitales. Nos especializamos en ayudar a empresas a prosperar en el mundo digital en constante cambio, aportando creatividad y eficiencia a cada proyecto.
                </p>
            </div>
            <div className='quienesSomos_card_container' style={{marginTop:100}}>
                   <div className='quienesSomos_benef'>
                        <div className='quienesSomos_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>TECNOLOGÍA</p>
                        <p> En nuestra área de Tecnología en Generación Tech, nos dedicamos al diseño, creación, prueba y mantenimiento de software para sitios web y aplicaciones móviles, centrados en las perspectivas del mercado. Utilizamos metodologías ágiles para asegurar eficiencia y productividad, realizando revisiones constantes con nuestros clientes mediante la presentación de productos mínimos viables. Esto garantiza entregas a tiempo, la calidad de nuestros proyectos y la satisfacción de quienes confían en nuestros desarrollos personalizados.</p>
                        </div>
                        <div className='quienesSomos_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>INVESTIGACIÓN</p>
                        <p>En Generación Tech, nuestra área de Investigación es fundamental en cada proyecto. Evaluamos oportunidades de negocios, descubrimos las necesidades del mercado y ejecutamos propuestas con bases sólidas. Nuestros profesionales especializados en análisis de mercados y auditorías digitales relevan datos para fundamentar nuestras acciones.</p>
                        </div>
                        <div className='quienesSomos_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>PLANIFICACIÓN</p>
                        <p>En Generación Tech, la planificación es clave para desarrollar proyectos específicos y medibles. Nos enfocamos en objetivos, gestión eficiente de recursos y control de tiempos, costos y riesgos. Esto mejora la calidad de nuestros productos y servicios, facilita la comunicación, el seguimiento y eleva la satisfacción del cliente.</p>
                        </div>
                        <div className='quienesSomos_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>DESARROLLOS</p>
                        <p>Nuestros desarrollos son esenciales para la adaptabilidad y relevancia en un entorno cambiante. Permiten a las empresas satisfacer las necesidades de sus clientes, optimizar operaciones, introducir nuevos productos y explorar oportunidades de crecimiento, siendo fundamentales para la supervivencia y éxito a largo plazo en el mercado.</p>
                        </div>
                   </div>
                </div>

                <p className='frase'>Para Generación Tech una buena planificación es la clave del éxito.</p>
        </div>
    )
}