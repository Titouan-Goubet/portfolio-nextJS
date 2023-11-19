import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Titouan | Développeur JS',
  description: 'Titouan est un développeur javascript React / NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px]`}>
      <Header />
      {children}
      <div className='bg-[#fbe2e3] absolute top-24 right-44 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
      <div className='bg-[#dbd7fb] absolute top-24 right-44 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] lg:left-[-28rem] xl:left-[-15rem] 2xl-[-5rem]'></div>
      </body>
    </html>
  )
}
