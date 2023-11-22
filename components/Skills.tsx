"use client"

import React from 'react'
import SectionHeading from '@/components/Section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hook'
import { motion } from 'framer-motion'

const fadeInAnimation = {
  initial: { opacity: 0, y: 100},
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('Compétences')
  
  return (
    <section
        id="skills"
        ref={ref} 
        className='mb-28 max-w-[50rem] scroll-mt-60 text-center sm:mb-60 sm:mt-20'>
        <SectionHeading>Mes compétences</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill, index) => (
                    <motion.li 
                      key={index} 
                      variants={fadeInAnimation}    
                      initial='initial'
                      animate='animate'
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={index}
                      className='bg-white borderBlack rounded-xl px-6 py-3 dark:bg-white/10 dark:text-white/80'>
                          {skill}
                    </motion.li>
                ))}
        </ul>
    </section>
  )
}
