import ContactCard from "../components/ContactCard";
import Header from "../components/Header";

const Contact = () => {
  const getInTouch = [
    {
      avatarClassname: "w-[5.4rem] h-[5.4rem]",
      cardPosition: "flex-col",
      title: "Jenelyn J. Pieloor",
      subtitle: "Available to work!",
      socialLinksVisibility: "flex",
      buttons: [
        {
          type: "Hello",
        },
        {
          type: "Hello",
        }
      ],
      buttonPosition: "flex mt-9 px-10",
    },
    {
      avatarClassname: "w-[4rem] h-[4rem]",
      cardPosition: "flex-col-reverse",
      title: "Let's Work Together",
      subtitle: "Where innovation meets expectations!",
      socialLinksVisibility: "hidden",
      buttons: [
        {
          type: "Hello",
        },
        {
          type: "Hello",
        },
        {
          type: "Hello",
        }
      ],
      buttonPosition: "flex flex-col px-16 h-full",
    },
  ];
  return (
    <div className="flex max-w-[1536px] h-full mx-auto text-[#CCD6F6]">
      <div className="flex flex-col w-2/3 pl-[3.5rem] relative">
        <Header pageNumber={3} pageTitle={"Get In Touch"} />

        <div className="flex mt-12 pl-[4rem] gap-8">
          {getInTouch?.map((contactInfo) => {
            return (
              <ContactCard
                avatarClassname={contactInfo.avatarClassname}
                cardPosition={contactInfo.cardPosition}
                title={contactInfo.title}
                subtitle={contactInfo.subtitle}
                socialLinksVisibility={contactInfo.socialLinksVisibility}
                buttonPosition={contactInfo.buttonPosition}
                buttons={contactInfo.buttons}
              />
            );
          })}
        </div>
      </div>

      <div className="flex-1 w-full sticky"></div>
    </div>
  );
};

export default Contact;
