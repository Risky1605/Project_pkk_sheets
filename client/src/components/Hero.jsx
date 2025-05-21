import SectionPage from "./SectionPage";
import CardExperince from "../design/CardExperince";
import FloatingGroup from "../design/FloatingGroup";

const Hero = ({ titleSection, descSection, sign }) => {
  return (
    <SectionPage
      setTopSpace={true}
      classname={`relative`}
      padding={"px-[2rem]"}
      id={"Hero-section"}
      headingSection={titleSection}
      descSection={descSection}
      buttonAdd={
        <button className="btn-joinUs" type="button">
          Get started
        </button>
      }
      signSection={sign}
    >
      {/* Design */}
      {/* top */}
      <FloatingGroup></FloatingGroup>
      {/* bottom */}
      <CardExperince></CardExperince>
    </SectionPage>
  );
};

export default Hero;
