import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Example Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      techStacks: ["ReactJS", "Typescript", "TailwindCSS"],
    },
    {
      title: "Example Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      techStacks: ["ReactJS", "Typescript", "TailwindCSS"],
    },
  ];
  return (
    <div className="max-w-[1536px] mx-auto text-[#CCD6F6] overflow-y-auto">
      <div className="w-2/3 pl-[3.5rem] relative overflow-y-auto no-scrollbar">
        <Header pageNumber={3} pageTitle={"Some Things I’ve Built"} />

       <div className="flex flex-col overflow-y-auto">
       {projects?.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              description={project.description}
              techStacks={project.techStacks}
            />
          );
        })}
       </div>
      </div>
    </div>
  );
};

export default Projects;
