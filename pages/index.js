import { FullPage, Slide } from "react-full-page/lib"

import Start from '../components/Start';
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Contact from "../components/Contact";


export default function Home() {
  
  return (
    <div>
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide>
          <Start/>
        </Slide>
        <Slide>
          <AboutMe/>
        </Slide>
        <Slide>
          <Skills/>
        </Slide>
        <Slide>
          <Projects/>
        </Slide>
        <Slide>
          <Contact/>
        </Slide>
      </FullPage>
    </div>
  )
}
