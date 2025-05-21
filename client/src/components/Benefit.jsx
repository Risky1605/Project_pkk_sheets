import BoxBenefit from "./BoxBenefit";
import SectionPage from "./SectionPage";
import { BenefitText } from "../constant/contstant";
import DecoreExplore from "../design/DecoreExplore";
import DecoreInstanly from "../design/DecoreInstanly";
import DecoreCreative from "../design/DecoreCreative";
import DecoreForYou from "../design/DecoreForYou";

const Benefit = ({ titleSection, descSection, sign }) => {
  return (
    <SectionPage
      setTopSpace={true}
      classname={`relative flex flex-col items-center`}
      setpaddingCustom={true}
      id={"Benefit-section"}
      headingSection={titleSection}
      descSection={descSection}
      signSection={sign}
    >
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8 w-full max-w-[112rem]">
        <BoxBenefit
          column="col-span-1 md:col-span-4"
          title={BenefitText[0].title}
          explantionDesc={BenefitText[0].description}
          decore={<DecoreExplore></DecoreExplore>}
        ></BoxBenefit>

        <BoxBenefit
          column="col-span-1 md:col-span-2 "
          title={BenefitText[1].title}
          explantionDesc={BenefitText[1].description}
          decore={<DecoreInstanly></DecoreInstanly>}
        ></BoxBenefit>

        <BoxBenefit
          column="col-span-1 md:col-span-2"
          title={BenefitText[2].title}
          explantionDesc={BenefitText[2].description}
          decore={<DecoreCreative></DecoreCreative>}
        ></BoxBenefit>

        <BoxBenefit
          column="col-span-1 md:col-span-4"
          title={BenefitText[3].title}
          explantionDesc={BenefitText[3].description}
          decore={<DecoreForYou></DecoreForYou>}
        ></BoxBenefit>
      </div>
    </SectionPage>
  );
};

export default Benefit;
