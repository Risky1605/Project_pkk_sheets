import { PricingPlans } from "../constant/contstant";
import BoxPricing from "../design/BoxPricing";
import HeroSign from "../design/Sign";
import SectionPage from "./SectionPage";

const Pricing = ({ titleSection, descSection, sign }) => {
  return (
    <SectionPage
      setTopSpace={true}
      classname={`relative `}
      setpaddingCustom={true}
      id={"Pricing-section"}
      headingSection={titleSection}
      descSection={descSection}
      signSection={sign}
    >
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
        {PricingPlans.map((item, index) => {
          if (index == 2) {
            return (
              <BoxPricing
                key={index}
                namePricing={item.name}
                datePricing={item.date}
                pricePricing={item.price}
                benefit={item.benefits}
                className={"bg-supporting-color-low/20 shadow-2xl md:scale-105"}
                buttonClassName={"bg-gradient from-primary to-white"}
              ></BoxPricing>
            );
          }
          return (
            <BoxPricing
              key={index}
              namePricing={item.name}
              datePricing={item.date}
              pricePricing={item.price}
              benefit={item.benefits}
            ></BoxPricing>
          );
        })}
      </div>
    </SectionPage>
  );
};

export default Pricing;
