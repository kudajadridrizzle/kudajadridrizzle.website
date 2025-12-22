import { JSX } from "react";

const PackageCard = ({
  title,
  description,
  price,
  duration,
  pickupDrop,
  navigate, // ✅ receive navigate
}: {
  title: string;
  description: string;
  price: {
    current_price: string;
    original_price: string;
    note: string;
  };
  duration: string;
  pickupDrop: string;
  navigate: (path: string) => void; // ✅ typing for navigate
}): JSX.Element => {
  return (
    <div
      className="package-card relative flex flex-col lg:flex-row p-6 sm:p-8 md:p-12 lg:p-14 xl:p-16 justify-between shadow-lg rounded-2xl sm:rounded-3xl lg:rounded-[32px] h-auto lg:h-[351px] w-full bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(/assets/cloud.jpg)` }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[32px] pointer-events-none z-0"></div> */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-9 z-10 text-white w-full lg:w-2/3">
        <div className="flex flex-col gap-2 sm:gap-3 opacity-100 border-l-2 sm:border-l-[1px] pt-1 pr-4 sm:pr-5 pb-1 pl-4 sm:pl-5">
          <h2 className="font-albert font-medium text-3xl sm:text-4xl md:text-[44px] leading-tight tracking-normal capitalize text-white">
            {title}
          </h2>
          <p className="text-sm sm:text-base font-medium leading-relaxed tracking-normal capitalize font-albert text-[#CDCDCD] mt-1 sm:mt-2">
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-16 lg:gap-20 text-white mt-4 sm:mt-0">
          <div className="flex flex-col gap-1 sm:gap-2">
            <p className="font-tertiary font-normal text-xs sm:text-sm leading-none tracking-[10%] align-middle uppercase">
              Duration
            </p>
            <p className="font-albert font-medium text-lg sm:text-xl md:text-2xl leading-none tracking-normal align-middle capitalize">
              {duration}
            </p>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <p className="font-tertiary font-normal text-xs sm:text-sm leading-none tracking-[10%] align-middle uppercase">
              Pick up & Drop
            </p>
            <p className="font-albert font-medium text-lg sm:text-xl md:text-2xl leading-none tracking-normal align-middle capitalize">
              {pickupDrop}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full lg:w-auto mt-6 lg:mt-0 p-4 sm:p-6 lg:p-4 gap-4 z-10 bg-white/10 lg:bg-transparent rounded-lg lg:rounded-none">
        <PriceCard price={price} navigate={navigate} /> {/* ✅ pass navigate */}
      </div>
    </div>
  );
};

export default PackageCard;


const PriceCard = ({
  price,
  navigate, // ✅ accept navigate
}: {
  price: { current_price: string; original_price: string; note: string };
  navigate: (path: string) => void;
}): JSX.Element => {
  return (
    <div className="price-card flex flex-col w-full p-4 sm:p-6 gap-4 sm:gap-6 bg-white/90 backdrop-blur-sm shadow-md rounded-lg sm:rounded-xl">
      <div className="flex flex-col items-start gap-[8px]">
        <div className="flex flex-col items-start gap-[4px]">
          <span className="text-sm font-medium leading-none tracking-normal capitalize align-middle">
            Package price
          </span>
          <p className="text-2xl font-semibold leading-none tracking-normal capitalize align-middle font-albert">
            {price.current_price}
          </p>
          <p className="text-base font-medium leading-none tracking-normal line-through capitalize align-middle font-albert text-[#A0A0A0]">
            {price.original_price}
          </p>
        </div>
        <p className="text-base font-medium leading-none tracking-normal capitalize align-middle font-albert text-[#A0A0A0]">
          {price.note}
        </p>
      </div>

      {/* ✅ FIXED BUTTON */}
      <button
        onClick={() => navigate('/contact')}
        className="w-full bg-[#292626] text-white py-[12px] px-[24px] rounded-[99px] text-base font-medium leading-none tracking-normal text-center align-middle capitalize hover:bg-[#1a1a1a] transition-colors"
      >
        Check Availability & Book
      </button>
    </div>
  );
};

export const BodyCard = (body: { title: string; description: string[] }) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <h3 className="font-albert font-medium text-xl sm:text-2xl leading-tight tracking-normal capitalize">
        {body.title}
      </h3>
      <div className="flex flex-col gap-2 sm:gap-3">
        {body.description.map((item, index) => (
          <p
            key={index}
            className="font-albert font-medium text-sm sm:text-base leading-relaxed tracking-normal align-middle capitalize text-[#555] sm:text-[#737373]"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
