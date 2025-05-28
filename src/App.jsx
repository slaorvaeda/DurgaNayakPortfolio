import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PreLoader from './components/home/PreLoader';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    const Title = 'D U R G A';
    const navTitle = location.pathname.split('/').filter(Boolean).join(' ');
    document.title = `${Title} ${navTitle ? '- ' + navTitle : ''}`;
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <>
      <PreLoader />
      <Navbar />
      <Outlet />
      <div className='h-screen'></div>
      <Footer />
    </>
  )
}

export default App