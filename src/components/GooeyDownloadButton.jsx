import React, { useRef } from "react";
import "../../public/style/GooeyDownloadButton.css";

const GooeyDownloadButton = ({ href, filename }) => {
  const btnRef = useRef(null);

  // Animate text on mount and on click
  React.useEffect(() => {
    const b = btnRef.current?.querySelector("b");
    if (b) {
      b.innerHTML = b.textContent
        .split("")
        .map((ch, i) => `<span style='animation-delay:${i / 70}s'>${ch}</span>`)
        .join("");
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent immediate download
    const btn = btnRef.current;
    if (!btn) return;
    btn.classList.add("loading");
    setTimeout(() => {
      btn.classList.remove("loading");
      // Trigger download after animation
      const link = document.createElement('a');
      link.href = href;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 8000);
  };

  return (
    <>
      {/* SVG filter for gooey effect */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <a
        className="btn"
        href={href}
        download={filename}
        ref={btnRef}
        onClick={handleClick}
      >
        <b>Download</b>
        <div></div>
      </a>
    </>
  );
};

export default GooeyDownloadButton;
