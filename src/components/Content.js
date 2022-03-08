import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import About from './MainPage/About'
import HeroSection from './MainPage/HeroSection'
import Projects from './MainPage/Projects'
import Contact from './views/Contact'
import Hakkimda from './views/Hakkimda'
import MyProjects from './views/MyProjects'

export default function Content() {
  return (
    <div>
      <Switch>
        
        <Route exact path={"/"}>
        <HeroSection />
        <About />
        <Projects />
        </Route>

        <Route path={"/hakkimda"}>
          <Hakkimda />
        </Route>

        <Route path={"/projelerim"}>
          <MyProjects />
        </Route>

        <Route path={"/iletisim"}>
          <Contact />

        </Route>
      </Switch>

    </div>
  )
}
