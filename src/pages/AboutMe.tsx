const AboutMe = () => {
  return (
    <div className="max-w-[1536px] mx-auto h-full text-[#E2E4E9] relative">
      <div className="w-2/3 pt-[7rem] pl-[7rem]">
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
              adipiscing elitery onichan. Nullam dignissim libero id orci pellentesque, id
              condimentum metus onec euismod turpis a lorem temporatuir lore.
            </p>
            <p className="text-[15px] font-regular text-justify tracking-wide">
              Hello! My name is Lorem ipsum dolor sit amet, consectetur
              adipiscing elitery onichan. Nullam dignissim libero id orci pellentesque, id
              condimentum metus onec euismod turpis a lorem temporatuir lore.
            </p>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#6EE7B7] font-medium tracking-wide">My skill set includes:</p>
              <div className="grid grid-cols-6 w-full h-[3.2rem] gap-4 mt-5">
                <div className="gradient-small-border">
                  <div className="icons"></div>
                </div>
                <div className="gradient-small-border">
                  <div className="icons"></div>
                </div>
                <div className="gradient-small-border">
                  <div className="icons"></div>
                </div>
                <div className="gradient-small-border">
                  <div className="icons"></div>
                </div>
                <div className="gradient-small-border">
                  <div className="icons"></div>
                </div>
                <div className="gradient-small-border">
                  <div className="icons"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
