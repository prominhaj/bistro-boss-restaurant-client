import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import DashBoardTable from "../../../Shared/DashBoardTable/DashBoardTable";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../../hook/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../../hook/useAuth/useAuth";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: paymentHistory } = useQuery({
    queryKey: ["payment-history"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/user-payment-history?email=${user?.email}`
      );
      return res.data;
    },
  });

  const emailBodyTemp = (item) => {
    return (
      <div>
        <h2>{item.email}</h2>
      </div>
    );
  };

  const priceBodyTemp = (item) => {
    return (
      <div>
        <h2>${item.price}</h2>
      </div>
    );
  };

  const quantityBodyTemp = (item) => {
    return (
      <div>
        <h2>{item.quantity}</h2>
      </div>
    );
  };

  const paymentDateBodyTemp = (item) => {
    return (
      <div>
        <h2>{item.date}</h2>
      </div>
    );
  };

  const statusBodyTemp = (item) => {
    return (
      <div>
        <h2>{item.status}</h2>
      </div>
    );
  };

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard | History</title>
      </Helmet>

      {/* Section Title */}
      <SectionTitle subHading="At a Glance!" hading="PAYMENT HISTORY" />
      <section className="py-10 md:px-10">
        <h2 className="text-neutral-900 mb-4 text-[32px] font-bold font-['Cinzel']">Total Payments: {paymentHistory.length}</h2>
        <div>
          <DashBoardTable
            data={paymentHistory}
            header1="EMAIL"
            header2="TOTAL PRICE"
            header3="QUANTITY"
            header4="PAYMENT DATE"
            header5="STATUS"
            item1BodyTemp={emailBodyTemp}
            item2BodyTemp={priceBodyTemp}
            item3BodyTemp={quantityBodyTemp}
            item4BodyTemp={paymentDateBodyTemp}
            item5BodyTemp={statusBodyTemp}
          />
        </div>
      </section>
    </>
  );
};

export default PaymentHistory;
