import Header from "../components/Header";
import SkillsCard from "../components/SkillsCard";

const Experience = () => {
  const skills = [
    {
      icons: "/icons/react.svg",
      title: "React",
    },
    {
      icons: "/icons/react.svg",
      title: "Typescript",
    },
    {
      icons: "/icons/react.svg",
      title: "Tailwind",
    },
  ];
  return (
    <div className="max-w-[1536px] mx-auto h-full text-[#CCD6F6] relative">
      <div className="w-2/3 pl-[3.5rem] relative">
        <Header pageNumber={2} pageTitle={"Where I’ve Worked"} />

        <div className="flex flex-1 items-start w-full pl-[4rem]">
          <div className="border-l-4 h-[12rem] rounded-full border-[#161A42]"></div>
          <div className="border-l-4 h-[3rem] border-[#6EE7B7] rounded-full ml-[-4px]"></div>
          <div className="flex ml-[2rem] mt-3 gap-[5rem]">
            <p className="text-[#6EE7B7] w-full">Front-end Developer</p>

            <div className="flex flex-col items-start gap-10">
              {/* Work Title */}
              <div className="flex flex-col items-start gap-2">
                <p className="font-semibold text-[20px]">Front-end Developer</p>
                <div className="flex flex-col text-left font-regular text-[15px] text-[#8892B0] gap-1">
                  <p>Private Company - Part time</p>
                  <p>May 2024 - Present</p>
                  <p>Remote</p>
                </div>
              </div>

              {/* Details */}
              <p className="text-justify text-[15px]">
                As a Front-End Developer working part-time on an outsourced
                basis, I focus on building dynamic, responsive, and
                user-friendly web applications. My role involves translating
                design wireframes into high-quality code and creating visually
                appealing and highly functional web pages using technologies
                such as React, Tailwind CSS, and TypeScript.
              </p>

              {/* Skills */}
              <div className="flex flex-col items-start">
                <p className="text-[#6EE7B7] font-medium tracking-wide">
                  Skills:
                </p>
                <div className="grid grid-cols-5 w-full h-full gap-5 mt-5 pr-10">
                  {skills?.map((skill) => {
                    return (
                      <SkillsCard icons={skill.icons} title={skill.title} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
