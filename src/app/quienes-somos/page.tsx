
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
                    Somos un apasionado grupo de jóvenes amantes de la tecnología que ha unido fuerzas para impulsar a las empresas hacia el futuro digital. Nuestro equipo vibra con la emoción de la innovación y está aquí para transformar su visión en realidad a través del desarrollo de software y la gestión de canales digitales.
                    En Generación Tech, no solo hablamos el lenguaje de la tecnología, ¡lo vivimos y lo respiramos! Estamos encantados de trabajar con empresas que buscan adaptarse y prosperar en el mundo digital en constante cambio. Nuestra misión es llevar la creatividad y la eficiencia a cada proyecto que emprendemos.
                </p>
            </div>
            <div className='quienesSomos_card_container' style={{marginTop:100}}>
                   <div className='quienesSomos_benef'>
                        <div className='quienesSomos_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>TECNOLOGÍA</p>
                            <p>Nuestra área de Tecnología representa la esencia fundacional de Generación Tech, aquí diseñamos, creamos, testeamos y mantenemos software para sitios web y aplicaciones móviles con perspectivas de mercados.
                            Implementamos metodologías ágiles para garantizar la productividad eficiente, realizando revisiones constantes con nuestros clientes mediante la presentación de productos mínimos viables, asegurando así, entregas a termino, la calidad de nuestros proyectos y la conformidad de quienes confían en nuestros desarrollos a medida.</p>
                        </div>
                        <div className='quienesSomos_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>INVESTIGACIÓN</p>
                            <p>Nuestra área de Investigación es la piedra fundamental de cada proyecto, desde aquí evaluamos oportunidades de negocios, tratando de descubrir las necesidades del mercado, para luego ejecutar propuestas con bases sólidas a partir de datos relevados por nuestros profesionales especialistas en análisis de mercados y auditorias digitales.</p>
                        </div>
                        <div className='quienesSomos_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>PLANIFICACIÓN</p>
                            <p>La planificación es vital para el desarrollo de proyectos específicos, medibles, alcanzables, relevantes y temporales. Siendo esta área la que traza objetivos, gestiona recursos, controla tiempos y costos, mitiga riesgos y mejora la calidad de nuestros productos y servicios. Nuestro equipo facilita la comunicación, permite el seguimiento y aumenta la satisfacción de nuestros clientes.</p>
                        </div>
                        <div className='quienesSomos_card'>
                            <p style={{margin:20, color:'cyan', fontSize:20, textAlign:'center'}}>DESARROLLOS</p>
                            <p>La importancia de nuestros desarrollos radica en la capacidad para mantenernos competitivos y relevantes en un entorno en constante evolución. Nuestros desarrollos permiten a las empresas adaptarse a las necesidades cambiantes de sus clientes, optimizar sus operaciones internas, introducir nuevos productos y servicios, y explorar oportunidades de crecimiento.
                                Para nosotros, los desarrollos empresariales son fundamentales para la supervivencia y el éxito a largo plazo de una empresa en un mercado en constante cambio.</p>
                        </div>
                   </div>
                </div>

                <p className='frase'>Para Generación Tech una buena planificación es la clave del éxito.</p>
        </div>
    )
}