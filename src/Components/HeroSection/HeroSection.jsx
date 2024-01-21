import React from "react";

const HeroSection = ({ img, title, subTitle }) => {
  return (
    <section
      className="bg-cover pt-[100px] pb-[50px] sm:pt-[200px] sm:pb-[100px] px-5"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-neutral-900 container mx-auto  bg-opacity-60 py-[100px]">
        <h1 className="text-center uppercase text-white text-[30px] md:text-[50px] lg:text-[88px] font-bold font-['Cinzel']">
          {title}
        </h1>
        <p className="text-center uppercase text-white text-base sm:text-2xl font-semibold font-['Cinzel']">
          {subTitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
