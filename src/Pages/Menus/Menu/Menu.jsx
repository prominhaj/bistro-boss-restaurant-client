import React, { useState } from "react";
import HeroSection from "../../../Components/HeroSection/HeroSection";
import bgImg from "../../../assets/menu/banner3.jpg";
import MenuCover from "../MenuCover/MenuCover";
import MoreButton from "../../../Components/SeeMoreButton/MoreButton";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladsBg from "../../../assets/menu/salad-bg.jpg";
import soupsBg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Category from "../Categorys/Category";
import { Helmet } from "react-helmet";

const Menu = () => {
  return (
    <div>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      
      <HeroSection
        img={bgImg}
        title="OUR MENU"
        subTitle="Would you like to try a dish?"
      />
      <div className="container mx-auto px-5">
        <section className="py-[50px] sm:pt-[100px] sm:pb-12">
          <SectionTitle subHading="Don't miss" hading="TODAY'S OFFER" />
          <Category category="popular" />
          <div className="flex justify-center items-center">
            <MoreButton route="/shop/popular" />
          </div>
        </section>
      </div>
      <section className="pb-8">
        <MenuCover
          img={dessertBg}
          title="DESSERTS"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <div className="container mx-auto px-5">
          <Category category="dessert" />
          <div className="flex justify-center items-center">
            <MoreButton route="/shop/dessert" />
          </div>
        </div>
      </section>
      <section className="pb-8">
        <MenuCover
          img={pizzaBg}
          title="PIZZA"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <div className="container mx-auto px-5">
          <Category category="pizza" />
          <div className="flex justify-center items-center">
            <MoreButton route="/shop/pizza" />
          </div>
        </div>
      </section>
      <section className="pb-8">
        <MenuCover
          img={saladsBg}
          title="SALADS"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <div className="container mx-auto px-5">
          <Category category="salad" />
          <div className="flex justify-center items-center">
            <MoreButton route="/shop/salad" />
          </div>
        </div>
      </section>
      <section className="pb-8">
        <MenuCover
          img={soupsBg}
          title="SOUPS"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <div className="container mx-auto px-5">
          <Category category="soup" />
          <div className="flex justify-center items-center">
            <MoreButton route="/shop/soup" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
