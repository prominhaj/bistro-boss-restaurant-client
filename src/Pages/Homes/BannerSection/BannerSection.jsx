import React from "react";
import './BannerSection.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/home/01.jpg";
import bannerImg2 from "../../../assets/home/02.jpg";
import bannerImg3 from "../../../assets/home/03.png";
import bannerImg4 from "../../../assets/home/04.jpg";
import bannerImg5 from "../../../assets/home/05.png";
import bannerImg6 from "../../../assets/home/06.png";


const BannerSection = () => {
    
  return (
    <div className="">
      <Carousel autoPlay interval={5000} emulateTouch={true} infiniteLoop={true} useKeyboardArrows={true} stopOnHover={true} thumbWidth={100} dynamicHeight={true}>
        <div>
          <img className="xl:h-[85vh]" src={bannerImg1} />
        </div>
        <div>
          <img className="xl:h-[85vh]" src={bannerImg2} />
        </div>
        <div>
          <img className="xl:h-[85vh]" src={bannerImg3} />
        </div>
        <div>
          <img className="xl:h-[85vh]" src={bannerImg4} />
        </div>
        <div>
          <img className="xl:h-[85vh]" src={bannerImg5} />
        </div>
        <div>
          <img className="xl:h-[85vh]" src={bannerImg6} />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerSection;
