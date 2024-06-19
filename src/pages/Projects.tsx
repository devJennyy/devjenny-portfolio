import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Example Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      techStacks: ["ReactJS", "Typescript", "TailwindCSS"],
      imagePosition: "flex-row",
      cardDetailsPosition: "items-end text-right",
    },
    {
      title: "Example Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      techStacks: ["ReactJS", "Typescript", "TailwindCSS"],
      imagePosition: "flex-row-reverse",
      cardDetailsPosition: "items-start text-left",
    },
    {
      title: "Example Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      techStacks: ["ReactJS", "Typescript", "TailwindCSS"],
      imagePosition: "flex-row",
      cardDetailsPosition: "items-end text-right",
    },
  ];
  return (
    <div className="flex max-w-[1536px] h-full mx-auto text-[#CCD6F6]">
      <div className="flex flex-col w-2/3 pl-[3.5rem] relative">
        <Header pageNumber={3} pageTitle={"Some Things I’ve Built"} />

        <div className="overflow-y-auto flex flex-col flex-1 no-scrollbar">
          {/* Featured Projects */}
          {projects?.map((project) => {
            return (
              <ProjectCard
                title={project.title}
                description={project.description}
                techStacks={project.techStacks}
                imagePosition={project.imagePosition}
                cardDetailsPosition={project.cardDetailsPosition}
              />
            );
          })}

          {/* Other Projects */}
          <div className="flex flex-col w-full h-full my-[10rem] gap-32">
            <div className="flex gap-5 justify-center items-center relative">
              <div className="gradient-border-bottom-small left-0"></div>
              <p className="text-[1.8rem] font-bold">
                Other Noteworthy Projects
              </p>
              <div className="gradient-border-bottom-small right-0"></div>
            </div>

            <div className="flex justify-between w-full h-[30rem] gap-5">
              {/* Project 01 */}
              <div className="flex flex-col gap-5 w-full h-full">
                <div className="bg-[#111534] w-full h-full rounded-xl gradient-border">
                  <div className="average-content"></div>
                </div>
                <div className="bg-[#000000]/15 w-full min-h-[18rem] rounded-xl gradient-project-style-one">
                  <div className="project-style-one relative bg-[url('/vectors/bg-circle-light.svg')] bg-no-repeat bg-[length:400px_390px] bg-[center_bottom_-12rem]">
                    {/* Details */}
                    <div className="flex flex-col justify-between gap-5 p-6 w-full h-full text-[#CCD6F6]">
                      <div className="flex flex-col gap-5">
                        {/* Card 01 */}
                        <div className="flex items-start justify-between h-10">
                          <img src="devjenny-logo.svg" className="w-5" />
                          <a href="https://github.com/devJennyy">
                            <img src="/icons/arrow-up.svg" />
                          </a>
                        </div>
                        {/* Projects Description */}
                        <div className="flex flex-col text-left gap-2">
                          <p className="font-medium text-[20px]">Title Here</p>
                          <p className="text-[13px] text-[#929DBC]/80">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ratione aliquam deserunt repellendus.
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex gap-4 font-extralight text-[12px]">
                        <p>UI & UX Design</p>
                        <p>Figma</p>
                        <p>Wireframe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 02 */}
              <div className="flex flex-col gap-5 w-full h-full">
                <div className="bg-[#000000]/15 w-full min-h-[21.5rem] rounded-xl gradient-project-style-two">
                  <div className="project-style-two relative bg-[url('/vectors/bg-circle-light.svg')] bg-no-repeat bg-[length:300px_300px] bg-[top_-9rem_left_-9rem]">
                    {/* Details */}
                    <div className="flex flex-col justify-between gap-5 p-6 w-full h-full text-[#CCD6F6]">
                      <div className="flex flex-col gap-5">
                        {/* Card 02 */}
                        <div className="flex items-start justify-between h-10">
                          <img src="devjenny-logo.svg" className="w-5" />
                          <a href="https://github.com/devJennyy">
                            <img src="/icons/arrow-up.svg" />
                          </a>
                        </div>
                        {/* Projects Description */}
                        <div className="flex flex-col text-left gap-2">
                          <p className="font-medium text-[20px]">Title Here</p>
                          <p className="text-[13px] text-[#929DBC]/80">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ratione aliquam deserunt repellendus.
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex items-center justify-center w-full h-full gap-4">
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex justify-center items-center bg-[#161A42]/70 w-[3.5rem] h-[2.8rem] rounded-xl">
                            <img
                              src="/icons/react.svg"
                              className="h-[1.2rem] object-cover"
                            />
                          </div>
                          <p className="text-[12px]">React</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex justify-center items-center bg-[#161A42]/70 w-[3.5rem] h-[2.8rem] rounded-xl">
                            <img
                              src="/icons/react.svg"
                              className="h-[1.2rem] object-cover"
                            />
                          </div>
                          <p className="text-[12px]">React</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex justify-center items-center bg-[#161A42]/70 w-[3.5rem] h-[2.8rem] rounded-xl">
                            <img
                              src="/icons/react.svg"
                              className="h-[1.2rem] object-cover"
                            />
                          </div>
                          <p className="text-[12px]">React</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#111534] w-full h-full rounded-xl gradient-border">
                  <div className="average-content"></div>
                </div>
              </div>

              {/* Project 03 */}
              <div className="flex flex-col gap-5 w-full h-full">
                <div className="bg-[#111534] w-full h-full rounded-xl gradient-border">
                  <div className="average-content"></div>
                </div>
                <div className="bg-[#000000]/15 w-full min-h-[18rem] rounded-xl gradient-project-style-two">
                  <div className="project-style-two relative bg-[url('/vectors/bg-circle-light.svg')] bg-no-repeat bg-[length:400px_390px] bg-[top_-10rem_left_-10rem]">
                    {/* Details */}
                    <div className="flex flex-col justify-between gap-5 p-6 w-full h-full text-[#CCD6F6]">
                      <div className="flex flex-col gap-5">
                        {/* Card 03 */}
                        <div className="flex items-start justify-between h-10">
                          <img src="devjenny-logo.svg" className="w-5" />
                          <a href="https://github.com/devJennyy">
                            <img src="/icons/arrow-up.svg" />
                          </a>
                        </div>
                        {/* Projects Description */}
                        <div className="flex flex-col text-left gap-2">
                          <p className="font-medium text-[20px]">Title Here</p>
                          <p className="text-[13px] text-[#929DBC]/80">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ratione aliquam deserunt repellendus.
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex gap-4 font-extralight text-[12px]">
                        <p>UI & UX Design</p>
                        <p>Figma</p>
                        <p>Wireframe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full sticky"></div>
    </div>
  );
};

export default Projects;
