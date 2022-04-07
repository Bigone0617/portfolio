import { FullPage, Slide } from "react-full-page/lib";
import { useState } from "react";


import Start from '../components/Start';
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Projects_m from "../components/Projects_m";
import Contact from "../components/Contact";


export default function Home() {
  const [device, setDevice] = useState('p');
  function device_check (){
    if(typeof window == 'object'){
      if(window.innerWidth <= 768){
        setDevice('m');
      }
    }
  }
  setInterval(device_check, 10000);
  
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
          {
            device === "p" ? (
              <Projects/>
            ) : (
              <Projects_m/>
            )
          }
        </Slide>
        <Slide>
          <Contact/>
        </Slide>
      </FullPage>
    </div>
  )
}
