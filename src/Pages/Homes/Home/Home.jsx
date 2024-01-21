import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import OrderOnline from "../OrderOnline/OrderOnline";
import BistroBossSection from "../BistroBossSection/BistroBossSection";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import CallUs from "../CallUs/CallUs";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FromOurMenuSection from "../FromOurMenuSection/FromOurMenuSection";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
        {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <BannerSection />
      <OrderOnline />
      <BistroBossSection />
      <FromOurMenu />
      <CallUs />
      <ChefRecommends />
      <FromOurMenuSection />
      <Testimonials />
    </>
  );
};

export default Home;
