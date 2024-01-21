import React from "react";
import bannerBg from "../../assets/contact/banner.jpg";

const HeroSection = () => {
  return (
    <section className="bg-cover pt-[100px] pb-[50px] sm:pt-[200px] sm:pb-[100px] px-5" style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className="bg-neutral-900 container mx-auto  bg-opacity-60 py-[100px]">
        <h1 className="text-center text-white text-[30px] md:text-[50px] lg:text-[88px] font-bold font-['Cinzel']">
          CONTACT US
        </h1>
        <p className="text-center text-white text-base sm:text-2xl font-semibold font-['Cinzel']">
          Would you like to try a dish?
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
