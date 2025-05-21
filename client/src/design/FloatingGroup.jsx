import CardFloat from "./CardFloat";
import TownView from "../assets/Townview.png";
import MountainView from "../assets/Montain_view.png";
import RocKView from "../assets/Rock_view.png";
import MoonRise from "../assets/Moonrise.png";
import BadasDog from "../assets/BadasDog.png";
import Penguins from "../assets/Penguins.png";

const FloatingGroup = () => {
  return (
    <div className="hidden md:block">
      <CardFloat
        width="w-40"
        position_koordinat="right-20 top-20"
        foto_height="h-20"
        image={TownView}
      ></CardFloat>

      <CardFloat
        width="w-36"
        position_koordinat="left-10 top-28"
        foto_height="h-20"
        image={MountainView}
      ></CardFloat>

      <CardFloat
        width="w-36"
        position_koordinat="left-40 top-60"
        foto_height="h-20"
        image={RocKView}
        transition={true}
      ></CardFloat>

      <CardFloat
        width="w-20"
        position_koordinat="right-10 top-50"
        foto_height="h-12"
        image={Penguins}
        transition={true}
      ></CardFloat>

      <CardFloat
        width="w-24"
        position_koordinat="right-40 top-60"
        foto_height="h-20"
        image={MoonRise}
        transition={true}
      ></CardFloat>

      <CardFloat
        width="w-16"
        position_koordinat="left-40 top-0"
        foto_height="h-10"
        image={BadasDog}
      ></CardFloat>
    </div>
  );
};

export default FloatingGroup;
