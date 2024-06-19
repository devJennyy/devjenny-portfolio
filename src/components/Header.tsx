interface Props {
  pageNumber: number;
  pageTitle: string;
}

const Header = ({ pageNumber, pageTitle }: Props) => {
  return (
    <div className="flex items-center text-left w-full h-[10rem] gap-[3.5rem] sticky top-2 z-50">
      <div className="flex items-end gap-[1.5rem]">
        <p className="text-[27px] font-bold text-[#6EE7B7]">0{pageNumber}.</p>
        <p className="text-[32px] font-bold text-[#CCD6F6]">{pageTitle}</p>
      </div>
      <div className="flex flex-1 border border-[#161A42]"></div>
    </div>
  );
};

export default Header;
