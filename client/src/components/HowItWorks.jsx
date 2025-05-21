import BoxWorks from "../design/BoxWorks";
import BoxWorksDecore1 from "../design/BoxWorksDecore1";
import BoxWorksDecore2 from "../design/BoxWorksDecore2";
import BoxWorksDecore3 from "../design/BoxWorksDecore3";
import SectionPage from "./SectionPage";
import { HowItWorksSteps } from "../constant/contstant";

const HowItWorks = ({ titleSection, descSection, sign }) => {
  return (
    <SectionPage
      setTopSpace={true}
      classname={`relative`}
      setpaddingCustom={true}
      id={"Howitworks-section"}
      headingSection={titleSection}
      descSection={descSection}
      signSection={sign}
    >
      <div className="flex flex-col md:flex-row md:justify-between lg:justify-center mt-8 gap-4">
        <BoxWorks
          title={HowItWorksSteps[0].title}
          desc={HowItWorksSteps[0].description}
        >
          <BoxWorksDecore1></BoxWorksDecore1>
        </BoxWorks>

        <BoxWorks
          title={HowItWorksSteps[1].title}
          desc={HowItWorksSteps[1].description}
        >
          <BoxWorksDecore2></BoxWorksDecore2>
        </BoxWorks>

        <BoxWorks
          title={HowItWorksSteps[2].title}
          desc={HowItWorksSteps[2].description}
        >
          <BoxWorksDecore3></BoxWorksDecore3>
        </BoxWorks>
      </div>
    </SectionPage>
  );
};

export default HowItWorks;
