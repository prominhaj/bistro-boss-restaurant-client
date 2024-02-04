import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import DashBoardTable from "../../../Shared/DashBoardTable/DashBoardTable";
import useAxiosSecure from "../../../../hook/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";
import useAuth from "../../../../hook/useAuth/useAuth";

const MyBooking = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: allBookings, refetch } = useQuery({
    queryKey: ["user-bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-bookings?email=${user?.email}`);
      return res.data;
    },
  });

  console.log(allBookings);

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard | Booking</title>
      </Helmet>

      {/* Section Title */}
      <SectionTitle subHading="Excellent Ambience" hading="MY BOOKINGS" />
      <section className="py-10 md:px-10">
        <div>
          <DashBoardTable data={allBookings} />
        </div>
      </section>
    </>
  );
};

export default MyBooking;
