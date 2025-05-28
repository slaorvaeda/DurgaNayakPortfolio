import React, { useState, useEffect } from 'react'
import aws from '../../assets/imgs/aws.png'
import css from '../../assets/imgs/css.svg'
import kub from '../../assets/imgs/kubernetes.svg'
import github from '../../assets/imgs/github.svg'
import gsap from '../../assets/imgs/gsap.svg'
import firebase from '../../assets/imgs/firebase.svg'
import tailwindcss from '../../assets/imgs/tailwindcss.svg'


function DirContainer() {

    const techLogos = [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5", title: "HTML5" },
        { src: css, alt: "CSS3", title: "CSS3" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", title: "JavaScript" },
        {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",alt: "React",title: "React"},
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", title: "Node.js" },
        { src: tailwindcss, alt: "Tailwind CSS", title: "Tailwind CSS" },
        { src: gsap, alt: "GSAP", title: "GSAP (Animation)" },
        { src: firebase, alt: "Firebase", title: "Firebase" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", title: "TypeScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", title: "MongoDB" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express", title: "Express", className: "bg-white rounded" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git", title: "Git" },
        { src: github, alt: "github", title: "github (Deployment)" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma", title: "Figma" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", alt: "Vercel", title: "Vercel (Deployment)" },

        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", alt: "Netlify", title: "Netlify (Deployment)" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker", title: "Docker (Deployment)" },
        { src: aws, alt: "AWS", title: "AWS (Deployment)" },
        { src: kub, alt: "kub", title: "kubernetic (Deployment)" },
    ];

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchNews() {
            setLoading(true);
            setError(null);
            try {
                // Use a more reliable tech news API (GNews, requires API key, or fallback to static)
                // Example with GNews (replace 'YOUR_API_KEY' with a real key):
                // const response = await fetch('https://gnews.io/api/v4/top-headlines?topic=technology&lang=en&token=YOUR_API_KEY');
                // const data = await response.json();
                // const mapped = (data.articles || []).slice(0, 5).map((item, idx) => ({
                //     title: item.title,
                //     desc: item.description,
                //     color: ["text-blue-700","text-green-700","text-purple-700","text-yellow-700","text-pink-700"][idx % 5]
                // }));
                // setNews(mapped);

                // Fallback: use static news if API fails or no API key
                const mapped = [
                    { title: "React 19 Released!", desc: "Hooks improvements, faster rendering, and more.", color: "text-blue-700" },
                    { title: "Node.js 22 LTS", desc: "Better performance and native fetch API support.", color: "text-green-700" },
                    { title: "AI in Web Dev", desc: "AI tools are transforming frontend workflows.", color: "text-purple-700" },
                    { title: "Vite 5 Announced", desc: "Lightning-fast builds and improved DX.", color: "text-yellow-700" },
                    { title: "CSS4 Features", desc: "New selectors and native nesting now available.", color: "text-pink-700" },
                ];
                setNews(mapped);
            } catch (err) {
                setError('Failed to load news. Showing latest highlights.');
                setNews([
                    { title: "React 19 Released!", desc: "Hooks improvements, faster rendering, and more.", color: "text-blue-700" },
                    { title: "Node.js 22 LTS", desc: "Better performance and native fetch API support.", color: "text-green-700" },
                    { title: "AI in Web Dev", desc: "AI tools are transforming frontend workflows.", color: "text-purple-700" },
                    { title: "Vite 5 Announced", desc: "Lightning-fast builds and improved DX.", color: "text-yellow-700" },
                    { title: "CSS4 Features", desc: "New selectors and native nesting now available.", color: "text-pink-700" },
                ]);
            } finally {
                setLoading(false);
            }
        }
        fetchNews();
    }, []);

    const [current, setCurrent] = useState(0);
    useEffect(() => {
        if (!news.length) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % news.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [news]);
    const nextSlide = () => setCurrent((prev) => (prev + 1) % news.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + news.length) % news.length);

    return (
        <>
            <div className=" w-3/4  m-auto mt-10 p-5 rounded-2xl  ">

                <div class="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-6 ">
                    <div class="flex flex-col gap-6 h-full">
                        <div class="bg-white/10 backdrop-blur-sm p-4 rounded-2xl flex-1 transform transition duration-300 hover:-translate-y-1 shadow-md hover:shadow-[4px_4px_10px_white] " data-aos="fade-up" data-aos-duration="800">
                            <h2 class="text-xl font-semibold mb-2 flex items-center gap-2">
                                <span role="img" aria-label="news">📰</span> Tech News
                            </h2>
                            <div class="relative w-full flex flex-col items-center">
                                {loading ? (
                                    <div class="text-gray-500">Loading news...</div>
                                ) : error ? (
                                    <div class="text-red-500">{error}</div>
                                ) : news.length ? (
                                    <>
                                        <div class="min-w-[250px] max-w-[350px] bg-white/30 rounded-lg p-4 shadow-md text-center">
                                            <h3 class={`font-semibold mb-1 ${news[current].color}`}>{news[current].title}</h3>
                                            <p class="text-xs text-gray-700">{news[current].desc}</p>
                                        </div>
                                        <div class="flex gap-2 mt-4">
                                            <button onClick={prevSlide} class="w-8 h-8 rounded-full cursor-pointer flex items-center justify-center text-xl">&#8592;</button>
                                            <button onClick={nextSlide} class="w-8 h-8 rounded-full cursor-pointer flex items-center justify-center text-xl">&#8594;</button>
                                        </div>
                                        <div class="flex gap-1 mt-2 justify-center">
                                            {news.map((_, idx) => (
                                                <span key={idx} class={`w-2 h-2 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-300'}`}></span>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div class="text-gray-500">No news available.</div>
                                )}
                            </div>
                        </div>
                        <div class="bg-white/10 backdrop-blur-sm p-4 rounded-2xl flex-1 transform transition duration-300 hover:-translate-y-1 shadow-md hover:shadow-[4px_4px_10px_white]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <div class="flex justify-start items-center mb-4">
                                <span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                                <span class="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                                <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>
                            <h2 class="text-xl font-semibold mb-2">Interests</h2>
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Open Source Contribution</li>
                                <li>UI/UX Design</li>
                                <li>Machine Learning</li>
                                <li>Travel & Photography</li>
                            </ul>
                        </div>
                    </div>

                    <div class="bg-white/10 backdrop-blur-sm p-4 rounded-2xl h-full transform transition duration-300 hover:-translate-y-1 shadow-md hover:shadow-[4px_4px_10px_white]" data-aos="fade-left" data-aos-duration="1200">
                        <div class="flex justify-start items-center mb-4">
                            <span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                            <span class="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                            <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                        <h2 class="text-xl font-semibold mb-2">Technology Stack</h2>
                        <div class="flex flex-wrap gap-4 justify-center items-center mt-4">
                            {techLogos.map((logo, idx) => (
                                <img
                                    key={logo.title + idx}
                                    src={logo.src}
                                    alt={logo.alt}
                                    title={logo.title}
                                    className={`w-16 h-16${logo.className ? ' ' + logo.className : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default DirContainer

/* Add this to your CSS (e.g., index.css or App.css) for the slider animation */
/*
@keyframes tech-slider {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-tech-slider {
  animation: tech-slider 30s linear infinite;
}
*/