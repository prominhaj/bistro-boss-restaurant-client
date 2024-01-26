import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard | History</title>
      </Helmet>
      
      {/* Section Title */}
      <SectionTitle subHading="At a Glance!" hading="PAYMENT HISTORY" />
    </>
  );
};

export default PaymentHistory;
