const Projects = () => {
  return (
    <div className="max-w-[1280px] mx-auto h-full relative">
      <img src="/vectors/ellipse-small.svg" className="absolute top-[12rem] left-[35rem]"/>
      <img src="/vectors/ellipse-medium.svg" className="absolute top-[27.5rem] right-5"/>
      <img src="/vectors/ellipse-large.svg" className="absolute top-[32.5rem] left-4"/>
      <div className="flex flex-col justify-center items-center w-full h-full gap-5">
        <p className="text-[64px] text-[#B1BAED] font-semibold w-[50rem] leading-[5rem]">
          Some Things I Designed & Developed
        </p>
        <p className="text-[18px] font-normal text-[#B1BAED]/60 w-[35rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam vero
          laudantium nesciunt laudanti.
        </p>
        <button className="relative mt-[2rem]">
          <span className="bg-gradient-to-tr from-[#70DBE3] via-[#52ACEE] to-[#1639F4] bg-clip-text text-transparent text-[15px]">
            See Projects
          </span>
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-tr from-[#70DBE3] via-[#52ACEE] to-[#1639F4]"></span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
