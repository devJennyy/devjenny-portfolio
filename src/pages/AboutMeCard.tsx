import DetailsCard from "../components/DetailsCard";

const AboutMeCard = () => {
  return (
    <div className="flex justify-center items-center w-full h-full gap-10">
      {/* <DetailsCard>
        <p>Uncover</p>
        <p>my Journey</p>
      </DetailsCard>
      <DetailsCard>
        <p>Open</p>
        <p>to see my</p>
        <p>Tech Stacks</p>
      </DetailsCard>
      <DetailsCard>
        <p>Wanna</p>
        <p>know more</p>
        <p>about me?</p>
      </DetailsCard> */}

      <DetailsCard
        cardStyle={"card-opposite-gradient-v2"}
        pageNumber={"01"}
        cardTitle={"Uncover My Journey"}
      >
        <div className="flex flex-col text-[14px] text-[#929DBC] text-left gap-4">
          <p>
            Hello! My name is Jenny. I am passionate about designing and
            developing innovative ideas that come to mind.
          </p>
          <p className="line-clamp-[9]">
            My journey in web development started in 2021 when I was tasked with
            UI/UX design for a software development project in which sparked my
            interest in web development. I started working as a freelance UI/UX
            Designer to improve my skills. I then transitioned to Frontend
            Development, taking commissions for websites from small businesses
            and students to further enhance my abilities. After graduating, I
            landed my first job as a part-time remote ...
          </p>
        </div>
      </DetailsCard>

      <DetailsCard
        cardStyle={"card-opposite-gradient-v2"}
        pageNumber={"02"}
        cardTitle={"My Tech Stacks"}
        techStackIcon={[
          {
            icon: "/icons/react.svg",
            name: "React",
          },
          {
            icon: "/icons/react.svg",
            name: "Typescript",
          },
          {
            icon: "/icons/react.svg",
            name: "Tailwind",
          },
          {
            icon: "/icons/react.svg",
            name: "Git",
          },
          {
            icon: "/icons/react.svg",
            name: "HTML5",
          },
          {
            icon: "/icons/react.svg",
            name: "CSS3",
          },
          {
            icon: "/icons/react.svg",
            name: "JavaScript",
          },
          {
            icon: "/icons/react.svg",
            name: "Figma",
          },
          {
            icon: "/icons/react.svg",
            name: "GitKraken",
          },
          {
            icon: "/icons/react.svg",
            name: "HeadlessUI",
          },
        ]}
      ></DetailsCard>

      <DetailsCard
        cardStyle={"card-opposite-gradient-v2"}
        pageNumber={"03"}
        cardTitle={"..."}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center rounded-full bg-[#161A42]/70 px-3 py-1">
            <p className="text-[12px]">This page is under Development</p>
          </div>
        </div>
      </DetailsCard>
    </div>
  );
};

export default AboutMeCard;
