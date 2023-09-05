import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Providers from './providers'
import Header from '@/components/header'

const poppins = Poppins({weight: ['100', '200', '300', '400', '500', '600', '700', '800' ,'900'], subsets: ['latin'] }, )

export const metadata: Metadata = {
  title: 'Isaac FC',
  description: 'Portfolio of Isaac FC',
}

export default function RootLayout({children}: {
  children: React.ReactNode,
}) {

  return (
    <html
    className="light"
    translate='no'
    lang="en"
    style={{colorScheme: 'light'}}
    suppressHydrationWarning>
      
      <body 
      id="homeSection" 
      className={`${poppins.className} flex flex-col items-center bg-top bg-no-repeat text-gray-900 dark:text-white bg-slate-200 2xl:bg-lights dark:bg-zinc-900 
      xsm:bg-phone relative`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
