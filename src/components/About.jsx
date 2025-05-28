import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutMe from './about/AboutMe'

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up">
      <AboutMe />
    </div>
  )
}

export default About