import BadasDog from "../assets/BadasDog.png";
import { FiDownload } from "react-icons/fi";
import { RiSaveFill } from "react-icons/ri";
import { IoIosHeart } from "react-icons/io";

const BoxWorksDecore2 = () => {
  return (
    <div className="btn-experince-card h-[16rem] relative flex justify-center items-center w-full">
      <img
        className="w-full h-full object-cover rounded-md"
        src={BadasDog}
      ></img>

      <div className="btn-card-experince absolute left-2 bottom-2">
        <FiDownload size={20}></FiDownload>
      </div>
      <div className="btn-card-experince absolute right-2 bottom-2">
        <RiSaveFill size={28}></RiSaveFill>
      </div>
      <div className="btn-card-experince absolute left-2 top-2">
        <IoIosHeart size={40} color="red"></IoIosHeart>
      </div>
    </div>
  );
};

export default BoxWorksDecore2;
