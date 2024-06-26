import { LuArrowUpRight } from "react-icons/lu";

const Homepage = () => {
  return (
    <div className="w-full h-full">
      {/* Navbar */}
      <div className="w-full h-[100px]"></div>

      <div className="flex justify-between w-full h-full">
        {/* Left Styling Ornaments */}
        <div className="w-[24rem] h-full relative">
          <img
            src="/vectors/ornament-medium-one.svg"
            className="bg-cover absolute bottom-[36.8rem] left-[3.3rem]"
          />
          <img
            src="/vectors/ornament-small.svg"
            className="bg-cover absolute top-[5.8rem] right-[10px]"
          />
          <img
            src="/vectors/ornament.svg"
            className="bg-cover absolute top-[14.7rem] right-[2.7rem]"
          />
          <img
            src="/vectors/ornament-big.svg"
            className="bg-cover absolute bottom-[25.7rem] left-[7.4rem]"
          />
        </div>

        {/* Content */}
        <div className="min-w-[920px] pl-[100px] h-full text-[#B1BAED]">
          <div className="flex flex-col w-full h-full text-left z-50 gap-[3rem]">
            <div className="flex flex-col mt-[10.3rem] gap-3">
              <p className="text-[1rem] font-medium ">Hi, my name is</p>
              <p className="text-[4.1rem] font-bold">Jenny Pieloor</p>
              <p className="text-[4.1rem] font-bold mt-[-24px] text-[#B1BAED]/60">
                I am a Frontend Dev.
              </p>
              <p className="text-[1rem] font-light w-[37.4rem] mt-5 text-[#B1BAED]/60">
                I specialize in turning concepts into engaging web realities.
                With expertise in modern web technologies and responsive design,
                I strive to create user-friendly interfaces that deliver
                exceptional digital experiences.
              </p>
            </div>

            <button className="w-[14.5rem] h-[3.2rem]">
              <div className="w-full h-full bg-gradient-to-b from-[#161A42] to-[#161A42]/10 text-[#B1BAED] border-[#161A42] rounded-md">
                <div className="flex justify-center items-center w-full h-full content gap-1">
                  <p className="text-[1rem]">Hire me</p>
                  <LuArrowUpRight size={18} />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Styling Ornaments */}
        <div className="w-[35rem] h-full">
          <img
            src="/vectors/ornament-medium-two.svg"
            className="bg-cover absolute bottom-[29.6rem] right-[21.4rem]"
          />
          <img
            src="/vectors/ornament-extrasmall.svg"
            className="bg-cover absolute bottom-[30rem] right-[19.5rem]"
          />
          <img
            src="/vectors/ornament.svg"
            className="bg-cover absolute bottom-[25.7rem] right-[33.5rem]"
          />
          <img
            src="/vectors/ornament-medium-three.svg"
            className="bg-cover absolute bottom-[10.2rem] right-[17.8rem]"
          />
          <img
            src="/vectors/ornament-regularsmall.svg"
            className="bg-cover absolute bottom-[14.4rem] right-[30.3rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
