import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import og from '/OG.webp';
import main from '/Main.webp';
import lck from '/lck.webp';

gsap.registerPlugin(ScrollTrigger);
const More = () => {
   
  useEffect(() => {
    const sections = gsap.utils.toArray('.cont-paint');

    sections.forEach((section) => {
      const sectionPadding = section.querySelector('.section-padding');

      if (sectionPadding) {
        gsap.fromTo(
          sectionPadding,
          { clipPath: 'inset(100% 0 0 0)' }, // Initial state
          {
            clipPath: 'inset(0% 0% 0% 0%)', // Final state
            ease: 'power2.out',
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 22%',
              scrub: true,
              markers: true, // Optional: to help debug the scroll trigger positions
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="web-content relative w-full bg-white z-50">
      <div className="">
        <div className="sticky top-0 h-screen cont-paint">
          <div className="absolute left-0 right-0 top-0 z-20 w-full font-nippo text-lemon " style={{ height: '300vh', top: '0vh' }}>
            <div className="section-padding grid-gap  sticky top-0 flex h-screen grid-cols-12 flex-col justify-center gap-y-fluid-sm md:grid md:place-items-center md:items-center">
              <span className="col-span-4 flex text-heading-sm tracking-heading">
                <span className='text-3xl text-red-500'>TNOE</span>
              </span>
              <div className=" group relative col-span-4 flex aspect-square w-full items-center justify-center overflow-clip rounded-xl">
                <div className="relative z-50 h-full w-full mix-blend-difference"></div>
                  <img src={main} className='original-painting pointer-events-none absolute h-full w-full object-cover smallImg' alt="" />
                </div>
            </div>
          </div>
          <div className="relative h-fit w-full">
            <img src={main} className='absolute h-screen w-full object-cover' width={1200} height={1421} alt="" />
          </div>
        </div>
      
        <div className="sticky top-0 h-screen cont-paint">
          <div className="absolute left-0 right-0 top-0 z-20 w-full font-nippo text-lemon " style={{ height: '300vh', top: '-100vh' }}>
            <div className="section-padding grid-gap  sticky top-0 flex h-screen grid-cols-12 flex-col justify-center gap-y-fluid-sm md:grid md:place-items-center md:items-center">
              <span className="col-span-4 flex text-heading-sm tracking-heading">
                <span className='text-3xl text-red-500'>mweofsd</span>
              </span>
              <div className=" group relative col-span-4 flex aspect-square w-full items-center justify-center overflow-clip rounded-xl">
                <div className="relative z-50 h-full w-full mix-blend-difference"></div>
                <img src={og} className='original-painting pointer-events-none absolute h-full w-full object-cover smallImg3' alt="" />
              </div>
            </div>
          </div>
          <div className="relative h-fit w-full">
            <img src={og} className='absolute h-screen w-full object-cover' width={1200} height={1421} alt="" />
          </div>
        </div>
        <div className="sticky top-0 h-screen cont-paint">
          <div className="absolute left-0 right-0 top-0 z-20  w-full font-nippo text-lemon " style={{ height: '300vh', top: '-200vh' }}>
            <div className="section-padding grid-gap  sticky top-0 flex h-screen grid-cols-12 flex-col justify-center gap-y-fluid-sm md:grid md:place-items-center md:items-center">
              <span className="col-span-4 flex text-heading-sm tracking-heading">
                <span className='text-3xl text-red-500'>meowsss</span>
              </span>
              <div className=" group relative col-span-4 flex aspect-square w-full items-center justify-center overflow-clip rounded-xl">
                <div className="relative z-50 h-full w-full mix-blend-difference"></div>
                <img src={lck} className='original-painting pointer-events-none absolute h-full w-full object-cover smallImg3' alt="" />
              </div>
            </div>
          </div>
          <div className="relative h-fit w-full">
            <img src={lck} className='absolute h-screen w-full object-cover' width={1200} height={1421} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default More;
