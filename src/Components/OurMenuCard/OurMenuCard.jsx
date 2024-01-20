import React from "react";
import testImg from "../../assets/home/slide1.jpg";

const OurMenuCard = () => {
  return (
    <div className="flex gap-4 sm:gap-7 items-center">
      <div className="w-[118px] max-h-[104px] max-w-full h-full">
        <img
          className="w-full h-full bg-zinc-300 rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px]"
          src={testImg}
          alt=""
        />
      </div>
      <div className="flex gap-2 sm:gap-3">
        <div>
          <h2 className="text-neutral-900 text-base sm:text-xl font-normal font-['Cinzel'] mb-2 flex">
            ROAST DUCK BREAST ---<span className="hidden sm:block">---------------</span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed ">
            Roasted duck breast (served pink) with gratin potato and a griottine
            cherry sauce
          </p>
        </div>
        <div>
          <h4 className="text-yellow-600 text-xl font-normal font-['Inter'] leading-relaxed">
            $14.5
          </h4>
        </div>
      </div>
    </div>
  );
};

export default OurMenuCard;
