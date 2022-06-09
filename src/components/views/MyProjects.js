import Projects from 'components/MainPage/Projects'
import React from 'react'
import {Helmet} from "react-helmet";

export default function MyProjects() {
  return (
    <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Projelerim | Eren Yalçın</title>
            </Helmet>
        <Projects />
    </div>
  )
}
