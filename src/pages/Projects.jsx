import React, { useEffect, useRef } from "react";
import img2 from "/about6.png"; // Placeholder image, you'll replace this dynamically
import { gsap } from "gsap";

const Projects = () => {
  const projectsRef = useRef(null);
  const previewRef = useRef(null);
  const previewImgRef = useRef(null);

  useEffect(() => {
    const projects = projectsRef.current;
    const preview = previewRef.current;
    const previewImg = previewImgRef.current;
    let isInside = false;

    const images = {
      p1: "/item2.png",
      p2: "/about5.png",
      p3: "/about4.png",
    };

    const handleMouseMove = (e) => {
      const mouseInside = isMouseInsideContainer(e);

      if (mouseInside !== isInside) {
        isInside = mouseInside;
        gsap.to(preview, {
          scale: isInside ? 1 : 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (isInside) {
        const offsetX = preview.offsetWidth / 2;
        const offsetY = preview.offsetHeight / 2;

        gsap.to(preview, {
          left: `${e.clientX - offsetX}px`,
          top: `${e.clientY - offsetY}px`,
          ease: "power2.out",
          duration: 0.2,
        });
      }
    };

    const handleProjectHover = (project) => {
      const projectId = project.id;
      const imageUrl = images[projectId] || "/img2.webp"; // Default to img2.webp if no image found
      gsap.to(previewImg, {
        backgroundImage: `url(${imageUrl})`,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const isMouseInsideContainer = (e) => {
      const containerRect = projects.getBoundingClientRect();
      return (
        e.clientX >= containerRect.left &&
        e.clientX <= containerRect.right &&
        e.clientY >= containerRect.top &&
        e.clientY <= containerRect.bottom
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    Array.from(projects.children).forEach((project) => {
      project.addEventListener("mouseenter", () => handleProjectHover(project));
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      Array.from(projects.children).forEach((project) => {
        project.removeEventListener("mouseenter", () =>
          handleProjectHover(project)
        );
      });
    };
  }, []);

  return (
    <section className="web-content relative w-full h-[100vh] bg-white z-50 mt-[-200px]">
      <div className="flex justify-between items-center mx-[20px] border-b border-black">
        <h1 className="text-[12em] font-normal uppercase tracking-tight leading-none text-black">
          Artists
        </h1>
        <h1 className="text-[10em] font-normal uppercase tracking-tight leading-none text-black">
          *
        </h1>
      </div>
      <div className="flex items-center justify-between w-full px-[25px] mt-[25px]">
        <div className="flex items-center justify-between gap-14">
          <span className="text-xs">contemporary</span>
          <span className="text-xs">conceptual</span>
          <span className="text-xs">performance</span>
        </div>
        <span className="text-xs">(2024)</span>
      </div>

      <div className="flex justify-between px-[25px] pt-[80px]">
        <div className="basis-1/2 h-[500px] w-[460px]">
          <img src={img2} className ="object-cover h-full w-[460px]" alt="" />
        </div>
        <div className="basis-1/2 flex flex-col items-center">
          <div className="">
            <h1 className="text-[1.7em] font-medium tracking-wide text-black indent-4">
              The gallery is built upon tremendous works of art. As you explore,
              you’ll gain a much deeper understanding of the history behind some
              of the most iconic and acknowledged art pieces.
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <div
              ref={previewRef}
              className="preview absolute w-[250px] h-[250px] overflow-hidden pointer-events-none origin-center z-20"
            >
              <div
                ref={previewImgRef}
                className="preview-img w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/img2.webp')" }} // Default image
              ></div>
            </div>
            <div className="container w-full h-full flex justify-center items-center pt-[30px]">
              <div ref={projectsRef} className="projects w-full flex flex-col">
                <div
                  className="project w-full p-[1em] flex items-center border-t border-b border-black cursor-pointer"
                  id="p1"
                >
                  <div className="client flex w-full justify-between">
                    <p>Project 1</p>
                    <p>(1)</p>
                  </div>
                </div>
                <div
                  className="project w-full p-[1em] flex items-center border-b border-black cursor-pointer"
                  id="p2"
                >
                  <div className="client flex w-full justify-between">
                    <p>Project 2</p>
                    <p>(2)</p>
                  </div>
                </div>
                <div
                  className="project w-full p-[1em] flex items-center border-b border-black cursor-pointer"
                  id="p3"
                >
                  <div className="client flex w-full justify-between">
                    <p>Project 3</p>
                    <p>(3)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
