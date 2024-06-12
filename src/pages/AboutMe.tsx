import Header from "../components/Header";
import SkillsCard from "../components/SkillsCard";

const AboutMe = () => {
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
    {
      icons: "/icons/react.svg",
      title: "HTML",
    },
    {
      icons: "/icons/react.svg",
      title: "CSS",
    },
    {
      icons: "/icons/react.svg",
      title: "JavaScript",
    },
    {
      icons: "/icons/react.svg",
      title: "ShadCN",
    },
    {
      icons: "/icons/react.svg",
      title: "Figma",
    },
    {
      icons: "/icons/react.svg",
      title: "Headless UI",
    },
    {
      icons: "/icons/react.svg",
      title: "Material Icon",
    },
  ];
  return (
    <div className="max-w-[1536px] mx-auto h-full text-[#CCD6F6]">
      <div className="w-2/3 pl-[3.5rem] relative">
        <Header pageNumber={1} pageTitle={"About Me"} />

        <div className="flex flex-1 w-full gap-[8rem]">
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

            {/* Skills */}
            <div className="flex flex-col items-start">
              <p className="text-[#6EE7B7] font-medium tracking-wide">
                My skillset includes:
              </p>
              <div className="grid grid-cols-5 w-full h-full gap-5 mt-5 pr-10">
                {skills?.map((skill) => {
                  return <SkillsCard icons={skill.icons} title={skill.title} />;
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
