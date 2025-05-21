import Logo from "../assets/logo.png";
import MountainView from "../assets/Montain_view.png";
import BadasDog from "../assets/BadasDog.png";

const AroundLogo = () => {
  return (
    <div className="p-4 w-fit ">
      <div className=" rounded-full flex justify-center items-center relative 0 group: z-50">
        <img
          src={Logo}
          height={150}
          width={150}
          className="rounded-full z-50"
        ></img>

        {/* Radiation effect */}
        <div className="absolute size-[15rem] rounded-full btn-card-experince flex justify-center items-center z-10">
          <div className="rounded-full size-10 overflow-hidden absolute -left-4 ">
            <img
              src={MountainView}
              height={40}
              width={40}
              className="h-full w-full object-cover"
            ></img>
          </div>
        </div>

        <div className="absolute size-[20rem] rounded-full btn-card-experince flex justify-center items-center z-10 opacity-80">
          <div className="rounded-full size-10 overflow-hidden absolute right-4 top-10 ">
            <img
              src={BadasDog}
              height={40}
              width={40}
              className="h-full w-full object-cover"
            ></img>
          </div>
        </div>

        <div className="absolute size-[25rem] rounded-full btn-card-experince flex justify-center items-center z-10 opacity-60 ">
          <div className="rounded-full size-10 overflow-hidden absolute -left-4 top-10">
            <img
              src={MountainView}
              height={40}
              width={40}
              className="h-full w-full object-cover"
            ></img>
          </div>
        </div>

        <div className="absolute size-[30rem] rounded-full btn-card-experince flex justify-center items-center z-10 opacity-40"></div>

        <div className="absolute size-[15rem] bg-black rounded-full opacity-0 transition-all duration-200  z-10 group-hover:opacity-100 group-hover:size-[15rem]"></div>
      </div>
    </div>
  );
};

export default AroundLogo;
