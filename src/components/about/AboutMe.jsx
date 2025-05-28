import React from 'react'

function AboutMe() {
  return (
    <>
    <h1 className='text-4xl pt-18 w-full text-center md:mt-10'>aBOUT mE ;)</h1>
    <div className="w-3/4 flex flex-wrap justify-around items-center m-auto gap-4 mt-4">
        <div className="h-50 text-center text-[150px]" style={{fontFamily : 'cursive'}}> I</div>
        <div className="w-3/4 ">
        Hi! I'm Priyanshu Nayak, a passionate full-stack developer and technology enthusiast. I specialize in building modern, responsive web and mobile applications that deliver seamless user experiences. With a strong foundation in both frontend and backend technologies, I enjoy solving complex problems and bringing creative ideas to life through code.
        <br /><br />
        My journey in tech started with curiosity and a love for learning. Over the years, I've worked with a variety of frameworks and tools, including React, Node.js, Express, and more. I believe in writing clean, efficient code and continuously improving my skills to stay ahead in this ever-evolving field.
        <br /><br />
        When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or connecting with like-minded professionals. I'm always eager to take on new challenges and collaborate on exciting projects!
        </div>
    </div>
    </>
  )
}

export default AboutMe