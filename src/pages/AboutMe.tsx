const AboutMe = () => {
  const skills = [
    {
      image: "/icons/react.svg",
      title: "React",
    },
    {
      image: "/icons/react.svg",
      title: "Typescript",
    },
    {
      image: "/icons/react.svg",
      title: "Tailwind",
    },
    {
      image: "/icons/react.svg",
      title: "HTML",
    },
    {
      image: "/icons/react.svg",
      title: "CSS",
    },
    {
      image: "/icons/react.svg",
      title: "JavaScript",
    },
    {
      image: "/icons/react.svg",
      title: "ShadCN",
    },
    {
      image: "/icons/react.svg",
      title: "Figma",
    },
    {
      image: "/icons/react.svg",
      title: "Headless UI",
    },
    {
      image: "/icons/react.svg",
      title: "Material Icon",
    },
  ];
  return (
    <div className="max-w-[1536px] mx-auto h-full text-[#E2E4E9] relative">
      <div className="w-2/3 pt-[7rem] pl-[3.5rem]">
        <div className="flex flex-1 items-center text-left w-full gap-[1.5rem]">
          <div className="flex items-end gap-[1.5rem]">
            <p className="text-[27px] font-bold text-[#6EE7B7]">01.</p>
            <p className="text-[32px] font-bold text-[#CCD6F6]">About Me</p>
          </div>
          <div className="flex flex-1 border border-[#161A42]"></div>
        </div>

        <div className="flex flex-1 w-full mt-[6rem] gap-[8rem]">
          {/* Images */}
          <div className="min-w-[20rem] h-[20rem] bg-gradient-to-t from-[#8454EB]/60 to-[#3461FF]/60 rounded-md"></div>

          {/* Details */}
          <div className="flex flex-col gap-[3.5rem]">
            <div className="flex flex-col gap-[1.5rem]">
              <p className="text-[15px] font-regular text-justify tracking-wide">
                Hello! My name is Lorem ipsum dolor sit amet, consectetur
                adipiscing elitery onichan. Nullam dignissim libero id orci
                pellentesque, id condimentum metus onec euismod turpis a lorem
                temporatuir lore.
              </p>
              <p className="text-[15px] font-regular text-justify tracking-wide">
                Hello! My name is Lorem ipsum dolor sit amet, consectetur
                adipiscing elitery onichan. Nullam dignissim libero id orci
                pellentesque, id condimentum metus onec euismod turpis a lorem
                temporatuir lore.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#6EE7B7] font-medium tracking-wide">
                My skillset includes:
              </p>
              <div className="grid grid-cols-5 w-full h-full gap-5 mt-5 pr-10">
                {skills?.map((skill) => {
                  return (
                    <div className="flex flex-col gap-3 w-full h-full">
                      {/* <div className="flex justify-center items-center bg-[#161A42] rounded-2xl h-[3.5rem]"></div> */}
                      <div className="gradient-small-border h-[3.5rem]">
                        <div className="icons">
                          <img src={skill.image} className="w-[2rem]" />
                        </div>
                      </div>
                      <p className="text-[14px]">{skill.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
