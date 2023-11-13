import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './Providers'
import Navbar from '@/components/Navbar/Navbar'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '200']
})

export const metadata: Metadata = {
  title: 'Generación Tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Navbar/>
          <ScrollToTop/>
          {children}
          <Footer/>
        </Providers>
        </body>
    </html>
  )
}
