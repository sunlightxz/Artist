import React, { useState, useEffect } from "react";
import Hero from "./pages/Hero";
import Nav from "./components/Nav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import More from "./pages/More";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { AnimatePresence } from "framer-motion";

function Preloader() {
  return (
    <div className="loader w-[100vw] h-[100vh]">
      <div className="absolute h-[33%] w-[100vw] overflow-clip z-50 loader-clip clip-top top-0 bg-black">
        <div className="marquee">
          <div className="marquee-container w-full pt-[0.2em] flex justify-between items-center uppercase">
            <span>ARTWORKS</span>
            <span>ARTWORKS</span>
            ARTWORKS
            <span>ARTWORKS</span>
            <span>ARTWORKS</span>
          </div>
        </div>
      </div>
      <div className="absolute h-[33%] w-[100vw] overflow-clip z-50 loader-clip clip-bottom bottom-0 bg-black">
        <div className="marquee">
          <div className="marquee-container w-full pt-[0.2em] flex justify-between items-center">
            <span>ARTWORKS</span>
            <span>ARTWORKS</span>
            ARTWORKS
            <span>ARTWORKS</span>
            <span>ARTWORKS</span>
          </div>
        </div>
      </div>
      <div className="relative w-[100vw] h-[33.3vh] top-[33.3vh] clip-center overflow-hidden">
        <div className="marquee">
          <div className="marquee-container w-full pt-[0.2em] flex justify-between items-center gap-16 text-black">
            <span>ARTWORKS</span>
            ARTWORKS
            <span>ARTWORKS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scroll = new LocomotiveScroll();

    const handleLoad = () => {
      gsap.from(".clip-top, .clip-bottom", 2, {
        height: "50vh",
        delay: 1,
        ease: "power5.inOut",
      });

      gsap.to(".marquee", 3.5, {
        delay: 0.75,
        top: "50%",
        ease: "power3.inOut",
      });
      gsap.to(".clip-top .marquee, .clip-bottom .marquee", 5, {
        delay: 1,
        left: "100%",
        ease: "power3.inOut",
      });
      gsap.to(".clip-center .marquee", 5, {
        delay: 1,
        left: "30%",
        ease: "power4.inOut",
      });
      gsap.to(".clip-top", 2, {
        delay: 6,
        clipPath: "inset(0 0 100% 0)",
        ease: "power4.inOut",
      });
      gsap.to(".clip-bottom", 2, {
        delay: 6,
        clipPath: "inset(100% 0 0 0)",
        ease: "power4.inOut",
      });
      gsap.to(
        ".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span",
        1,
        {
          delay: 6,
          opacity: 0,
          ease: "power2.inOut",
          onComplete: () => {
            setLoading(false);
          },
        }
      );
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
    {loading ? (
      <Preloader key="preloader" />
    ) : (
      <div className="h-full w-full containerpage">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <More />
      </div>
    )}
  </AnimatePresence>
  );
}

export default App;
