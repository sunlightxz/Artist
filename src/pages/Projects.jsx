import React, { useEffect } from "react";
import img2 from "/img2.webp";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

const Projects = () => {
  return (
    <section className="web-content relative w-full h-[150vh] bg-white z-50 mt-[-200px]">
      <div className="flex justify-between items-center mx-[20px] border-b border-black ">
        <h1 className="text-[12em] font-normal uppercase tracking-tight leading-none text-black">
          Artists
        </h1>
        <h1 className="text-[10em] font-normal uppercase tracking-tight leading-none text-black">
          *
        </h1>
      </div>
      <div className="flex items-center justify-between w-full px-[25px] mt-[25px]">
        <div className="flex items-center justify-between  gap-14">
          <span className="text-xs">contempory</span>
          <span className="text-xs">conceptual</span>
          <span className="text-xs">performance</span>
        </div>
        <span className="text-xs">(2024)</span>
      </div>

      <div className="flex justify-between items-center px-[25px] mt-[25px]">
            <div className="basis-1/2">
                <img src={img2} alt="" />
            </div>
            <div className="basis-1/2"></div>
      </div>
    </section>
  );
};

export default Projects;
