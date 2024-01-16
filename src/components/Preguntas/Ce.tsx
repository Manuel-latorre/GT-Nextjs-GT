import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import './PreguntasFrecuentes.css'
import '../../app/Faqs/Faqs.css'

export default function PreguntasFrecuentesCe() {

  return (
    <div>
        <p style={{textAlign:'center', fontSize:30, marginBottom:50}}>PREGUNTAS FRECUENTES</p>
    <div className="accordion_preguntas">
        <Accordion variant="bordered">
            <AccordionItem className="accordionItem" key="1" aria-label="Accordion 1" title="¿Qué es el comercio electrónico y cómo funciona?">

                      El comercio electrónico implica la venta y compra de productos o servicios a través de internet. Se realiza mediante una plataforma web que exhibe productos o servicios, procesa pedidos, recibe pagos y gestiona entregas.
            </AccordionItem>
            <AccordionItem className="accordionItem" key="2" aria-label="Accordion 2" title="¿Qué ventajas tiene el comercio electrónico para mi empresa?">
                      El comercio electrónico posibilita la expansión del mercado potencial, la reducción de costos operativos, el aumento de la competitividad, la mejora de la comodidad y satisfacción del cliente, además de proporcionar datos valiosos sobre comportamientos y preferencias.
            </AccordionItem>
            <AccordionItem className="accordionItem" key="3" aria-label="Accordion 3" title="¿Qué estrategias de marketing digital puedo aplicar para impulsar mi comercio electrónico?">
                      En su comercio electrónico, utilice estrategias de marketing digital como SEO, contenido de calidad, redes sociales, publicidad online, e-mail marketing y videos para atraer, convertir y fidelizar clientes. En Generación Tech, tenemos un equipo especializado en campañas de marketing adaptadas a los comportamientos de los usuarios.
            </AccordionItem>
        </Accordion>
    </div>
    </div>
  );
}
