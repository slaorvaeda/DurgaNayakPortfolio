import React, { useEffect, useState } from 'react'

function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

function AboutMe() {
    const [fontFamily, setFontFamily] = useState("cursive");

  useEffect(() => {
    if (isAndroid()) {
      setFontFamily("'Kapakana', sans-serif"); 
    }
  }, []);

  return (
    <>
      <h1 className='text-4xl pt-18 w-full text-center md:mt-10'>aBOUT mE ;)</h1>
      <div className="w-3/4 flex flex-wrap justify-around items-center m-auto gap-4 mt-4">
        <div className="text-center text-[150px]  md:text-[150px] text-6xl md:h-50 h-32" style={{ fontFamily }}> I</div>
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