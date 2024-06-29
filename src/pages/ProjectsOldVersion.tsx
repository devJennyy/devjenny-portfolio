import Header from "../components/Header";
import ProjectBentoCard from "../components/ProjectBentoCard";
import ProjectCard from "../components/ProjectCard";

const ProjectsOldVersion = () => {
  const otherProjects = [
    {
      imageCardPosition: "flex-col",
      detailsCardClassname: "min-h-[18rem] gradient-project-style-one",
      githubLink: "https://github.com/devJennyy",
      websiteLink: "https://github.com/devJennyy",
      title: "Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione aliquam deserunt repellendus.",
      techStack: ["UI & UX Design", "Figma", "Wireframe"],
      gradientPosition: "bg-[length:400px_390px] bg-[center_bottom_-12rem]",
    },
    {
      imageCardPosition: "flex-col-reverse",
      detailsCardClassname: "min-h-[21.5rem] gradient-project-style-two",
      githubLink: "https://github.com/devJennyy",
      websiteLink: "https://github.com/devJennyy",
      title: "Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione aliquam deserunt repellendus.",
      techStackIcon: [
        {
          icon: "/icons/react.svg",
          name: "React",
        },
        {
          icon: "/icons/react.svg",
          name: "React",
        },
        {
          icon: "/icons/react.svg",
          name: "React",
        },
      ],
      gradientPosition: "bg-[length:300px_300px] bg-[top_-9rem_left_-9rem]",
    },
    {
      imageCardPosition: "flex-col",
      detailsCardClassname: "min-h-[18rem] gradient-project-style-two",
      githubLink: "https://github.com/devJennyy",
      websiteLink: "https://github.com/devJennyy",
      title: "Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione aliquam deserunt repellendus.",
      techStack: ["UI & UX Design", "Figma", "Wireframe"],
      gradientPosition: "bg-[length:400px_390px] bg-[top_-10rem_left_-10rem]",
    },
  ];
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
          <div className="flex flex-col w-full h-full my-[10rem] gap-28">
            <div className="flex gap-5 justify-center items-center relative">
              <div className="gradient-border-bottom-small left-0"></div>
              <p className="text-[1.8rem] font-bold">
                Other Noteworthy Projects
              </p>
              <div className="gradient-border-bottom-small right-0"></div>
            </div>

            <div className="flex justify-between w-full h-[30rem] gap-5">
              {otherProjects?.map((otherProject) => {
                return (
                  <ProjectBentoCard
                    imageCardPosition={otherProject.imageCardPosition}
                    detailsCardClassname={otherProject.detailsCardClassname}
                    githubLink={otherProject.githubLink}
                    websiteLink={otherProject.websiteLink}
                    title={otherProject.title}
                    description={otherProject.description}
                    techStack={otherProject.techStack}
                    techStackIcon={otherProject.techStackIcon}
                    gradientPosition={otherProject.gradientPosition}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full sticky"></div>
    </div>
  );
};

export default ProjectsOldVersion;
