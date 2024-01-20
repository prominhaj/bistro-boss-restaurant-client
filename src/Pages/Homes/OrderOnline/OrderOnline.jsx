import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

// slide img
import slideImg1 from "../../../assets/home/slide1.jpg";
import slideImg2 from "../../../assets/home/slide2.jpg";
import slideImg3 from "../../../assets/home/slide3.jpg";
import slideImg4 from "../../../assets/home/slide4.jpg";
import slideImg5 from "../../../assets/home/slide5.jpg";

const OrderOnline = () => {
  return (
    <div className="container mx-auto py-[50px] px-5">
      <SectionTitle></SectionTitle>
      <div className="py-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={"auto"}
          effect={"coverflow"}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {/* items */}
          <SwiperSlide>
            <div className="relative w-full h-[400px] xl:h-[450px]">
              <img className="-z-10 w-full h-full" src={slideImg1} alt="" />
              <h4 className="absolute bottom-0 z-10 w-full text-center text-white text-[32px] font-normal font-['Cinzel']">
                Salads
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[400px] xl:h-[450px]">
              <img className="-z-10 w-full h-full" src={slideImg2} alt="" />
              <h4 className="absolute bottom-0 z-10 w-full text-center text-white text-[32px] font-normal font-['Cinzel']">
                Soups
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[400px] xl:h-[450px]">
              <img className="-z-10 w-full h-full" src={slideImg3} alt="" />
              <h4 className="absolute bottom-0 z-10 w-full text-center text-white text-[32px] font-normal font-['Cinzel']">
                pizzas
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rrelative w-full h-[400px] xl:h-[450px]">
              <img className="-z-10 w-full h-full" src={slideImg4} alt="" />
              <h4 className="absolute bottom-0 z-10 w-full text-center text-white text-[32px] font-normal font-['Cinzel']">
                desserts
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[400px] xl:h-[450px]">
              <img className="-z-10 w-full h-full" src={slideImg5} alt="" />
              <h4 className="absolute bottom-0 z-10 w-full text-center text-white text-[32px] font-normal font-['Cinzel']">
                Salads
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[400px] xl:h-[450px]">
              <img className="-z-10 w-full h-full" src={slideImg2} alt="" />
              <h4 className="absolute bottom-0 z-10 w-full text-center text-white text-[32px] font-normal font-['Cinzel']">
                Soups
              </h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OrderOnline;
