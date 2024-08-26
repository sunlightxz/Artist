import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "/img1.png";

const Hero = () => {
  const mainRef = useRef(null);
  useEffect(() => {

    
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger for the entire section
    ScrollTrigger.create({
      trigger: ".website-content",
      start: "bottom top",
      end: "bottom bottom",
    });

    // Animation for letters moving off-screen and scaling up
    gsap.to(".header .letters:first-child", {
      x: () => -innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: "+=150%",
        scrub: 1,
      },
    });

    gsap.to(".header .letters:last-child", {
      x: () => innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: "+=150%",
        scrub: 1,
      },
    });

    // Animation for the image holder scaling and changing clip-path
    gsap.timeline({
        scrollTrigger: {
          trigger: ".website-content",
          start: "top top",
          end: "+=170%",
          scrub: 1,
        },
      })
      .to(".img-holder", {
        scale: 1,
        rotate: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Full square
        ease: "power2.inOut",
       
      })
      .to(".img-holder img", {
          scale: 1,
          ease: "power2.inOut",
        })
    }, []);

  return (
    <div className=" h-[170vh] sticky top-0 z-10 min-h-[80vh] bg-[#E7E7E1]  w-full" ref={mainRef}>
      <div className="h-screen w-full flex  sticky top-0 overflow-hidden">
        <div className="h-full w-full flex items-center relative justify-center overflow-visible">
        <div className="z-20 header  w-full text-black flex justify-center overflow-visible">
          <div className="letters uppercase">
            <div className="">a</div>
            <div className="">r</div>
            <div className="">t</div>
            <div className="">w</div>
          </div>
          <div className="letters uppercase">
            <div className="">o</div>
            <div className="">r</div>
            <div className="">k</div>
            <div className="">s</div>
          </div>
        </div>
        <div className="website-content min-h-screen absolute top-0 w-full z-10">
        <div className="img-holder">
          <img className="object-cover w-full h-full" src={img1} alt="hero.jpg" />
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;