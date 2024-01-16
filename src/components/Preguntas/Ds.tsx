import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import './PreguntasFrecuentes.css'
import '../../app/Faqs/Faqs.css'

export default function PreguntasFrecuentesDs() {

  return (
    <div>
        <p style={{textAlign:'center', fontSize:30, marginBottom:50}}>PREGUNTAS FRECUENTES</p>
        <div className="accordion_preguntas">
            <Accordion variant="bordered">
                <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="¿Qué tipo de página web necesito?">
                      La elección entre un diseño web a medida, que implica una programación desde cero, o un CMS (sistema de gestión de contenidos) como WordPress, depende del propósito, público y presupuesto de su proyecto web.
                </AccordionItem>
                <AccordionItem className="accordionItem" key="2" aria-label="Accordion 2" title="¿Cómo se determina el costo del proyecto web?">
                      El costo de desarrollo de la página web se determina según la complejidad, el tiempo y los recursos necesarios. También se consideran servicios adicionales como alojamiento, dominio, SEO, SEM, entre otros.
                </AccordionItem>
                <AccordionItem className="accordionItem" key="3" aria-label="Accordion 3" title="¿Qué beneficios obtengo al contratar Generación Tech?">
                      Contratar Generación Tech garantiza calidad, seguridad y confianza. Nuestro equipo está compuesto por profesionales certificados en tecnologías digitales y especialistas universitarios en auditorías, análisis de mercados y comercio electrónico. Contamos con la experiencia de un equipo multidisciplinario que lo asesorará y acompañará durante todo el proceso de servicios.
                </AccordionItem>
                <AccordionItem className="accordionItem" key="4" aria-label="Accordion 3" title="¿Cómo puedo medir el éxito de mi comercio electrónico y mis estrategias de marketing digital?">
                      Puede evaluar el éxito de su comercio electrónico y estrategias de marketing digital mediante indicadores o métricas que midan el rendimiento y el retorno de la inversión (ROI). En Generación Tech utilizamos herramientas avanzadas para medir diversas métricas, evaluando el comportamiento de los usuarios en su sitio, registrando visitas y aplicando estrategias de mejora.
                </AccordionItem>
            </Accordion>
        </div>

    </div>
  );
}
