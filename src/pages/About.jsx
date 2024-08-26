import React, { useEffect } from "react";
import img2 from "/img2.webp";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

const About = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // Explicitly start Lenis
    lenis.start();

    // Update ScrollTrigger on scroll
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Use GSAP ticker to sync Lenis with GSAP animations
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".whitespace",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });
    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".header-info",
      end: "bottom bottom",
      markers: true,
      onUpdate: (self) => {
        const rotation = self.progress * 360;
        gsap.to(".revealer", { rotation });
      },
    });
    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".header-info",
      end: "bottom bottom",
      markers: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const clipPath = `polygon(
                    ${45 - 45 * progress}% ${0 + 0 * progress}%,
                    ${55 + 45 * progress}% ${0 + 0 * progress}%,
                    ${55 + 45 * progress}% ${100 - 0 * progress}%,
                    ${45 - 45 * progress}% ${100 - 0 * progress}%,

                )`;
        gsap.to(".revealer-1", ".revealer-2", {
          clipPath: clipPath,
          ease: "none",
          duration: 0,
        });
      },
    });
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative z-20">
      {/* Section 1: Info */}
      <section className="info relative z-10 h-[100vh] w-screen text-white bg-black">
        <div className="header-rows flex relative w-full flex-col text-white py-0 px-0">
          <div className="header-row w-full flex justify-start items-center h-[250px] px-0 py-[2em]">
            <h1 className="text-[230px] p-[.5em] font-semibold uppercase tracking-tighter">
              Motion
            </h1>
          </div>
          <div className="header-row w-full flex justify-end items-center h-[250px] px-0 py-[2em]">
            <h1 className="text-[230px] p-[.5em] font-semibold uppercase tracking-tighter">
              STILLS
            </h1>
          </div>
        </div>
      </section>

      {/* Section 2: Header Info */}
      <section className="header-info relative w-full h-screen flex flex-col justify-between bg-black text-white">
        <p className="p-[1em] text-[52px] font-light">
          We're a tight-knit collective of artists and creative minds dedicated
          to crafting unique film and photographic works that entertain and
          engage.
        </p>
        <div className="header-images w-full h-[250px] p-[1em] flex gap-4">
          <div className="img w-full h-full">
            <img src={img2} alt="" />
          </div>
          <div className="img w-full h-full">
            <img src={img2} alt="" />
          </div>
          <div className="img w-full h-full">
            <img src={img2} alt="" />
          </div>
          <div className="img w-full h-full">
            <img src={img2} alt="" />
          </div>
        </div>
      </section>

      {/* Section 3: Whitespace */}
      <section className="whitespace relative w-full h-[300vh] bg-black z-10"></section>

      {/* Section 4: Pinned Section */}
      <section className="pinned absolute top-[0vh] w-full h-[150vh] z-40">
        <div className="revealer">
          <div className="revealer-1"></div>
          <div className="revealer-2"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
