import React from "react";
import "./BannerSection.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/home/01.jpg";
import bannerImg2 from "../../../assets/home/02.jpg";
import bannerImg3 from "../../../assets/home/03.png";
import bannerImg4 from "../../../assets/home/04.jpg";
import bannerImg5 from "../../../assets/home/05.png";
import bannerImg6 from "../../../assets/home/06.png";

// Banner Items Data
const bannerItems = [
  {
    _id: 1,
    img: bannerImg1,
  },
  {
    _id: 2,
    img: bannerImg2,
  },
  {
    _id: 3,
    img: bannerImg3,
  },
  {
    _id: 4,
    img: bannerImg4,
  },
  {
    _id: 5,
    img: bannerImg5,
  },
  {
    _id: 6,
    img: bannerImg6,
  },
];

const BannerSection = () => {
  return (
    <div className="">
      <Carousel
        autoPlay
        interval={5000}
        emulateTouch={true}
        infiniteLoop={true}
        useKeyboardArrows={true}
        stopOnHover={true}
        thumbWidth={100}
        dynamicHeight={true}
      >
        {bannerItems.map((item) => (
          <div key={item._id}>
            <img className="xl:h-[85vh]" src={item.img} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerSection;
