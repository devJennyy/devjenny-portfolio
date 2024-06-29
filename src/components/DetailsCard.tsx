/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
  cardStyle: string;
  pageNumber?: string;
  cardTitle?: string;
  techStackIcon?: {
    icon?: string;
    name?: string;
  }[];
  children?: any;
}

const DetailsCard = ({
  cardStyle,
  pageNumber,
  cardTitle,
  techStackIcon,
  children,
}: Props) => {
  return (
    <div
      className={`w-[24.4rem] h-[27rem] rounded-3xl z-50 text-[#CCD6F6] ${cardStyle}`}
    >
      {/* <div className="style-one">
        <div className="flex flex-col justify-between items-start w-full h-full p-10">
          <div className="text-[40px] text-left">{children}</div>
          <img src="/icons/arrow-upward.svg" />
        </div>
      </div> */}

      <div className="style-two relative bg-[url('/vectors/bg-circle-light.svg')] bg-no-repeat bg-[length:400px_390px] bg-[top_-12rem_left_-12rem]">
        <div className="flex flex-col items-start w-full h-full p-8 gap-5">
          <p className="text-[18px] font-medium">{pageNumber}</p>
          <p className="capitalize text-[20px] font-medium">{cardTitle}</p>
          <div className="flex flex-col text-[14px] text-[#929DBC] text-left">
            <p>{children}</p>

            {/* Tech Stack With Icon*/}
            <div className="grid grid-cols-4 items-center justify-center w-full h-full gap-4">
              {techStackIcon?.map((techStackUsedIcons) => {
                return (
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex justify-center items-center bg-[#161A42]/70 w-[4.3rem] h-[3.3rem] rounded-xl">
                      <img
                        src={techStackUsedIcons.icon}
                        className="h-[1.5rem] object-cover"
                      />
                    </div>
                    <p className="text-[12px]">{techStackUsedIcons.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
