interface Props {
  title: string;
  description: string;
  techStacks: string[];
}

const ProjectCard = ( {title, description, techStacks} : Props) => {
  return (
    <div className="flex flex-1 w-full my-[3rem] items-start">
      {/* Images */}
      <div className="bg-[#161930] w-[38rem] h-[21.5rem] rounded-2xl absolute z-20"></div>

      <div className="flex flex-col flex-1 justify-start items-end gap-4 relative">
        <div className="flex flex-col flex-1 justify-start items-end relative">
          <p className="text-[#6EE7B7]">Featured Project</p>
          <p className="text-[#CCD6F6] text-[34px] font-semibold">
           {title}
          </p>
        </div>

        {/* Project Description */}
        <div className="gradient-border-style-opposite w-[30rem] h-[10rem] rounded-2xl z-50 relative mt-3">
          <div className="average-content-style-opposite p-5">
            <p className="text-justify text-[15px] leading-6 line-clamp-5">
             {description}
            </p>
          </div>
        </div>

        {/* Techstack used */}
        <div className="flex flex-col items-end gap-3">
          <div className="flex gap-4 font-extralight text-[15px]">
            {techStacks?.map((techStack) => {
              return (
                <p>{techStack}</p>
              )
            })}
          </div>
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
  );
};

export default ProjectCard;
