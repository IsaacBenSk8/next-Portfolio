import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Providers from './providers'
import Header from '@/components/header'

const poppins = Poppins({weight: ['100', '200', '300', '400', '500', '600', '700', '800' ,'900'], subsets: ['latin'] }, )

export const metadata: Metadata = {
  title: 'Isaac FC - Full Stack Developer',
  description: `Hi, I'm Isaac and welcome to my portfolio! I just started my journey in the code universe this year and I'm glad that you are here. I'm also looking to get my first job as a developer and building my portfolio is a great opportunity to show my capabilities, and for that, I'm constantly upgrading my projects for a better experience :). Enjoy!`,
}

export default function RootLayout({children}: {
  children: React.ReactNode,
}) {

  return (
    <html
    className="light"
    translate="no"
    lang="en"
    style={{colorScheme: 'light'}}
    suppressHydrationWarning>
      
      <body 
      id="homeSection" 
      className={`${poppins.className} flex flex-col items-center bg-top bg-no-repeat text-gray-900 dark:text-white bg-slate-200  dark:bg-zinc-900 
      xsm:bg-phone xl:bg-lights relative`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
