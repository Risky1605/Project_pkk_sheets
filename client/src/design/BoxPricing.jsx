import { FaCheck } from "react-icons/fa6";

const BoxPricing = ({
  className,
  buttonClassName,
  namePricing,
  datePricing,
  pricePricing,
  benefit = [],
}) => {
  return (
    <div
      className={`w-full md:w-1/3 md:max-w-[36rem] h-auto p-[1.5rem] rounded-md ${className} flex flex-col gap-2 border border-primary/20 `}
    >
      {/* Heading pricing  */}
      <div className=" flex justify-between">
        <div className="flex flex-col gap-[0.2rem]">
          <h1 className="text-[2rem]">{namePricing}</h1>
          <p className="text-slate-400">{datePricing}</p>
        </div>

        <div className="btn-card-experince h-fit px-[1rem]">
          <p className="font-bold text-2xl text-secondary">${pricePricing}</p>
        </div>
      </div>

      {/* Benefit pricing  */}
      <div className=" flex flex-col gap-[1rem] mt-4 mb-4">
        {benefit.map((item, index) => (
          <p className="flex items-center gap-[0.5rem]" key={index}>
            <div className="btn-card-experince  rounded-full w-fit h-fit p-[0.4rem]">
              <FaCheck className="size-[0.6rem]"></FaCheck>
            </div>
            {item}
          </p>
        ))}
      </div>

      <button
        type="button"
        className={`mt-auto py-[0.8rem] btn-card-experince w-full ${buttonClassName}`}
      >
        Purchase
      </button>
    </div>
  );
};

export default BoxPricing;
