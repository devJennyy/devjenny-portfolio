import {
  FaFacebookMessenger,
  FaGithubAlt,
  FaLinkedinIn,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";
import Header from "../components/Header";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiCoffee } from "react-icons/pi";

const Contact = () => {
  return (
    <div className="flex max-w-[1536px] h-full mx-auto text-[#CCD6F6]">
      <div className="flex flex-col w-2/3 pl-[3.5rem] relative">
        <Header pageNumber={3} pageTitle={"Get In Touch"} />

        <div className="flex mt-12 pl-[4rem] gap-8">
          <div className="flex flex-col gap-8 w-full h-[37.8rem]">
            <div className="bg-[#000000]/15 w-full min-h-[27rem] rounded-xl gradient-project-style-two">
              <div className="project-style-two relative bg-[url('/vectors/bg-circle-light.svg')] bg-no-repeat bg-[length:400px_390px] bg-[top_-12rem_left_-12rem]">
                {/* Card Details*/}
                <div className="flex flex-col h-full w-full">
                  <div className="flex flex-col justify-start items-center p-10 gap-7">
                    <div className="w-[5.4rem] h-[5.4rem] rounded-full bg-[#161A42]"></div>
                    <div className="flex flex-col gap-1 text-[#B1BAED]">
                      <p className="text-[19px] font-medium">
                        Jenelyn J. Pieloor
                      </p>
                      <p className="text-[13px] font-light">
                        Available to work!
                      </p>
                    </div>
                  </div>
                  {/* Social Links */}
                  <div className="flex flex-col gap-5">
                    <div className="gradient-border-double"></div>
                    <div className="flex justify-center items-center gap-10 text-[#B1BAED] px-[5rem]">
                      <FaFacebookMessenger size={20} />
                      <FaWhatsapp size={22} />
                      <FaGithubAlt size={22} />
                      <FaLinkedinIn size={22} />
                    </div>
                    <div className="gradient-border-double"></div>
                  </div>
                  {/* Download Links */}
                  <div className="flex w-full h-[3rem] gap-3 mt-9 px-10 text-[12px] text-[#B1BAED] font-regular">
                    <div className="flex justify-center items-center w-full h-full bg-[#161A42] rounded-lg gap-2">
                      <FaDownload size={12} />
                      <p>Download Resume</p>
                    </div>
                    <div className="flex justify-center items-center w-full h-full bg-[#161A42] rounded-lg gap-2">
                      <FaDownload size={12} />
                      <p>Download CV</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#212760]/20 w-full h-full rounded-xl"></div>
          </div>

          {/* Project 02 */}
          <div className="flex flex-col gap-8 w-full h-[37.8rem]">
            <div className="bg-[#212760]/20 w-full h-full rounded-xl"></div>
            <div className="bg-[#000000]/15 w-full min-h-[27rem] rounded-xl gradient-project-style-two">
              <div className="project-style-two relative bg-[url('/vectors/bg-circle-light.svg')] bg-no-repeat bg-[length:400px_390px] bg-[top_-12rem_left_-12rem]">
                {/* Card Details*/}
                <div className="flex flex-col h-full w-full">
                  <div className="flex flex-col justify-start items-center p-10 gap-7">
                    <div className="w-[4rem] h-[4rem] rounded-full bg-[#161A42]"></div>
                    <div className="flex flex-col gap-1 text-[#B1BAED] capitalize">
                      <p className="text-[19px] font-medium">
                        Let's Work Together
                      </p>
                      <p className="text-[13px] font-light">
                        Where innovation meets expectations!
                      </p>
                    </div>
                  </div>
                  {/* Direct Buttons */}
                  <div className="flex flex-col w-full h-full gap-3 px-16 text-[13px] text-[#B1BAED] font-regular capitalize">
                    <div className="flex justify-center items-center w-full h-[3rem] bg-[#161A42] rounded-lg gap-2">
                      <img
                        src="/icons/email.svg"
                        className="h-[12px] object-cover"
                      />
                      <p>Email Me</p>
                    </div>
                    <div className="flex justify-center items-center w-full h-[3rem] bg-[#161A42] rounded-lg gap-2">
                      <BiSolidPhoneCall size={18} />
                      <p>Contact Me</p>
                    </div>
                    <div className="flex justify-center items-center w-full h-[3rem] bg-[#161A42] rounded-lg gap-2">
                      <PiCoffee size={18} className="mb-1" />
                      <p>Buy me coffee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full sticky"></div>
    </div>
  );
};

export default Contact;
