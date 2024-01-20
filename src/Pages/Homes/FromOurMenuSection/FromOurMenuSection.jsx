import React from "react";
import featuredBg from "../../../assets/home/featuredBgImg.png";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const FromOurMenuSection = () => {
  return (
    <section
      className="bg-cover bg-fixed py-[40px] sm:py-[60px] md:py-[100px]"
      style={{ backgroundImage: `url(${featuredBg})` }}
    >
      <div className="container mx-auto px-5">
        <SectionTitle
          subHading={"Check it out"}
          hading={"FROM OUR MENU"}
          color={"text-white"}
        />
        <div className="grid lg:grid-cols-2 items-center gap-5 sm:gap-8 md:gap-12 pt-8 sm:pt-12">
          <img className="w-full" src={featuredImg} alt="" />
          <div className="text-center lg:text-start">
            <h4 className="text-white text-lg sm:text-2xl sm:mb-2 font-normal font-['Inter'] leading-9">March 20, 2023</h4>
            <h4 className="text-white text-lg sm:text-2xl sm:mb-2 font-normal font-['Inter'] leading-9">WHERE CAN I GET SOME?</h4>
            <p className="text-white text-base sm:text-xl font-normal font-['Inter'] leading-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="hover:bg-white mt-[24px] hover:text-black duration-300 px-[30px] py-5 rounded-lg border-b-2 border-white justify-start items-start gap-2.5 inline-flex text-center text-white sm:text-xl font-semibold font-['Inter'] uppercase">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromOurMenuSection;
