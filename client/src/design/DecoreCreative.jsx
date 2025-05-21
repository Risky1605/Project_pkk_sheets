import { PiBrainDuotone } from "react-icons/pi";
import { HiPaintBrush } from "react-icons/hi2";
import { GiFlowerTwirl } from "react-icons/gi";
import { PiMountainsFill } from "react-icons/pi";
const DecoreCreative = () => {
  const iconArray = [
    <PiBrainDuotone className="size-[4rem]"></PiBrainDuotone>,
    <HiPaintBrush className="size-[4rem]"></HiPaintBrush>,
    <GiFlowerTwirl className="size-[4rem]"></GiFlowerTwirl>,
    <PiMountainsFill className="size-[4rem]"></PiMountainsFill>,
  ];

  return (
    <div className="btn-card-experince w-full">
      <div className="btn-card-experince grid grid-cols-2 gap-2 w-full">
        {iconArray.map((item, index) => (
          <div
            key={index}
            className="btn-card-experince p-[1.5rem] w-full col-span-1 flex justify-center items-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DecoreCreative;
