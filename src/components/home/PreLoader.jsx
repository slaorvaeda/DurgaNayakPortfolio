import React, { useEffect } from 'react';
import '../../assets/style/preloader.css';

function PreLoader() {
    useEffect(() => {
        const handleLoad = () => {
            const circle1 = document.getElementById('circle1');
            const circle2 = document.getElementById('circle2');
            const circle3 = document.getElementById('circle3');

            setTimeout(() => {
                const loaderText = document.getElementById('loaderText');
                loaderText.classList.add('fade-in');
            }, 5000); 

            setTimeout(() => {
                const circles = [circle1, circle2, circle3];
                circles.forEach(circle => {
                    circle.classList.add('fade-out');
                });
            }, 5000); 

            setTimeout(() => {
                document.getElementById('preloader').classList.add('fade-out');
                setTimeout(() => {
                    document.getElementById('preloader').style.display = 'none';
                    document.getElementById('mainContent').classList.remove('hidden');
                }, 2000); 
            }, 6000); 
        };

        window.addEventListener('load', handleLoad);

        
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div id="preloader" className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div id="circle1" className="absolute loader-animation"></div>
            <div id="circle2" className="absolute loader-animation" style={{ animationDelay: '1s' }}></div>
            <div id="circle3" className="absolute loader-animation" style={{ animationDelay: '2s' }}></div>
           
            <h1 className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white tracking-[10px] opacity-0" id="loaderText">dURGA</h1>
        </div>
    );
}

export default PreLoader;