import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import About from './MainPage/About'
import HeroSection from './MainPage/HeroSection'
import Projects from './MainPage/Projects'
import Contact from './views/Contact'
import Hakkimda from './views/Hakkimda'
import MyProjects from './views/MyProjects'

import { Fade } from "react-awesome-reveal";
import Skills from './MainPage/skills'


export default function Content({isDarkMode}) {

  return (
    <div className='overflow-x-hidden'>
      <Switch>
        
       <Route exact path={"/"}>
       <Fade triggerOnce direction="up" delay={1000} >
        <HeroSection  isDarkMode={isDarkMode}/>
        </Fade>
        <Fade triggerOnce delay={1000} direction="up" damping={1}>
        <About isDarkMode={isDarkMode}/>
        </Fade>
        
 
        <Fade triggerOnce delay={500} direction="up" damping={1}>

        <Projects />
        </Fade>
        </Route>

        <Route path={"/hakkimda"}>
        <Fade triggerOnce delay={500} direction="up" damping={1}>

          <Hakkimda />
          </Fade>
        </Route>

        <Route path={"/projelerim"}>
        <Fade triggerOnce delay={500} direction="up" damping={1}>

          <MyProjects />
          </Fade>
        </Route>

        <Route path={"/iletisim"}>
        <Fade triggerOnce delay={500} direction="up" damping={1}>

          <Contact />
          </Fade>
        </Route>
      
      </Switch>

    </div>
  )
}
