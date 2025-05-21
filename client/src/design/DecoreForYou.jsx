import BadasDog from "../assets/BadasDog.png";
const DecoreForYou = () => {
  return (
    <div className="btn-card-experince w-full grid grid-cols-4 gap-2 ">
      {[...Array(8)].map((_, index) => (
        <div className="btn-card-experince w-full p-[0.5rem] md:h-[6.1rem] lg:h-[8rem]">
          <img
            className="w-full h-full object-cover rounded-md"
            src={BadasDog}
          ></img>
        </div>
      ))}
    </div>
  );
};

export default DecoreForYou;
