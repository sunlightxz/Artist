import React from 'react'
import og from '/OG.webp'
import main from '/Main.webp'
import { useEffect ,useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const More = () => {

  const ogpicture = useRef();
  const mainpicture = useRef();

  useEffect(() => {
    gsap.set(".trigger", {
      clipPath: function () {
        return "inset(0px 0px 0px 0px)";
      }
    });

    const animation = gsap.to(".original-painting", {
      clipPath: function () {
        return "inset(0px 0px 100% 0px)";
      },
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: '.cont-paint',
      start: 'top top',
      end: 'bottom bottom',
      animation: animation,
      scrub: 1,
    });
  }, []);

  return (
    <section className="web-content relative w-full bg-white z-50">
      <div className="">
        <div className="sticky top-0 h-screen cont-paint">
          <div className="absolute left-0 right-0 top-0 z-20  w-full font-nippo  text-lemon">
            <div className="section-padding grid-gap  sticky top-0 flex h-screen grid-cols-12 flex-col justify-center  gap-y-fluid-sm md:grid md:place-items-center md:items-center">
              <span className="col-span-4 flex text-heading-sm tracking-heading">
                <span className='text-3xl text-red-500'>TNOE</span>
              </span>
              <div className=" group relative col-span-4 flex aspect-square w-full items-center justify-center overflow-clip rounded-xl">
                <div className="relative z-50 h-full w-full mix-blend-difference"></div>
                <img src={main} className='original-painting pointer-events-none absolute h-full w-full object-cover trigger' alt="" />
              </div>
            </div>
          </div>
          <div className=" relative h-fit w-full">
            <img src={main} className='absolute h-screen w-full object-cover' width={1200} height={1421} alt="" ref={ogpicture}/>
          </div>
        </div>
        <div className="sticky top-0 h-screen cont-paint">
          <div className="absolute left-0 right-0 top-0 z-20  w-full font-nippo  text-lemon">
            <div className="section-padding grid-gap  sticky top-0 flex h-screen grid-cols-12 flex-col justify-center  gap-y-fluid-sm md:grid md:place-items-center md:items-center">
              <span className="col-span-4 flex text-heading-sm tracking-heading">
                <span className='text-3xl text-red-500'>TNOE</span>
              </span>
              <div className=" group relative col-span-4 flex aspect-square w-full items-center justify-center overflow-clip rounded-xl">
                <div className="relative z-50 h-full w-full mix-blend-difference"></div>
                <img src={og} className='original-painting pointer-events-none absolute h-full w-full object-cover' alt="" />
              </div>
            </div>
          </div>
          <div className=" relative h-fit w-full">
            <img src={og} className='absolute h-screen w-full object-cover' width={1200} height={1421} alt="" ref={mainpicture} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default More;
