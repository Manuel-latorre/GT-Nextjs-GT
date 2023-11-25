import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './Providers'
import Navbar from '@/components/Navbar/Navbar'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import { Montserrat } from 'next/font/google'
import Footer from '@/app/Footer/Footer'
import Head from 'next/head';

const montserrat = Montserrat({
  subsets:['latin'],
  weight:['700', '500', '200']
})

export const metadata: Metadata = {
  title: 'Generación Tech',
  icons:{ icon:['/favicon.ico?v=4'],
  apple:['/apple-touch-icon.png?v=4'],
  shortcut:['/apple-touch-icon.png']
  },
  manifest: 'site/webmanifest'
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
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
          <ScrollToTop/>
          {children}
          <Footer/>
        </Providers>
        </body>
    </html>
  )
}
