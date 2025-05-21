import { FakeTestimonials } from "../constant/contstant";
import HeroSign from "../design/Sign";
import TestimonialComment from "../design/TestimonialComment";
import SectionPage from "./SectionPage";

const Testimonial = ({ titleSection, descSection, sign }) => {
  return (
    <SectionPage
      setTopSpace={true}
      classname={`relative `}
      setpaddingCustom={true}
      id={"Testimonial-section"}
      headingSection={titleSection}
      descSection={descSection}
      signSection={sign}
    >
      <div className="w-full lg:flex lg:justify-center lg:items-center mt-8 overflow-scroll md:overflow-visible">
        <div className="w-fit flex md:block  md:columns-4  gap-4 ">
          {FakeTestimonials.map((item, index) => (
            <TestimonialComment
              username={item.name}
              date={item.date}
              message={item.message}
              imageurl={item.imageUrl}
            ></TestimonialComment>
          ))}
        </div>
      </div>
    </SectionPage>
  );
};

export default Testimonial;
