import BadasDog from "../assets/BadasDog.png";
import { IoIosHeart } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa6";
const DecoreInstanly = () => {
  return (
    <div className="btn-card-experince relative w-full">
      <div className="w-fit rounded-md px-[0.8rem] py-[0.4rem] bg-white flex items-center gap-2 text-xs font-semibold absolute">
        Badas dog 😎
      </div>

      <div className="btn-card-experince w-full h-[16rem] md:h-[12rem] lg:h-[16rem]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={BadasDog}
        ></img>
      </div>

      <div className="btn-card-experince left-10 bottom-8  absolute">
        <FaThumbsUp className="size-4 "></FaThumbsUp>
      </div>
      <div className="btn-card-experince right-10 bottom-8  absolute">
        <IoIosHeart className="size-8 text-red-600 "></IoIosHeart>
      </div>
    </div>
  );
};

export default DecoreInstanly;
