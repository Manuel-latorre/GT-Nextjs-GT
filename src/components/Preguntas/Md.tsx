import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import './PreguntasFrecuentes.css'
import '../../app/Faqs/Faqs.css'

export default function PreguntasFrecuentesMd() {

  return (
    <div className="accordion_preguntas">
        <Accordion variant="bordered">
            <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="¿Qué beneficios tiene el marketing digital para mi empresa?">
                El marketing digital le permite aumentar la visibilidad y el alcance de su marca, generar interacción y atraer nuevos clientes, crear una ventaja competitiva frente a su competencia, determinar e identificar su público objetivo y medir el éxito y el retorno de su inversión.
            </AccordionItem>
            <AccordionItem className="accordionItem" key="2" aria-label="Accordion 2" title="¿Qué estrategia de marketing digital es la más adecuada para mi empresa?">
                Depende de los objetivos, el presupuesto y el sector de su empresa. En Generación Tech podemos ayudarlo a diseñar un plan de mkt y una propuesta personalizada que se adapte a sus necesidades y expectativas, utilizando las herramientas y los canales más convenientes.
            </AccordionItem>
            <AccordionItem className="accordionItem" key="3" aria-label="Accordion 3" title="¿Qué beneficios obtengo al contratar Generación Tech?">
                Al contratar Generación Tech, obtendrá la garantía de un trabajo profesional, eficiente y de calidad. Además, cuentas con el apoyo y la experiencia de un equipo multidisciplinario que lo asesorará y lo acompañará en todo el proceso.
            </AccordionItem>
            <AccordionItem className="accordionItem" key="3" aria-label="Accordion 3" title="¿Qué tipo de contenido debo generar para mi página web y mis redes sociales?">
                El contenido que genere debe ser relevante, original, atractivo y de valor para su audiencia. Debe responder a los  intereses y necesidades de los potenciales clientes. Estos contenidos deben estar optimizado para los motores de búsqueda (SEO) y adaptado al formato y al tono de cada medio.
            </AccordionItem>
        </Accordion>
    </div>
  );
}
