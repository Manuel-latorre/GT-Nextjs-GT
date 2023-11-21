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
                    Depende del propósito, el público y el presupuesto de su proyecto web. Puede optar por un diseño web a medida, que implica una programación desde cero, o por un CMS, que es un sistema de gestión de contenidos ya existente, como WordPress.
                </AccordionItem>
                <AccordionItem className="accordionItem" key="2" aria-label="Accordion 2" title="¿Cómo se determina el costo del proyecto web?">
                    El costo se basa en la complejidad, el tiempo y los recursos necesarios para desarrollar la página web. También se consideran los servicios adicionales que se requieren, como el alojamiento, el dominio, el SEO, el SEM, etc.
                </AccordionItem>
                <AccordionItem className="accordionItem" key="3" aria-label="Accordion 3" title="¿Qué beneficios obtengo al contratar Generación Tech?">
                    Contratar Generación Tech, es garantía de calidad, seguridad y confianza, porque contamos con un equipo de  profesionales certificados en tecnologías digitales y egresados universitarios especialistas en auditorias, análisis de mercados y comercio electrónico. Desde esta realidad integramos y contamos con la experiencia de un equipo multidisciplinario que lo asesorará y acompañará durante todo el proceso de servicios.
                </AccordionItem>
                <AccordionItem className="accordionItem" key="4" aria-label="Accordion 3" title="¿Cómo puedo medir el éxito de mi comercio electrónico y mis estrategias de marketing digital?">
                    Puede medir el éxito de su comercio electrónico y sus estrategias de marketing digital mediante indicadores o métricas que le permitan evaluar el rendimiento y el retorno de la inversión (ROI) de sus acciones. En Generación Tech trabajamos con herramientas avanzadas que nos permiten medir todo tipo de métricas para evaluar el comportamiento de los usuarios en su sitio, midiendo sus visitas y aplicando estrategias de mejoras
                </AccordionItem>
            </Accordion>
        </div>

    </div>
  );
}
