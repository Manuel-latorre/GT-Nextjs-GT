'use client'

import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import './Faqs.css'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '200']
})


export default function Faqs() {
  return (
    <div className={montserrat.className} style={{marginTop: 100}} id='faqs'>
      <p style={{textAlign:'center', fontSize:30, marginBottom:50}}>PREGUNTAS FRECUENTES</p>
      <div className="accordion">
        <Accordion variant="bordered" isCompact>
          <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="¿Cómo puedo ponerme en contacto con ustedes?">
            Podes contactarnos completando el formulario desde la sección de “contacto” o simplemente tocar en el botón de chat de nuestra página para hablar con un representante en tiempo real.
          </AccordionItem>
          <AccordionItem className="accordionItem" key="2" aria-label="Accordion 2" title="¿Cómo elijo mi servicio ideal?">
            Podes ver la descripción de cada servicio en la sección “servicios”, si no sabes cual es el mejor para tu empresa, envianos un email desde la sección de “contacto”o presiona el botón de chat para hablar con uno de nuestros representantes.
          </AccordionItem>
          <AccordionItem className="accordionItem" key="3" aria-label="Accordion 3" title="¿Puedo tener un pack personalizado?">
            Si, contactanos y te asesoramos para armar un pack personalizado según tus necesidades.
          </AccordionItem>
          <AccordionItem className="accordionItem" key="4" aria-label="Accordion 4" title="¿En cuanto tiempo tendré listo mi proyecto?">
            Depende. Según el servicio elegido, la complejidad del proyecto, y las funcionalidades se va a estipular un tiempo de entrega.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
