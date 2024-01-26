import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const MyBooking = () => {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard | Booking</title>
      </Helmet>

      {/* Section Title */}
      <SectionTitle subHading="Excellent Ambience" hading="MY BOOKINGS" />
      <section className="py-10">

      </section>
    </>
  );
};

export default MyBooking;
