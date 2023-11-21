import AboutUs from '@/app/AboutUs/AboutUs'
import ContactoFaqs from '@/app/Faqs/ContactoFaqs'
import Faqs from '@/app/Faqs/Faqs'
import Contacto from "@/components/Contacto/Contacto"
import Servicios from '@/app/Servicios/Servicios'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '200']
})

export default function Home() {
  return (
    <div className={montserrat.className}>
      <AboutUs/>
      <Servicios/>
      <Faqs/>
      <ContactoFaqs/>
      <Contacto/>
    </div>
  )
}
