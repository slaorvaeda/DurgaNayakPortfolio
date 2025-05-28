import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Service() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='md:p-18 py-18'>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6"> services</h1>
        <p className="text-lg text-gray-600 mb-12">We offer a range of services to help you achieve your goals.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white/20 p-6 rounded-lg shadow-md backdrop-blur-sm" data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-4">Web Development</h2>
          <p className="text-gray-700">Building responsive and modern websites tailored to your needs.</p>
        </div>
        <div className="bg-white/20 p-6 rounded-lg shadow-md backdrop-blur-sm" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xl font-semibold mb-4">Mobile App Development</h2>
          <p className="text-gray-700">Creating user-friendly mobile applications for iOS and Android.</p>
        </div>
        <div className="bg-white/20 p-6 rounded-lg shadow-md backdrop-blur-sm" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-xl font-semibold mb-4">UI/UX Design</h2>
          <p className="text-gray-700">Designing intuitive and engaging user interfaces for better user experience.</p>
        </div>
        <div className="bg-white/20 p-6 rounded-lg shadow-md backdrop-blur-sm" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-xl font-semibold mb-4">Frontend Development</h2>
          <p className="text-gray-700">Crafting interactive and visually appealing user interfaces using modern frameworks like React, Vue, or Angular.</p>
        </div>
        <div className="bg-white/20 p-6 rounded-lg shadow-md backdrop-blur-sm" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-xl font-semibold mb-4">Backend Development</h2>
          <p className="text-gray-700">Building robust server-side applications, APIs, and databases with Node.js, Express, Django, or other technologies.</p>
        </div>
      </div>
    </div>
  )
}

export default Service