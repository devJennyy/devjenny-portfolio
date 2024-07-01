interface Props {
  imageCardPosition: string;
  detailsCardClassname: string;
  githubLink: string;
  websiteLink: string;
  title: string;
  description: string;
  gradientPosition: string;
  techStack?: string[];
  techStackIcon?: {
    icon?: string;
    name?: string;
  }[];
}

const ProjectBentoCard = ({
  imageCardPosition,
  detailsCardClassname,
  githubLink,
  websiteLink,
  title,
  description,
  techStack,
  techStackIcon,
  gradientPosition,
}: Props) => {
  return (
    <div className={`flex gap-7 w-full h-full ${imageCardPosition}`}>
      {/* Cover Photo */}
      <div className="bg-[#111534] w-full h-full rounded-xl faded-gradient">
        <div className="faded-gradient-bg"></div>
      </div>

      {/* Details */}
      <div
        className={`bg-[#000000]/15 w-full rounded-xl gradient-project-style-one ${detailsCardClassname}`}
      >
        <div
          className={`project-style-one relative bg-[url('/vectors/bg-circle-light.svg')] bg-no-repeat ${gradientPosition}`}
        >
          <div className="flex flex-col justify-between gap-5 p-6 w-full h-full text-[#CCD6F6]">
            <div className="flex flex-col gap-5">
              {/* Links */}
              <div className="flex items-start justify-between h-10">
                <img src="devjenny-logo.svg" className="w-6" />

                <div className="flex gap-2">
                  <a href={githubLink}>
                    <img
                      src="/icons/github-icon.svg"
                      className="h-[1.1rem] object-cover"
                    />
                  </a>
                  <a href={websiteLink}>
                    <img
                      src="/icons/arrow-up.svg"
                      className="h-[1.1rem] object-cover"
                    />
                  </a>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col text-left gap-2">
                <p className="font-medium text-[20px]">{title}</p>
                <p className="text-[14px] text-[#929DBC]/80">{description}</p>
              </div>
            </div>

            {/* Tech Stack With Icon*/}
            <div className="flex items-center justify-center w-full h-full gap-4">
              {techStackIcon?.map((techStackUsedIcons) => {
                return (
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex justify-center items-center bg-[#161A42]/70 w-[4.3rem] h-[3.3rem] rounded-xl">
                      <img
                        src={techStackUsedIcons.icon}
                        className="h-[1.5rem] object-cover"
                      />
                    </div>
                    <p className="text-[12px]">{techStackUsedIcons.name}</p>
                  </div>
                );
              })}
            </div>

            {/* Tech Stacks */}
            <div className="flex gap-4 font-extralight text-[13px]">
              {techStack?.map((techStackUsed) => {
                return <p>{techStackUsed}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBentoCard;
