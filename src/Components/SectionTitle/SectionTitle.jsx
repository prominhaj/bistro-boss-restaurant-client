import React from "react";

const SectionTitle = ({subHading, hading, color}) => {
  return (
    <section className="max-w-[424px] mx-auto text-center space-y-3">
      <h6 className="text-yellow-600 text-base sm:text-xl font-normal font-['Inter']">
        ---{subHading}---
      </h6>
      <div className="py-2 border-y-4">
        <h2 className={`text-neutral-900 text-[25px] sm:text-[40px] font-normal font-['Inter'] uppercase ${color && 'text-white'}`}>
          {hading}
        </h2>
      </div>
    </section>
  );
};

export default SectionTitle;
