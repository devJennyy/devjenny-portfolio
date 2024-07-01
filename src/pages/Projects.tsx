const Projects = () => {
  return (
    <div className="w-full h-full">
      {/* Hero */}
      {/* <div className="max-w-[1280px] mx-auto h-full relative">
        <img
          src="/vectors/ellipse-small.svg"
          className="absolute top-[12rem] left-[35rem]"
        />
        <img
          src="/vectors/ellipse-medium.svg"
          className="absolute top-[27.5rem] right-5"
        />
        <img
          src="/vectors/ellipse-large.svg"
          className="absolute top-[32.5rem] left-4"
        />
        <div className="flex flex-col justify-center items-center w-full h-full gap-5">
          <p className="text-[64px] text-[#B1BAED] font-semibold w-[50rem] leading-[5rem]">
            Some Things I Designed & Developed
          </p>
          <p className="text-[18px] font-normal text-[#B1BAED]/60 w-[35rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            vero laudantium nesciunt laudanti.
          </p>
          <button className="relative mt-[2rem]">
            <span className="bg-gradient-to-tr from-[#70DBE3] via-[#52ACEE] to-[#1639F4] bg-clip-text text-transparent text-[15px]">
              See Projects
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-tr from-[#70DBE3] via-[#52ACEE] to-[#1639F4]"></span>
          </button>
        </div>
      </div> */}

      {/* Featured Project for Mobile */}
      <div className="flex w-full h-full text-[#CCD6F6]">
        {/* Featured Cover */}
        <div className="w-1/2 h-full z-50">
          {/* Left Layer Blur */}
          <div className="w-full h-full">
            <img
              src="/vectors/layer-blur-small.svg"
              className="absolute top-[7.3rem] left-[17.2rem]"
            />
            <img
              src="/vectors/layer-blur-large.svg"
              className="absolute top-[6.1rem] left-[2.9rem]"
            />
            <img
              src="/vectors/layer-blur-extrasmall.svg"
              className="absolute top-[16.7rem] left-[15.2rem]"
            />
          </div>

          {/* Right Layer Blur */}
          <div className="w-full h-full">
            <img
              src="/vectors/layer-blur-extrasmall.svg"
              className="absolute bottom-[30.2rem] left-[42.2rem]"
            />
            <img
              src="/vectors/layer-blur-medium.svg"
              className="absolute bottom-[22.5rem] left-[39.7rem]"
            />
            <img
              src="/vectors/layer-blur-smaller.svg"
              className="absolute bottom-[22.4rem] left-[40.5rem]"
            />
          </div>

          {/* Main Feature */}
          <img
            src="/fav/mobile-project-template.png"
            className="absolute bottom-[18.2rem] left-[16.6rem]"
          />

          {/* Bottom Highlight */}
          <img
            src="/fav/radial-gradient.svg"
            className="absolute bottom-[11rem] left-[14rem]"
          />
        </div>

        {/* Description */}
        <div className="w-1/2 h-full">
          {/* Project Description */}
          <div className="flex flex-col flex-1 items-start justify-center text-left gap-4 relative h-full pl-5">
            <div className="flex flex-col">
              <p className="bg-gradient-to-tr from-[#70DBE3] via-[#52ACEE] to-[#1639F4] bg-clip-text text-transparent font-semibold">
                Featured Project
              </p>
              <p className="text-[#CCD6F6] text-[34px] font-semibold">
                Example Project
              </p>
            </div>

            <div className="gradient-border-style-opposite w-[32rem] rounded-2xl z-50 relative mt-1">
              <div className="average-content-style-opposite p-6">
                <p className="text-justify leading-6 line-clamp-5">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
            </div>

            {/* Techstack used */}

            <div className="flex gap-4 font-extralight mt-2">
              <p>React</p>
              <p>Typescript</p>
              <p>TailwindCSS</p>
            </div>

            {/* Direct Links */}
            <div className="flex gap-4">
              <a href="https://github.com/devJennyy">
                <img src="/icons/github-icon.svg" />
              </a>
              <a href="https://github.com/devJennyy">
                <img src="/icons/arrow-up.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
