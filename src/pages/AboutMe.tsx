const AboutMe = () => {
  return (
    <div className="max-w-[1536px] mx-auto h-full text-[#B1BAED]">
      <div className="flex justify-center items-center w-full h-full mt-[-1.5rem]">
        <p className="capitalize text-[8rem] tracking-widest">Get to know me</p>
        <img
          src="/fav/image-template.svg"
          className="absolute rotate-[-24deg]"
        />
        <img
          src="/fav/image-template.svg"
          className="absolute rotate-[-17deg]"
        />
        <img
          src="/fav/image-template.svg"
          className="absolute rotate-[-9deg]"
        />
        <img src="/fav/image-template.svg" className="absolute" />
      </div>
    </div>
  );
};

export default AboutMe;
