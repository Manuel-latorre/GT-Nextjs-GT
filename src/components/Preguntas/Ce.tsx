import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import './PreguntasFrecuentes.css'

export default function PreguntasFrecuentesCe() {

  return (
    <div className="accordion_preguntas">
        <Accordion variant="bordered">
            <AccordionItem key="1" aria-label="Accordion 1" title="¿Qué es el comercio electrónico y cómo funciona?">
                El comercio electrónico es la venta y compra de productos o servicios a través de internet. Funciona mediante una plataforma web que permite mostrar los productos o servicios, procesar los pedidos, recibir los pagos y gestionar las entregas.
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="¿Qué ventajas tiene el comercio electrónico para mi empresa?">
                El comercio electrónico le permite ampliar su mercado potencial, reducir sus costos operativos, mejorar su competitividad, ofrecer una mayor comodidad y satisfacción a sus clientes, y obtener datos e información valiosa sobre su comportamiento y preferencias.
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="¿Qué estrategias de marketing digital puedo aplicar para impulsar mi comercio electrónico?">
                Puede aplicar diversas estrategias de marketing digital para atraer, convertir y fidelizar a sus clientes en su comercio electrónico, como: optimizar su sitio web para los motores de búsqueda (SEO), crear contenido de calidad  para su audiencia, utilizar las redes sociales para generar interacción y confianza, hacer publicidad online en plataformas como Google Ads o Facebook Ads. Implementar E-mail marketing para comunicarse con sus clientes y ofrecerles ofertas de forma más personalizada  y utilizar el video como un formato atractivo y efectivo para mostrar sus productos o servicios.
                En Generación Tech contamos con un área especializada en la realización de todo tipo de campaña de Marketing, adaptando constantemente los objetivos al comportamiento de los usuarios.
            </AccordionItem>
        </Accordion>
    </div>
  );
}
