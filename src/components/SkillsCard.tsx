interface Props {
  icons: string;
  title: string;
}

const SkillsCard = ({ icons, title }: Props) => {
  return (
    <div className="flex flex-col gap-3 w-full h-full">
      {/* <div className="flex justify-center items-center bg-[#161A42] rounded-2xl h-[3.5rem]"></div> */}
      <div className="gradient-small-border h-[3.5rem]">
        <div className="icons">
          <img src={icons} className="h-[1.5rem]" />
        </div>
      </div>
      <p className="text-[12px] text-[#B1BAED]/80">{title}</p>
    </div>
  );
};

export default SkillsCard;
