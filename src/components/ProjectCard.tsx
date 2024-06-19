interface Props {
  title: string;
  description: string;
  techStacks: string[];
  imagePosition?: string;
  cardDetailsPosition?: string;
}

const ProjectCard = ({
  title,
  description,
  techStacks,
  imagePosition,
  cardDetailsPosition,
}: Props) => {
  return (
    <div className={`flex flex-1 ${imagePosition} w-full my-[3rem] relative`}>
      {/* Cover Photo */}
      <div className="bg-[#161930] w-[36rem] h-[19.2rem] rounded-2xl absolute z-20"></div>

      {/* Project Description */}
      <div
        className={`flex flex-col flex-1 ${cardDetailsPosition} gap-4 relative`}
      >
        <div className="flex flex-col">
          <p className="text-[#6EE7B7] text-[14px] tracking-wider">Featured Project</p>
          <p className="text-[#CCD6F6] text-[30px] font-semibold">{title}</p>
        </div>

        <div className="gradient-border-style-opposite w-[30rem] h-[9.5rem] rounded-2xl z-50 relative mt-1">
          <div className="average-content-style-opposite p-7">
            <p className="text-justify text-[14px] leading-6 line-clamp-5">
              {description}
            </p>
          </div>
        </div>

        {/* Techstack used */}
        <div className={`flex flex-col gap-3 ${cardDetailsPosition}`}>
          <div className="flex gap-4 font-extralight text-[14px]">
            {techStacks?.map((techStack) => {
              return <p>{techStack}</p>;
            })}
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/devJennyy">
              <img src="/icons/github-icon.svg"/>
            </a>
            <a href="https://github.com/devJennyy">
              <img src="/icons/arrow-up.svg"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
