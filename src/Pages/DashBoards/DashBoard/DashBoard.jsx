import React from "react";
import { Helmet } from "react-helmet";

const DashBoard = () => {
  return (
    <div>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <h1>This is DashBoard Page</h1>
    </div>
  );
};

export default DashBoard;
