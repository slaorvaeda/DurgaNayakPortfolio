import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FigmaLogoIcon,
  FramerLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  VercelLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const LOGOS = [
  <FigmaLogoIcon width={48} height={48} className="text-slate-800" />,
  <FramerLogoIcon width={48} height={48} className="text-slate-800" />,
  <TwitterLogoIcon width={48} height={48} className="text-slate-800" />,
  <GitHubLogoIcon width={48} height={48} className="text-slate-800" />,
  <VercelLogoIcon width={48} height={48} className="text-slate-800" />,
  <NotionLogoIcon width={48} height={48} className="text-slate-800" />,
  <DiscordLogoIcon width={48} height={48} className="text-slate-800" />,
  <InstagramLogoIcon width={48} height={48} className="text-slate-800" />,
  <LinkedInLogoIcon width={48} height={48} className="text-slate-800" />,
];

export default function HeroSlider() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="relative m-auto w-3/4 rounded-xl overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']"
      data-aos="zoom-in"
      style={{ transformOrigin: "center" }}
    >
      <div className="animate-infiniteSlider flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};
