import React from "react";

const SectionTitle = ({subHading, hading}) => {
  return (
    <div className="max-w-[424px] mx-auto text-center space-y-3">
      <h6 className="text-yellow-600 text-md sm:text-xl font-normal font-['Inter']">
        ---{subHading}---
      </h6>
      <div className="border-y-4 py-2">
        <h2 className="text-neutral-900 text-[30px] sm:text-[40px] font-normal font-['Inter'] uppercase">
          {hading}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
