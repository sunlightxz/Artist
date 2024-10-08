import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import footerlg from "/img3.png";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { MdOutlineEmail } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const circleRef = useRef(null);
  const footerRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const options = {
    timeZone: "Africa/Casablanca",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const formattedTime = currentTime.toLocaleTimeString("en-US", options);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: footerRef.current,
      start: "bottom top",
      end: "bottom bottom",
      onEnter: () => gsap.to(footerRef.current, { zIndex: 20 }),
      onLeaveBack: () => gsap.to(footerRef.current, { zIndex: 0 }),
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="sticky bottom-0 w-full min-h-[70vh] bg-black"
    >
      <div className="w-full h-full overflow-hidden pt-14 sm:pt-16 3xl:px-[10%] px-6  sm:px-[4%]">
        <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
        <div className="flex w-full items-center justify-between">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2" // Corrected: 'stroke-width' to 'strokeWidth'
              viewBox="0 0 24 24"
              strokeLinecap="round" // Corrected: 'stroke-linecap' to 'strokeLinecap'
              strokeLinejoin="round" // Corrected: 'stroke-linejoin' to 'strokeLinejoin'
              color="#fcf7c1"
              style={{ color: "#fcf7c1" }}
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2" // Corrected: 'stroke-width' to 'strokeWidth'
              viewBox="0 0 24 24"
              strokeLinecap="round" // Corrected: 'stroke-linecap' to 'strokeLinecap'
              strokeLinejoin="round" // Corrected: 'stroke-linejoin' to 'strokeLinejoin'
              color="#fcf7c1"
              style={{ color: "#fcf7c1" }}
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2" // Corrected: 'stroke-width' to 'strokeWidth'
              viewBox="0 0 24 24"
              strokeLinecap="round" // Corrected: 'stroke-linecap' to 'strokeLinecap'
              strokeLinejoin="round" // Corrected: 'stroke-linejoin' to 'strokeLinejoin'
              color="#fcf7c1"
              style={{ color: "#fcf7c1" }}
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <h1 className="lg:text-[160px] uppercase md2:text-[110px] sm:text-[70px] text-[44px]  text-white font-bold">
            Artworks
          </h1>
          
          <a
            href="mailto:amineasfar101@gmail.com"
            className="uppercase text-black py-4 px-6 bg-white rounded-3xl flex justify-center items-center gap-3"
          >
            <MdOutlineEmail className="text-[25px]" />
            drop me an email
          </a>
          <div className="flex mt-2 w-full items-center justify-between">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2" // Corrected: 'stroke-width' to 'strokeWidth'
              viewBox="0 0 24 24"
              strokeLinecap="round" // Corrected: 'stroke-linecap' to 'strokeLinecap'
              strokeLinejoin="round" // Corrected: 'stroke-linejoin' to 'strokeLinejoin'
              color="#fcf7c1"
              style={{ color: "#fcf7c1" }}
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2" // Corrected: 'stroke-width' to 'strokeWidth'
              viewBox="0 0 24 24"
              strokeLinecap="round" // Corrected: 'stroke-linecap' to 'strokeLinecap'
              strokeLinejoin="round" // Corrected: 'stroke-linejoin' to 'strokeLinejoin'
              color="#fcf7c1"
              style={{ color: "#fcf7c1" }}
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2" // Corrected: 'stroke-width' to 'strokeWidth'
              viewBox="0 0 24 24"
              strokeLinecap="round" // Corrected: 'stroke-linecap' to 'strokeLinecap'
              strokeLinejoin="round" // Corrected: 'stroke-linejoin' to 'strokeLinejoin'
              color="#fcf7c1"
              style={{ color: "#fcf7c1" }}
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </div>

        <div className="relative flex w-full  max-w-full mt-5 h-full justify-center items-center">
          <div className=" border-t border-[#353535]  py-10 mx-auto w-5/6">
            <div className="flex flex-col">
              <div className="flex flex-row md:justify-between justify-center items-center gap-16">
                <div className="relative hidden md:inline-block ">
                  <img src={footerlg} className="w-[300px] h-full" alt="" />
                </div>
                <div className="flex flex-row justify-between md:gap-16 gap-8">
                  <div className="flex flex-col ">
                    <span className="text-yellow-100 font-medium text-lg">
                      Navigation
                    </span>
                    <a
                      href=""
                      className="text-gray-400 hover:text-[#6C655D] mb-3 mt-4"
                    >
                      Home
                    </a>
                    <a
                      href=""
                      className="text-gray-400 hover:text-[#6C655D] mb-3"
                    >
                      About
                    </a>
                    <a
                      href=""
                      className="text-gray-400 hover:text-[#6C655D] mb-3"
                    >
                      Projects
                    </a>
                    <a
                      href=""
                      className="text-gray-400 hover:text-[#6C655D] mb-3"
                    >
                      Services
                    </a>
                  </div>
                  <div className="flex flex-col ">
                    <span className="text-yellow-100 font-medium text-lg">
                      Socials
                    </span>
                    <a
                      href="https://www.linkedin.com/in/amine-asfar/"
                      className="text-gray-400 hover:text-[#6C655D] mb-3 mt-4"
                    >
                      Linkedin
                    </a>
                    <a
                      href="https://www.instagram.com/portugas_d.amine/"
                      className="text-gray-400 hover:text-[#6C655D] mb-3"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://x.com/AmineAsfar"
                      className="text-gray-400 hover:text-[#6C655D] mb-3"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://github.com/sunlightxz"
                      className="text-gray-400 hover:text-[#6C655D] mb-3"
                    >
                      Github
                    </a>
                  </div>
                  <div className="flex flex-col ">
                    <span className="text-yellow-100 font-medium text-lg">
                      Help
                    </span>
                    <a
                      href=""
                      className="text-gray-400 hover:text-[#6C655D] mb-3 mt-4"
                    >
                      Contact Me
                    </a>
                    <a
                      href=""
                      className="text-gray-400 hover:text-[#6C655D] mb-3"
                    >
                      FAQ
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-between w-full items-center">
              <span className="text-yellow-100">Made by <a className="font-semibold text-lg text-[#389c94]" href="https://github.com/sunlightxz">sunlightxz</a></span>
              <p className="text-sm text-yellow-100 flex flex-col items-start">
                <span className="font-bold">LOCAL TIME</span>
                {formattedTime} Casablanca, MA{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
