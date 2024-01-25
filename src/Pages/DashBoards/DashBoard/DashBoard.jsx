import React from "react";
import { Helmet } from "react-helmet";
import LeftMenu from "../LeftMenu/LeftMenu";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>

      <div className="flex gap-6">
        {/* Left Menu */}
        <LeftMenu />

        <div className="pt-[50px] pr-[50px]">
          {/* OutLet */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
