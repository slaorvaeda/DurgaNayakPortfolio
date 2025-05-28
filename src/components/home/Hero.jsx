import React, { useEffect } from 'react'
import durga from '../../assets/imgs/fevicon.png'


function Hero() {

    return (
        <>
            <div className="w-full h-[95vh] md:h-[90vh] flex items-center justify-center mt-10">
                <div className="row">
                    <div className="md:flex justify-center items-center ">
                        <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="2000" className="w-[70%] md:w-[50%] text-center sun flex flex-col justify-center items-cente m-auto text-lg 
                        ">
                            <h1 className='text-3xl md:mt-[8vh] w-[70%] font-semibold text-center m-auto mb-6' >HELLO <br /> I'M DURGA MADHAB</h1>
                            I’m a passionate developer turning ideas into fast, powerful digital products. I craft clean, modern websites and apps that deliver impact, style, and performance.
                            
                            <b>"Creative mind. Clean code. Powerful digital experiences"</b>
                            <h2 className='m-5'>
                                <i className="fa-solid fa-bolt text-3xl"></i>
                                <i className="text-3xl fa-sharp fa-solid fa-dice-d6"></i>
                                <i className="text-3xl fa-brands fa-studiovinari"></i>
                                <i className="text-3xl fa-sharp fa-solid fa-wand-magic-sparkles"></i>
                                <i className="text-3xl fa-sharp fa-solid fa-face-awesome"></i>
                                <i className="text-3xl fa-sharp fa-solid fa-fingerprint"></i>
                            </h2>
                        </div>
                        <div className="w-[60%] md:w-[30%] m-auto " data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" data-aos-offset="110"
                                data-aos-duration="2000">
                            <img src={durga} alt="HELLO"  />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero