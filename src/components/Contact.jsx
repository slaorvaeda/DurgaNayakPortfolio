import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import clogo from '../assets/contact.png';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formErrors = {};
    const formElements = form.current.elements;

    if (!formElements.user_name.value) {
      formErrors.user_name = "Name is required";
    } else {
      formErrors.user_name = "";
    }
    if (!formElements.user_email.value) {
      formErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formElements.user_email.value)) {
      formErrors.user_email = "Email is invalid";
    } else {
      formErrors.user_email = "";
    }
    if (!formElements.subject.value) {
      formErrors.subject = "Subject is required";
    } else {
      formErrors.subject = "";
    }
    if (!formElements.message.value) {
      formErrors.message = "Message is required";
    } else {
      formErrors.message = "";
    }

    return formErrors;
  };

  const clearForm = () => {
    form.current.reset();
    setErrors({});
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).every(key => formErrors[key] === "")) {
      emailjs.sendForm('service_k7g2r8n', 'template_wkl5dao', form.current, '5h1tqWxcGp7mfvD_5')
        .then((result) => {
            console.log(result.text);
            clearForm();
        }, (error) => {
            console.log(error.text);
        });
    } else {
      setErrors(formErrors);
    }
  };



  return (
    <>
      <div className="md:p-18 py-18  ">
        <h1 className="text-4xl text-white text-center tracking-[6px] font-[600]">cONTACT</h1>
        <div className="flex flex-wrap justify-around gap-1 bg-black text-white mt-10">
          <div className="w-3/4 md:w-[35vw]" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <img src={clogo} alt="" className='w-full' />
          </div>
          <div className="w-full md:w-[33vw]  border rounded-2xl py-10" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center m-auto w-3/4">
              <h1 className='text-4xl text-white'>mE </h1>
              <div className="about py-4 text-center">
                I’d  love to hear from you! <br /> feel free to 🚀reach out.
                <br />
                <div className="flex items-center justify-center gap-4 pt-4">
                <p className='text-md'><a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-3xl'/></a></p>
                <p className='text-md'><a href="tel:+917008654545 "><FaPhone className='text-3xl'/></a></p>
                <p className='text-md'><a href="mailto:kanh123.ngp@gmail.com"><MdEmail className='text-3xl'/></a></p>
                </div>
              </div>
              <div className='flex justify-between w-full gap-2 '>
                <input type="text" name="user_name" placeholder="Name" className='border-2 rounded-xl border-white p-2 w-full' />
                {errors.user_name && <p className="text-red-500">{errors.user_name}</p>}
                <input type="email" name="user_email" placeholder="Email" className='border-2 rounded-xl border-white p-2 w-full ' />
                {errors.user_email && <p className="text-red-500">{errors.user_email}</p>}
              </div>
              <input type="text" name="subject" placeholder="subject" className='border-2 rounded-xl border-white p-2 w-full mt-4' maxLength={30} minLength={5} />
              {errors.subject && <p className="text-red-500">{errors.subject}</p>}
              <textarea name="message" placeholder="Message" className='border-2 rounded-xl border-white p-2 w-full mt-4' rows="6" />
              {errors.message && <p className="text-red-500">{errors.message}</p>}
              <button type='submit' className='w-1/2 md:w-1/4 rounded-2xl py-2 mt-6 font-semibold border-2 text-xl cursor-pointer text-black'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact