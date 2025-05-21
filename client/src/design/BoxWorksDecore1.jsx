import BadasDog from "../assets/BadasDog.png";
import BoxOpsional from "./BoxOpsional";

const BoxWorksDecore1 = () => {
  return (
    <div className="btn-card-experince h-[12rem] grid grid-cols-4 grid-rows-2 gap-4 w-full">
      {[...Array(8)].map((_, index) => {
        if (index % 2 != 0) {
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
    </div>
  );
};

export default BoxWorksDecore1;
