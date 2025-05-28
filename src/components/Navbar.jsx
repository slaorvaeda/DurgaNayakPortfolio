import React, { useState } from 'react';
import logo from '../assets/fevicon.png'; 
import { Link, useLocation } from 'react-router-dom';
import '../assets/style/Navbar.css'; // Import the CSS file

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="fixed w-full z-20 top-0 start-0 ">
                <div className=" flex flex-wrap items-center justify-between mx-auto p-4 w-full">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white tracking-[10px]" id="logo">dURGA</span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse bg">
                        <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isOpen}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1 md:m-auto bg-white/20 backdrop-blur-sm md:px-7 md:py-2 md:pr-2 rounded-2xl`} id="navbar-sticky">
                        <ul className="flex flex-col mt-4 font-medium rounded-xl md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 
                         md:border-0 bg-black md:bg-transparent border-r-2 md:dark:bg-transparent md:dark:border-gray-700   w-[30%] absolute right-2 md:relative ">
                            <li>
                                <Link
                                    to="/"
                                    className={`nav-link-slide${location.pathname === '/' ? ' active' : ''} block py-2 px-3 text-gray-900 rounded-sm md:hover:text-black md:p-1 md:dark:hover:text-blue-500 dark:text-white dark:border-gray-700`}
                                >
                                    hOME
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={`nav-link-slide${location.pathname === '/about' ? ' active' : ''} block py-2 px-3 text-gray-900 rounded-sm md:hover:text-blue-700 md:p-1 md:dark:hover:text-blue-500 dark:text-white dark:border-gray-700`}
                                >
                                    aBOUT
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/service"
                                    className={`nav-link-slide${location.pathname === '/service' ? ' active' : ''} block py-2 px-3 text-gray-900 rounded-sm md:hover:text-blue-700 md:p-1 md:dark:hover:text-blue-500 dark:text-white dark:border-gray-700`}
                                >
                                    sERVICES
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className={`nav-link-slide${location.pathname === '/contact' ? ' active' : ''} block py-2 px-3 text-gray-900 rounded-sm md:hover:text-blue-700 md:p-1 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700`}
                                >
                                    cONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;