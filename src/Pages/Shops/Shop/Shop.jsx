import React, { useState } from "react";
import HeroSection from "../../../Components/HeroSection/HeroSection";
import shopBg from "../../../assets/shop/banner2.jpg";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import ShopCategory from "../ShopCategory/ShopCategory";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

// Category Data
const categorys = ["salad", "pizza", "soup", "dessert", "popular"];

const Shop = () => {
  const { category } = useParams();
  const categoryIndex = categorys.indexOf(category);

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>

      <HeroSection
        img={shopBg}
        title="OUR SHOP"
        subTitle="Would you like to try a dish?"
      />
      <section className="container mx-auto px-5 py-[30px] sm:py-[50px] md:py-[100px]">
        <Tabs
          defaultIndex={categoryIndex}
          position="relative"
          variant="unstyled"
        >
          <div className="flex justify-center items-center">
            <TabList className="flex justify-center items-center flex-wrap">
              {categorys.map((item) => (
                <Tab
                  key={item}
                  className="text-center text-neutral-900 text-2xl font-bold font-['Inter'] uppercase"
                  _selected={{ color: "#BB8506" }}
                >
                  {item}
                </Tab>
              ))}
            </TabList>
          </div>
          <TabIndicator
            mt="-1px"
            height="2px"
            bg="yellow.600"
            borderRadius="2px"
          />
          <TabPanels className="py-5">
            <TabPanel>
              <ShopCategory category="salad" />
            </TabPanel>
            <TabPanel>
              <ShopCategory category="pizza" />
            </TabPanel>
            <TabPanel>
              <ShopCategory category="soup" />
            </TabPanel>
            <TabPanel>
              <ShopCategory category="dessert" />
            </TabPanel>
            <TabPanel>
              <ShopCategory category="popular" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </>
  );
};

export default Shop;
