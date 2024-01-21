import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Rating } from "primereact/rating";
import quoteLeft from "../../../assets/home/quote-left 1.svg";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  console.log(reviews);
  return (
    <section className="container mx-auto px-5 py-10 sm:py-20">
      <SectionTitle
        subHading={"What Our Clients Say"}
        hading={"TESTIMONIALS"}
      />
      <div className="pt-10">
        <Swiper navigation={true} modules={[Navigation]}>
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col justify-center items-center gap-3 sm:gap-5">
                <div className="mb-2 sm:mb-4">
                  <Rating
                    value={review.rating}
                    readOnly
                    cancel={false}
                    pt={{
                      onIcon: { className: "text-[#CD9002] sm:w-8 sm:h-8" },
                      offIcon: { className: "text-[#A1A1A1] sm:w-8 sm:h-8" },
                    }}
                  />
                </div>
                <div className="sm:mb-2">
                  <img className="w-12 md:w-auto" src={quoteLeft} alt="" />
                </div>
                <p className="text-center px-7 sm:px-10 text-neutral-700 text-base sm:text-xl font-normal font-['Inter'] leading-[35px]">
                  {review.details}
                </p>
                <h2 className="text-center text-yellow-600 text-[25px] sm:text-[32px] font-medium font-['Inter']">
                  {review.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
