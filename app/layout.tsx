import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/Theme-context'
import ActiveSectionContextProvider from '@/context/Active-section-context'
import { Toaster } from 'react-hot-toast'

import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Titouan | Développeur JS',
  description: 'Titouan est un développeur Javascript React / NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
      <div className='bg-[#fbe2e3] absolute top-24 right-44 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10 dark:bg-[#946263]'></div>
      <div className='bg-[#dbd7fb] absolute top-24 right-44 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] lg:left-[-28rem] xl:left-[-15rem] 2xl-[-5rem] -z-10 dark:bg-[#676394]'></div>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <ThemeSwitch />
          <Toaster position='top-right'/>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
      </body>
    </html>
  ) 
}
