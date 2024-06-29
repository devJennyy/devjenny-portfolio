const Experience = () => {
  const techStackIcon = [
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
  ];
  return (
    <div className="flex w-full h-full text-[#CCD6F6]">
      <div className="w-1/4 h-full border-r-2 border-[#161A42]">
        <div className="flex flex-1 justify-center items-center w-[40rem] h-full text-[40px] font-extralight gap-3 rotate-[-90deg]">
          <p className="tracking-[10px] mt-[1rem] text-[#CCD6F6]/60">
            Where I’ve
          </p>
          <p className="tracking-[10px] mt-[1rem]">Worked</p>
        </div>
      </div>
      {/* <div className="flex flex-col flex-1 justify-center w-full h-full">
        <div className="flex items-start w-full h-[16rem] border-b-2 border-[#161A42] pt-[4rem]">
          <div className="h-full w-[14rem]">
            <p className="text-[50px] font-extralight">01</p>
          </div>
          <div className="flex flex-col w-[35rem] h-full text-left">
            <p className="text-[50px] font-semibold">Frontend Developer</p>
            <div className="flex flex-col gap-1 mt-5">
              <p>May 2024 - Present</p>
              <p className="text-[#CCD6F6]/60">A remote part-time job.</p>
            </div>
          </div>
          <div className="w-[10rem] h-full pt-5 pl-14">
            <img src="/icons/arrow-upward.svg" />
          </div>
        </div>
        <div className="flex items-center w-full h-[16rem] pt-[3rem]">
          <div className="h-full w-[14rem]">
            <p className="text-[50px] font-extralight">02</p>
          </div>
          <div className="flex flex-col w-[35rem] h-full text-left">
            <p className="text-[50px] font-semibold">Frontend Developer</p>
            <div className="flex flex-col gap-1 mt-5">
              <p>January 2024 - June 2024</p>
              <p className="text-[#CCD6F6]/60">
                A freelance job working on a dynamic commissions for clients.
              </p>
            </div>
          </div>
          <div className="w-[10rem] h-full pt-5 pl-14">
            <img src="/icons/arrow-upward.svg" />
          </div>
        </div>
        <div className="flex items-start w-full h-[16rem] border-t-2 border-[#161A42] pt-[4rem]">
          <div className="h-full w-[14rem]">
            <p className="text-[50px] font-extralight">03</p>
          </div>
          <div className="flex flex-col w-[35rem] h-full text-left">
            <p className="text-[50px] font-semibold">UI / UX Designer</p>
            <div className="flex flex-col gap-1 mt-5">
              <p>Nov 2022 - May 2023</p>
              <p className="text-[#CCD6F6]/60">Remote Freelancer.</p>
            </div>
          </div>
          <div className="w-[10rem] h-full pt-5 pl-14">
            <img src="/icons/arrow-upward.svg" />
          </div>
        </div>
      </div> */}

      <div className="w-full">
        <div className="flex items-start w-full h-[16rem] pt-[6rem]">
          <div className="h-full w-[14rem]">
            <p className="text-[50px] font-extralight">01</p>
          </div>
          <div className="flex flex-col w-[45rem] h-full text-left">
            <p className="text-[50px] font-semibold">Frontend Developer</p>
            <div className="flex flex-col gap-2 mt-8">
              <p className="text-[#CCD6F6]/60">Remote Part-time Job</p>
              <p>May 2024 - Present</p>
            </div>

            <div className="w-full h-[1px] border border-[#161A42] my-[3rem]"></div>

            {/* Details */}
            <div className="flex flex-col gap-5 text-[#CCD6F6]/70 font-light">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus alias reiciendis beatae nemo facilis a maiores
                praesentium odit doloremque cumque quaerat aut quis nostrum
                autem, excepturi cupiditate porro atque natus.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt deleniti ipsa hic beatae accusantium necessitatibus eos
                accusamus fuga sint illum expedita vero, ab consequuntur ducimus
                iure molestiae dicta quis commodi.
              </p>
            </div>

            {/* Tech Stack With Icon*/}
            <div className="flex flex-col w-full h-full z-25 mt-16 gap-5">
              <p className="font-medium">Tech Used:</p>
              <div className="grid grid-cols-4 items-center justify-center w-fit h-full gap-6">
                {techStackIcon?.map((techStackUsedIcons) => {
                  return (
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex justify-center items-center bg-[#161A42]/70 w-[4.5rem] h-[3.6rem] rounded-xl gradient-border">
                        <div className="border-background">
                          <img
                            src={techStackUsedIcons.icon}
                            className="h-[1.7rem] object-cover"
                          />
                        </div>
                      </div>
                      <p className="text-[13px]">{techStackUsedIcons.name}</p>
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

export default Experience;
