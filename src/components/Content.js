import React from 'react'
import About from './MainPage/About'
import HeroSection from './MainPage/HeroSection'
import Projects from './MainPage/Projects'

export default function Content() {
  return (
    <div>
      <HeroSection />
      <About />
      <Projects />
    </div>
  )
}
