"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hook'
import { useActiveSectionContext } from '@/context/Active-section-context'
 
export default function Intro() {
  const { ref } = useSectionInView('Accueil', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
    ref={ref}
    id="home" 
    className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>

        <div className='relative mb-[1.5rem]'>
          <motion.div
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.2
            }}
          >
            <Image 
            src="/profile_picture.png" 
            alt="Portrait de titouan"
            width="220"
            height="220"
            quality="95"
            priority={true}
            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl filter drop-shadow-md'
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Salut, je m&apos;appelle Titouan.</span> Je suis un{" "}
        <span className="font-bold">développeur Front End</span> travaillant
        principalement en <span className="font-bold">TypeScript</span> sur des projets{" "}
        <span className="font-bold">React et Next.js</span>. J&apos;explore le monde passionnant
        du développement web et j&apos;aime créer des <span className="italic">sites et applications</span>.
        Mon focus actuel est sur <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y : 0}}
        transition={{ delay: 0.1}}
      >
          <Link href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition filter drop-shadow-md"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
          >
            Contactez-moi{" "}<BsArrowRight 
            className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 filter drop-shadow-md dark:bg-white/10' href="/CV.pdf" download={true}>
            Télécharger mon CV <HiDownload 
            className="opacity-60 group-hover:translate-y-1" />
          </a>

          <a className='bg-white p-4 text-gray-700 px-8 py-5 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 filter drop-shadow-md dark:bg-white/10 dark:text-white/60' href="https://www.linkedin.com/in/titouan-goubet-a1a3772a0/" target="_blank">
            <BsLinkedin />
          </a>

          <a className='bg-white p-4 text-gray-700 px-8 py-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15]       hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 filter drop-shadow-md dark:bg-white/10 dark:text-white/60' href="https://github.com/Titouan-Goubet" target="_blank">
            <FaGithubSquare />
          </a>
          
      </motion.div>
    </section>
  )
}
