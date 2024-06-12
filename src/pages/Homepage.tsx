const Homepage = () => {
  return (
    <div className="max-w-[1536px] mx-auto h-full text-[#E2E4E9] relative">
      <div className="flex flex-col justify-center text-left w-2/3 h-full pl-[10rem] gap-[4rem]">
        <div className="flex flex-col gap-3">
          <p className="text-[18px] font-medium">Hi, my name is</p>
          <p className="text-[70px] font-bold">Jenny Pieloor</p>
          <p className="text-[30px] font-regular text-[#B1BAED]">
            Turning concepts into captivating web realities.
          </p>
        </div>

        <div className="gradient-border-bottom"></div>

        <div className="flex flex-col gap-10">
          <p className="text-[20px] font-light">
            A passionate Front-end Developer and UI/UX Designer.
          </p>
          <div className="flex gap-3 font-regular w-full h-[3.2rem]">
            <button className="flex justify-center items-center w-[16.5rem] h-full gradient-border">
              <div className="average-content gap-3">
                <p>View all works</p>
                <img src="/icons/view.svg" className="w-[1.3rem]" />
              </div>
            </button>
            <button className="flex justify-center items-center w-[16.5rem] h-full gradient-all-borders">
              <div className="content gap-3">
                <p>Contact me</p>
                <img src="/icons/contact.svg" className="w-[1rem]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
