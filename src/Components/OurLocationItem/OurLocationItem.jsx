import React from "react";

const OurLocationItem = ({item}) => {
  return (
    <div className="bg-white border border-gray-200" key={item._id}>
      <div className="bg-[#D1A054] py-4 flex justify-center items-center">
        {item.icon}
      </div>
      <div className="px-5 pb-5">
        <div className="bg-zinc-100 flex flex-col justify-center items-center px-3 h-[180px] object-cover">
          <h2 className="text-center text-neutral-900 sm:mb-3 text-xl sm:text-2xl font-medium font-['Inter']">
            {item.name}
          </h2>
          <p className="text-center text-neutral-700 mt-2 sm:mt-0 text-sm sm:text-base font-normal font-['Inter']">
            {item.address} <br /> {item.address2 && item.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurLocationItem;
