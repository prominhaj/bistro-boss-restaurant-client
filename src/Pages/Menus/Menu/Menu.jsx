import React from "react";
import HeroSection from "../../../Components/HeroSection/HeroSection";
import bgImg from "../../../assets/menu/banner3.jpg";
import MenuCover from "../MenuCover/MenuCover";
import OurMenuCard from "../../../Components/OurMenuCard/OurMenuCard";
import MoreButton from "../../../Components/SeeMoreButton/MoreButton";
import dessertBg from '../../../assets/menu/dessert-bg.jpeg';

const Menu = () => {
  return (
    <div>
      <HeroSection
        img={bgImg}
        title="OUR MENU"
        subTitle="Would you like to try a dish?"
      />
      <div className="container mx-auto px-5">
        <section className="py-[50px] sm:pt-[100px] sm:pb-12">
          <div className="grid md:grid-cols-2 gap-6 pb-8">
            <OurMenuCard />
            <OurMenuCard />
            <OurMenuCard />
            <OurMenuCard />
          </div>
          <MoreButton text="ORDER YOUR FAVOURITE FOOD" />
        </section>
      </div>
        <section>
          <MenuCover img={dessertBg} title="DESSERTS" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        </section>
    </div>
  );
};

export default Menu;
