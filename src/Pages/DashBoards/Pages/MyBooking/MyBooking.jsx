import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import DashBoardTable from "../../../Shared/DashBoardTable/DashBoardTable";
import useAxiosSecure from "../../../../hook/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";
import useAuth from "../../../../hook/useAuth/useAuth";
import swal from "sweetalert";
import { FaRegTrashAlt } from "react-icons/fa";

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

  const nameBodyTemp = (item, index) => {
    return (
      <div className="flex items-center gap-5">
        <h2 className="text-neutral-900 text-xl font-bold font-['Inter']">
          {index.rowIndex + 1}
        </h2>
        <h2>{item.name}</h2>
      </div>
    );
  };

  const guestBodyTemp = (item) => {
    return (
      <div>
        <h2>{item.guest}</h2>
      </div>
    );
  };

  const timeBodyTemp = (item) => {
    return (
      <div>
        <h2>{item.time}</h2>
      </div>
    );
  };

  const dateBodyTemp = (item) => {
    return (
      <div>
        <h2>{item.date}</h2>
      </div>
    );
  };

  const actionBodyTemp = (item) => {
    const handleDelete = (item) => {
      swal({
        title: "Are you sure?",
        text: `You Wont Tow Delete Booking ${item.name}`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axiosSecure.delete(`/user-booking/${item._id}`).then((res) => {
            if (res.data.deletedCount) {
              refetch();
              swal("Delete SuccessFull", {
                icon: "success",
              });
            }
          });
        }
      });
    };

    return (
      <button
        onClick={() => handleDelete(item)}
        className="p-3 rounded bg-[#B91C1C]"
      >
        <FaRegTrashAlt className="text-2xl text-white" />
      </button>
    );
  };

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard | Booking</title>
      </Helmet>

      {/* Section Title */}
      <SectionTitle subHading="Excellent Ambience" hading="MY BOOKINGS" />
      <section className="py-10 md:px-10">
        <h2 className="text-neutral-900 text-[32px] font-bold font-['Cinzel'] mb-4">
          Total bookings: {allBookings.length}
        </h2>
        <div>
          <DashBoardTable
            data={allBookings}
            header1="# Name"
            header2="Guest"
            header3="Time"
            header4="Date"
            header5="Action"
            item1BodyTemp={nameBodyTemp}
            item2BodyTemp={guestBodyTemp}
            item3BodyTemp={timeBodyTemp}
            item4BodyTemp={dateBodyTemp}
            item5BodyTemp={actionBodyTemp}
          />
        </div>
      </section>
    </>
  );
};

export default MyBooking;
