import { IoIosSearch } from "react-icons/io";
import TownView from "../assets/Townview.png";
import MountainView from "../assets/Montain_view.png";
import BoxOpsional from "./BoxOpsional";

const fotoArray = [MountainView, TownView];
const TutorExp = () => {
  return (
    <div className="btn-card-experince w-full col-span-2 gap-2 flex flex-col">
      <div className="w-full rounded-full p-2 bg-white flex items-center gap-2 text-xs font-semibold">
        <IoIosSearch className="size-4 "></IoIosSearch>
        Modern trand 2025
      </div>

      <div className="btn-card-experince w-full grid grid-cols-1 grid-rows-2 gap-2 h-[14rem]">
        {fotoArray.map((item, index) => (
          <BoxOpsional key={index} setImage={true} image={item}></BoxOpsional>
        ))}
      </div>
    </div>
  );
};

export default TutorExp;
