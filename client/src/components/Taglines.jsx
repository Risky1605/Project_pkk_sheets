import { DesignTaglines } from "../constant/contstant";
import HeroSign from "../design/Sign";
import TaglineBoxSec from "../design/TaglineBoxSec";
import SectionPage from "./SectionPage";

const Taglines = () => {
  return (
    <SectionPage
      setTopSpace={true}
      classname={`relative mb-20 `}
      setpaddingCustom={true}
      id={"Taglines-section"}
    >
      <div className="grid grid-cols-4 gap-4 ">
        {designTaglines.map((item, index) => (
          <TaglineBoxSec
            title={item.title}
            desc={item.description}
          ></TaglineBoxSec>
        ))}
      </div>
    </SectionPage>
  );
};

export default Taglines;
