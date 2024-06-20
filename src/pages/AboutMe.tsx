import Header from "../components/Header";
import SkillsCard from "../components/SkillsCard";

const AboutMe = () => {
  const skills = [
    {
      icons: "/icons/react.svg",
      title: "ReactJs",
    },
    {
      icons: "/icons/react.svg",
      title: "Typescript",
    },
    {
      icons: "/icons/react.svg",
      title: "TailwindCSS",
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
      title: "Node.Js",
    },
    {
      icons: "/icons/react.svg",
      title: "Laravel",
    },
    {
      icons: "/icons/react.svg",
      title: "Flutter",
    },
    {
      icons: "/icons/react.svg",
      title: "Git",
    },
    {
      icons: "/icons/react.svg",
      title: "Figma",
    },
    {
      icons: "/icons/react.svg",
      title: "Headless UI",
    },
  ];
  return (
    <div className="max-w-[1536px] mx-auto h-full text-[#CCD6F6]">
      <div className="w-2/3 pl-[3.5rem] relative">
        <Header pageNumber={1} pageTitle={"About Me"} />

        <div className="flex flex-1 w-full gap-[8rem] mt-10">
          {/* Images */}
          <div className="flex w-full h-full relative">
            <img
              src="/fav/border.svg"
              className="absolute left-[3.5rem] top-[1.5rem] min-w-[16.5rem] h-[20.2rem]"
            />
            <img
              src="/fav/jennypieloor.png"
              className="min-w-[16.5rem] h-[20.2rem] absolute left-[5rem] rounded-sm"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-[3.5rem] w-[94rem]">
            <div className="flex flex-col gap-[1.5rem] text-[14px] text-[#B1BAED]/80 font-regular text-justify tracking-wide">
              <p>
                Hello! My name is Jenny. I am passionate about designing and
                developing innovative ideas that come to mind.
              </p>
              <p>
                My journey in web development began in 2021 when I was assigned
                to be a UI/UX Designer for a software development project. This
                experience sparked my interest in web development. While in
                college, I started working as a freelance UI/UX Designer to
                improve my skills. I then transitioned to Frontend Development,
                taking commissions for websites from small businesses and
                students to further enhance my abilities. After graduating, I
                landed my first job as a part-time remote Frontend Developer,
                working on an outsourced basis.
              </p>
              <p>
                As an aspiring Frontend developer, I am passionate about
                crafting solutions that not only meet client needs but also
                inspire users. I thrive on the challenge of creating innovative
                and user-friendly websites that make a meaningful impact.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-col items-start">
              <p className="bg-gradient-to-r from-[#BAC1FF] via-[#63FEFE] to-[#D770F1] bg-clip-text text-transparent font-medium tracking-wide">
                My Tech Stacks:
              </p>
              <div className="grid grid-cols-6 w-full h-full gap-5 mt-7">
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
