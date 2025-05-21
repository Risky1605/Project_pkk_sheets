const BoxBenefit = ({ column, title, explantionDesc, decore }) => {
  return (
    <div
      className={`btn-card-experince w-full ${
        column ? column : "col-span-1"
      } p-[0.8rem] relative text-center overflow-hidden =`}
    >
      {/* Maintance */}
      {/* <div className="conic-custom animate-border-glowSpin"></div>
      <div className="absolute inset-1 bg-white rounded-md z-10"></div> */}
      {decore}
      <div className="my-6 space-y-2 flex flex-col items-center">
        <h1 className="font-bold bg-gradient-to-r from-primary to-secondary/50 bg-clip-text text-transparent text-2xl">
          {title}
        </h1>
        <p className="w-[21rem]">{explantionDesc}</p>
      </div>
    </div>
  );
};

export default BoxBenefit;
