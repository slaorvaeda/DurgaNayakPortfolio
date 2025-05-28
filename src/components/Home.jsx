import React from 'react'
import Hero from './home/Hero'
import HeroSlider from './home/HeroSlider'
import DirContainer from './home/DirContainer'
import Scene from './Scene'

function Home() {
  return (
    <>
      <div className="overflow-hidden md:overflow-visible"> 
        <Hero />
        <HeroSlider />
        <Scene />
        <DirContainer />
      </div>


    </>
  )
}

export default Home