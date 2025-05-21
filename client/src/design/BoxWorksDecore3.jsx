import BoxOpsional from "./BoxOpsional";
import BadasDog from "../assets/BadasDog.png";
import { RiChatSmileAiFill } from "react-icons/ri";

const BoxWorksDecore3 = () => {
  return (
    <div className="btn-card-experince flex justify-center w-full items-center relative ">
      <div className=" w-full grid grid-cols-2 grid-rows-2 h-[12rem] gap-2">
        {[...Array(4)].map((_, index) => (
          <BoxOpsional
            key={index}
            setImage={true}
            image={BadasDog}
          ></BoxOpsional>
        ))}
      </div>

      <div
        className="btn-card-experince absolute w-fit
       h-fit p-4 bg-primary/50 rounded-full"
      >
        <RiChatSmileAiFill className="text-white" size={40}></RiChatSmileAiFill>
      </div>
    </div>
  );
};

export default BoxWorksDecore3;
