"use client"

import React from 'react'
import SectionHeading from './Section-heading'
import Project from "./Project"
import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hook'

export default function Projects() {
  const { ref } = useSectionInView('Projets', 0.5)

  return (
    <section ref={ref} id="projects" className='scroll-mt-28 mb-28'>
        <SectionHeading>Mes Projets</SectionHeading>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
            ))}
        </div>
    </section> 
  )
}
