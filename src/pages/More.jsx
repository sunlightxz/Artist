import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import og from '/OG.webp';
import main from '/Main.webp';
import lck from '/ts.jpg';
import Contact from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const More = () => {
  useEffect(() => {
    // Set initial clipPath for all cont-paint elements
    gsap.set('.cont-paint', { clipPath: 'inset(100% 0 0 0)' });

    // Create GSAP animation
    gsap.to('.cont-paint', {
      clipPath: 'inset(0% 0% 0% 0%)',
      stagger: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        // markers: true, // Uncomment for debugging
      },
    });
  }, []);

  return (
    <section className="web-content relative w-full bg-white z-50 h-full">
      <div className='z-50 relative'>
        <div className="sticky top-0 h-screen cont-paint">
          <div className="absolute left-0 right-0 top-0 z-20 w-full font-nippo text-lemon" style={{ height: '300vh', top: '0vh' }}>
            <div className="section-padding grid-gap sticky top-0 flex h-screen grid-cols-12 flex-col justify-center gap-y-fluid-sm md:grid md:place-items-center md:items-center">
              <span className="col-span-4 flex text-3l tracking-tighter">
                <span className='text-3xl  text-yellow-200'>Inspired Creations</span>
              </span>
              <div className="group relative col-span-4 flex aspect-square w-full items-center justify-center overflow-clip rounded-xl">
                <div className="relative z-50 h-full w-full mix-blend-difference"></div>
                <img src={main} className='original-painting pointer-events-none absolute h-full w-full object-cover smallImg' alt="" />
              </div>

              <div className="col-span-4 flex flex-row items-start justify-between gap-y-3 md:flex-col md:justify-normal">
                <h4 className='relative flex max-w-[12ch] text-yellow-200 flex-col font-nippo text-3xl tracking-tighter'>Art Meets Technology</h4>
                <span className ='text-yellow-100 max-w-[30ch]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>

              </div>
            </div>
          </div>
          <div className=" absolute left-0 top-0 z-10 h-screen w-screen bg-gradient-to-t from-black/90 from-50%"></div>
          <div className="custom-gradient pointer-events-none absolute left-0 top-0 z-30 h-screen w-full animate-pan-overlay opacity-5"></div>
          <div className="relative h-fit w-full">
            <img src={main} className='absolute h-screen w-full object-cover' width={1200} height={1421} alt="" />
          </div>
        </div>

        <div className="sticky top-0 h-screen cont-paint">
          <div className="absolute left-0 right-0 top-0 z-20 w-full font-nippo text-lemon" style={{ height: '300vh', top: '-100vh' }}>
            <div className="section-padding grid-gap sticky top-0 flex h-screen grid-cols-12 flex-col justify-center gap-y-fluid-sm md:grid md:place-items-center md:items-center">
              <span className="col-span-4 flex text-3l tracking-tighter">
                <span className='text-3xl text-yellow-200'>Evolving Vision</span>
              </span>
              <div className="group relative col-span-4 flex aspect-square w-full items-center justify-center overflow-clip rounded-xl">
                <div className="relative z-50 h-full w-full mix-blend-difference"></div>
                <img src={og} className='original-painting pointer-events-none absolute h-full w-full object-cover smallImg' alt="" />
              </div>

              <div className="col-span-4 flex flex-row items-start justify-between gap-y-3 md:flex-col md:justify-normal">
                <h4 className='relative flex max-w-[12ch] text-yellow-200 flex-col font-nippo text-3xl tracking-tighter'>The Future of Creativity</h4>
                <span className ='text-yellow-100 max-w-[30ch]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
              </div>
            </div>
          </div>
          <div className=" absolute left-0 top-0 z-10 h-screen w-screen bg-gradient-to-t from-black/90 from-50%"></div>
          <div className="custom-gradient pointer-events-none absolute left-0 top-0 z-30 h-screen w-full animate-pan-overlay opacity-5"></div>
          <div className="relative h-fit w-full">
            <img src={og} className='absolute h-screen w-full object-cover' width={1200} height={1421} alt="" />
          </div>
        </div>

        <div className="sticky top-0 h-screen cont-paint">
          <div className="absolute left-0 right-0 top-0 z-20 w-full font-nippo text-lemon" style={{ height: '300vh', top: '-200vh' }}>
            <div className="section-padding grid-gap sticky top-0 flex h-screen grid-cols-12 flex-col justify-center gap-y-fluid-sm md:grid md:place-items-center md:items-center">
              <span className="col-span-4 flex text-3l tracking-tighter">
                <span className='text-3xl text-yellow-200'>Creative Horizons</span>
              </span>
              <div className="group relative col-span-4 flex aspect-square w-full items-center justify-center overflow-clip rounded-xl">
                <div className="relative z-50 h-full w-full mix-blend-difference"></div>
                <img src={lck} className='original-painting pointer-events-none absolute h-full w-full object-cover smallImg' alt="" />
              </div>

              <div className="col-span-4 flex flex-row items-start justify-between gap-y-3 md:flex-col md:justify-normal">
                <h4 className='relative flex max-w-[12ch] flex-col text-yellow-200 font-nippo text-3xl tracking-tighter'>Beyond the Imagination</h4>
                <span className ='text-yellow-100 max-w-[30ch]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
             </div>
            </div>
          </div>
          <div className=" absolute left-0 top-0 z-10 h-screen w-screen bg-gradient-to-t from-black/90 from-50%"></div>
          <div className="custom-gradient pointer-events-none absolute left-0 top-0 z-30 h-screen w-full animate-pan-overlay opacity-5"></div>
          <div className="relative h-fit w-full">
            <img src={lck} className='absolute h-screen w-full object-cover' width={1200} height={1421} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="h-[70vh] sticky bottom-0 bg-black flex justify-center items-center z-40">
        
      </div> */}
      <Contact/>
    </section>
  );
}

export default More;
