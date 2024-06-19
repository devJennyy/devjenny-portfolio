import {
  FaFacebookMessenger,
  FaWhatsapp,
  FaGithubAlt,
  FaLinkedinIn,
  FaDownload,
} from "react-icons/fa";

interface Props {
  avatarClassname: string;
  cardPosition: string;
  title: string;
  subtitle: string;
  socialLinksVisibility: string;
  buttons: {
    type: string;
  }[],
  buttonPosition: string;
}

const ContactCard = ({ avatarClassname, cardPosition, title, socialLinksVisibility, subtitle, buttons, buttonPosition}: Props) => {
  return (
    <div className={`flex gap-8 w-full h-[37.8rem] ${cardPosition}`}>
      <div className="bg-[#000000]/15 w-full min-h-[27rem] rounded-xl gradient-project-style-two">
        <div className="project-style-two relative bg-[url('/vectors/bg-circle-light.svg')] bg-no-repeat bg-[length:400px_390px] bg-[top_-12rem_left_-12rem]">
          {/* Card Details*/}
          <div className="flex flex-col h-full w-full">
            <div className="flex flex-col justify-start items-center p-10 gap-7">
              <div className={`flex rounded-full bg-[#161A42] ${avatarClassname}`}></div>
              <div className="flex flex-col gap-1 text-[#B1BAED]">
                <p className="text-[19px] font-medium">{title}</p>
                <p className="text-[13px] font-light">{subtitle}</p>
              </div>
            </div>
            {/* Social Links */}
            <div className={`flex-col gap-5 ${socialLinksVisibility}`}>
              <div className="gradient-border-double"></div>
              <div className="flex justify-center items-center gap-10 text-[#B1BAED] px-[5rem]">
                <a href="https://www.facebook.com/">
                  <FaFacebookMessenger size={20} />
                </a>
                <a href="https://github.com/devJennyy">
                  <FaWhatsapp size={22} />
                </a>
                <a href="https://github.com/devJennyy">
                  <FaGithubAlt size={22} />
                </a>
                <a href="https://www.linkedin.com/in/jennypieloor/">
                  <FaLinkedinIn size={22} />
                </a>
              </div>
              <div className="gradient-border-double"></div>
            </div>
            {/* Download Links */}
            <div className={`flex w-full gap-3 text-[12px] text-[#B1BAED] font-regular ${buttonPosition}`}>
              {buttons?.map((buttonDirectory) => {
                return (
                  <div className="flex justify-center items-center w-full h-[3rem] bg-[#161A42] rounded-lg gap-2">
                    <FaDownload size={12} />
                    <p>{buttonDirectory.type}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#212760]/20 w-full h-full rounded-xl"></div>
    </div>
  );
};

export default ContactCard;
