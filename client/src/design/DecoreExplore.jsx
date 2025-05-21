import Logo from "../assets/logo.png";
import { PiBrainDuotone } from "react-icons/pi";
import { AiTwotoneHighlight } from "react-icons/ai";
import { BiSolidImage } from "react-icons/bi";
import { GiAbstract050 } from "react-icons/gi";
const DecoreExplore = () => {
  return (
    <div className="btn-card-experince w-full flex justify-center items-center gap-16 overflow-hidden relative max-w-[80rem]">
      {/* {[...Array(4)].map((_, index) => {
        let size = 12 * (index + 1);
        return (
          <div
            key={index}
            className={`btn-card-experince absolute size-[${size}] rounded-full shadow-slate-400 shadow-sm`}
          ></div>
        );
      })} */}

      <>
        <div
          className={`btn-card-experince absolute size-[12rem] rounded-full shadow-slate-400 shadow-sm`}
        ></div>
        <div
          className={`btn-card-experince absolute size-[24rem] rounded-full shadow-slate-400 shadow-sm`}
        ></div>
        <div
          className={`btn-card-experince absolute size-[36rem] rounded-full shadow-slate-400 shadow-sm`}
        ></div>
        <div
          className={`btn-card-experince absolute size-[48rem] rounded-full shadow-slate-400 shadow-sm`}
        ></div>
        <div
          className={`btn-card-experince absolute size-[60rem] rounded-full shadow-slate-400 shadow-sm`}
        ></div>
        <div
          className={`btn-card-experince absolute size-[72rem] rounded-full shadow-slate-400 shadow-sm`}
        ></div>
      </>

      <div className="btn-card-experince  relative z-20">
        <BiSolidImage className="size-10"></BiSolidImage>
      </div>
      <div className="btn-card-experince  relative z-20">
        <PiBrainDuotone className="size-10"></PiBrainDuotone>
      </div>
      <div className="rounded-full z-50 p-[1rem]">
        <img src={Logo} className="rounded-full lg:size-56"></img>
      </div>
      <div className="btn-card-experince  relative z-20">
        <AiTwotoneHighlight className="size-10"></AiTwotoneHighlight>
      </div>
      <div className="btn-card-experince  relative z-20">
        <GiAbstract050 className="size-10"></GiAbstract050>
      </div>
    </div>
  );
};

export default DecoreExplore;
