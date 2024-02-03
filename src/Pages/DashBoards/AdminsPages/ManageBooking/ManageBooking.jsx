import React from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../../hook/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../../hook/useAuth/useAuth";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import DashBoardTable from "../../../Shared/DashBoardTable/DashBoardTable";
import { FaCheck } from "react-icons/fa6";
import swal from "sweetalert";

const ManageBooking = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: history = [], refetch } = useQuery({
    queryKey: ["payment-history"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-payment-history");
      return res.data;
    },
  });

  const emailBodyTemplate = (item, index) => {
    return (
      <div className="flex items-center gap-5">
        <h2>{index.rowIndex + 1}</h2>
        <h2 className="text-neutral-500 text-base font-normal font-['Inter']">
          {item.email}
        </h2>
      </div>
    );
  };

  const priceBodyTemplate = (item) => {
    return (
      <div>
        <h2>${item.price}</h2>
      </div>
    );
  };

  const bookingDateBodyTemplate = (item) => {
    return (
      <div>
        <h2>{item.date}</h2>
      </div>
    );
  };

  const quantityBodyTemplate = (item) => {
    return (
      <div>
        <h2 className="text-start">{item.quantity}</h2>
      </div>
    );
  };

  const activityBodyTemplate = (item) => {
    return (
      <div>
        {item.status === "Pending" ? (
          <h2 className="text-start text-yellow-600 text-base font-bold font-['Inter']">
            {item.status}
          </h2>
        ) : (
          <h2 className="text-start text-green-700 text-base font-bold font-['Inter']">
            {item.status}
          </h2>
        )}
      </div>
    );
  };

  const actionBodyTemplate = (item) => {
    const handleStatus = (item) => {
      swal({
        title: "Are you sure?",
        text: `Complete ${item.status} Order`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axiosSecure.patch(`/payment-status/${item._id}`).then((res) => {
            if (res.data.modifiedCount) {
              refetch();
              swal("Order Complete SuccessFull", {
                icon: "success",
              });
            }
          });
        }
      });
    };
    return (
      <div>
        {item.status === "Pending" ? (
          <button
            onClick={() => handleStatus(item)}
            className="p-3 text-white bg-green-300 rounded-full"
          >
            <FaCheck className="text-2xl" />
          </button>
        ) : (
          <button className="p-3 text-white bg-green-700 rounded-full">
            <FaCheck className="text-2xl" />
          </button>
        )}
      </div>
    );
  };

  return (
    <div>
      <SectionTitle subHading="At a Glance!" hading="ALL BOOKINGS" />
      <section className="py-10">
        <div>
          <DashBoardTable
            data={history}
            header1="# USER EMAIL"
            header2="PRICE"
            header3="BOOKING DATE"
            header4="QUANTITY"
            header5="ACTIVITY"
            header6="ACTION"
            item1BodyTemp={emailBodyTemplate}
            item2BodyTemp={priceBodyTemplate}
            item3BodyTemp={bookingDateBodyTemplate}
            item4BodyTemp={quantityBodyTemplate}
            item5BodyTemp={activityBodyTemplate}
            item6BodyTemp={actionBodyTemplate}
          />
        </div>
      </section>
    </div>
  );
};

export default ManageBooking;
