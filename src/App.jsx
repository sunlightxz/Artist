import React, { useState, useEffect } from 'react';
import Hero from './pages/Hero';
import Nav from './components/Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import More from './pages/More';
import { gsap } from 'gsap';

function Preloader() {
  return (
    <div className="loader w-[100vw] h-[100vh]">
      <div className="absolute h-[33%] w-[100vw] overflow-clip z-50 loader-clip clip-top top-0 bg-black">
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
    const handleLoad = () => {
      const timeline = gsap.timeline({
        onComplete: () => {
          setLoading(false);
        },
      });

      timeline
      .from(".clip-top, .clip-bottom", 2, {
        height: "50vh",
        delay: 1,
        ease: "power5.inOut",
      })
      .to(".marquee", 3.5, {
        delay: 0.75,
        top: "50%",
        ease: "power3.inOut",
      })
      .to(".clip-top .marquee, .clip-bottom .marquee", 5, {
        delay: 1,
        left: "100%",
        ease: "power3.inOut",
      })
      .to(".clip-center .marquee", 5, {
        delay: 1,
        left: "20%",
        ease: "power4.inOut",
      })
      .to(".clip-top", 2, {
        delay: 6,
        clipPath: "inset(0 0 100% 0)",
        ease: "power4.inOut",
      })
      .to(".clip-bottom", 2, {
        delay: 6,
        clipPath: "inset(100% 0 0 0)",
        ease: "power4.inOut",
      })
      .to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span", 1, {
        delay: 6,
        opacity: 0,
        ease: "power2.inOut",
      })
      .add(() => {
        console.log("Final step: showing main content");
        document.querySelector(".containerpage").style.opacity = "1";
        document.querySelector(".loader").style.display = "none";
      });
  };

  window.addEventListener("load", handleLoad);

  return () => {
    window.removeEventListener("load", handleLoad);
  };
}, []);

  return (
    <div className="">
      {loading && <Preloader />}
      <div className={`h-full w-full containerpage ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Nav />
        <Hero/>
        <About />
        <Projects />
        <More />
      </div>
    </div>
  );
}

export default App;




