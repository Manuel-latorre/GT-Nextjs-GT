import AboutUs from '@/components/AboutUs/AboutUs'
import ContactoFaqs from '@/components/Faqs/ContactoFaqs'
import Faqs from '@/components/Faqs/Faqs'

import Contacto from "@/components/Contacto/Contacto"


import { Montserrat } from 'next/font/google'
import Servicios from '@/components/Servicios/Servicios'

const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '200']
})


export default function Home() {
  return (
    <div className={montserrat.className}>
      <AboutUs/>
      <Servicios/>
      <ContactoFaqs/>
      <Faqs/>
      <Contacto/>
    </div>
  )
}
