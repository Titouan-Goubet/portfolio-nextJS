import Image from 'next/image'
import Intro from '@/components/Intro'
import SectionDivider from '@/components/Section-divider'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
