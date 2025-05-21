import TownView from "../assets/Townview.png";
import MountainView from "../assets/Montain_view.png";
import RocKView from "../assets/Rock_view.png";
import MoonRise from "../assets/Moonrise.png";
import BadasDog from "../assets/BadasDog.png";
import Penguins from "../assets/Penguins.png";
import Doomsday from "../assets/Doomsday.png";
import BoxOpsional from "./BoxOpsional";
import AroundLogo from "./AroundLogo";
import TutorExp from "./TutorExp";

const fotoArray = [RocKView, MountainView, TownView, Penguins];
const CardExperinceFirst = () => {
  return (
    <div className="btn-card-experince w-full md:w-1/3 md:max-w-[36rem] h-fit">
      {/* wrapper second */}
      <div className="btn-card-experince w-full flex flex-col">
        {/* Hero text */}

        {/* <div className="flex flex-col gap-4 items-center text-center ">
          <h1 className="text-[2rem] mt-4 font-bold bg-gradient-to-r from-primary to-secondary/50 bg-clip-text text-transparent">
            Imagine your day
          </h1>
          <p className="text-[0.8rem] w-[80%]">
            Explore a boundless collection ready to inspire and beautify every
            corner of your imagination.
          </p>
        </div> */}

        {/* Element unique */}
        <div className="grid grid-cols-3 w-full grid-rows-4 h-[30rem] btn-card-experince gap-2">
          <BoxOpsional
            column={"col-span-2"}
            row={"row-span-1"}
            setImage={true}
            image={MoonRise}
          ></BoxOpsional>

          <BoxOpsional
            column={"col-span-1"}
            row={"row-span-1"}
            setImage={true}
            image={BadasDog}
          ></BoxOpsional>

          <div className="col-span-2 row-span-2 grid grid-cols-2 gap-2 grid-rows-2 btn-card-experince w-full">
            <BoxOpsional
              column={"col-span-1"}
              row={"row-span-2"}
              setImage={true}
              image={TownView}
            ></BoxOpsional>

            <BoxOpsional
              column={"col-span-1"}
              row={"row-span-1"}
              setImage={true}
              image={Penguins}
            ></BoxOpsional>

            <BoxOpsional
              column={"col-span-1"}
              row={"row-span-1"}
              setImage={true}
              image={RocKView}
            ></BoxOpsional>
          </div>

          <BoxOpsional
            column={"col-span-1"}
            row={"row-span-1"}
            setImage={true}
            image={MountainView}
          ></BoxOpsional>

          <BoxOpsional
            column={"col-span-1"}
            row={"row-span-1"}
            setImage={true}
            image={RocKView}
          ></BoxOpsional>

          <BoxOpsional
            column={"col-span-1"}
            row={"row-span-1"}
            setImage={true}
            image={BadasDog}
          ></BoxOpsional>

          <BoxOpsional
            column={"col-span-2"}
            row={"row-span-1"}
            setImage={true}
            image={MoonRise}
          ></BoxOpsional>
        </div>
      </div>
    </div>
  );
};

const CardExperinceSecond = () => {
  return (
    <div className="btn-card-experince w-full md:w-1/3 md:max-w-[36rem] scale-110 flex flex-col gap-4 h-fit my-8 md:my-0">
      <div className="w-full box-biggets-experince gap-4 relative -top-6 h-[20rem] bg-white grid grid-cols-4 grid-rows-4 overflow-hidden ">
        {[...Array(4)].map((_, index) => {
          if (index % 2 == 0) {
            return (
              <BoxOpsional
                key={index}
                setImage={true}
                image={BadasDog}
              ></BoxOpsional>
            );
          } else {
            return <BoxOpsional key={index}></BoxOpsional>;
          }
        })}

        {[...Array(4)].map((_, index) => {
          if (index % 2 != 0) {
            return (
              <BoxOpsional
                key={index}
                setImage={true}
                image={MoonRise}
              ></BoxOpsional>
            );
          } else {
            return <BoxOpsional key={index}></BoxOpsional>;
          }
        })}

        {fotoArray.map((item, index) => (
          <BoxOpsional key={index} setImage={true} image={item}></BoxOpsional>
        ))}

        {[...Array(4)].map((_, index) => (
          <BoxOpsional key={index}></BoxOpsional>
        ))}
      </div>

      <div className="w-full btn-card-experince flex gap-2 -mt-6 h-[12rem] ">
        <div className="grid grid-cols-2  gap-2 grid-rows-2 w-1/2 box-biggets-experince ">
          {fotoArray.map((item, index) => (
            <BoxOpsional key={index} setImage={true} image={item}></BoxOpsional>
          ))}
        </div>
        <div className=" w-1/2 relative overflow-hidden rounded-md">
          <img className="h-full w-full object-cover" src={Doomsday} />
        </div>
      </div>
    </div>
  );
};

const CardExperinceThird = () => {
  return (
    <div className="btn-card-experince w-full md:w-1/3 md:max-w-[36rem] h-fit grid grid-cols-2 gap-2">
      <div className="btn-card-experince w-full flex justify-center overflow-hidden col-span-full">
        <AroundLogo></AroundLogo>
      </div>
      <TutorExp></TutorExp>
      {/* <div className="btn-card-experince col-span-1"></div> */}
      {/* <div className="flex flex-col gap-4 items-center text-center mb-2 col-span-full">
        <h1 className="text-[2rem] mt-4 font-bold bg-gradient-to-r from-primary to-secondary/50 bg-clip-text text-transparent">
          Everything is your inspiration
        </h1>
        <p className="text-[0.8rem] w-[80%] mb-2">
          Explore a boundless collection ready to inspire and beautify every
          corner of your imagination.
        </p>
      </div> */}
    </div>
  );
};

const CardExperince = () => {
  return (
    <div className="mt-16 flex flex-col md:flex-row gap-10 md:justify-between lg:justify-center items-end ">
      <CardExperinceFirst></CardExperinceFirst>
      <CardExperinceSecond></CardExperinceSecond>
      <CardExperinceThird></CardExperinceThird>
    </div>
  );
};

export default CardExperince;
