import React, { useState } from "react";
import { Helmet } from "react-helmet";
import LeftMenu from "../LeftMenu/LeftMenu";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>

      <div className="flex gap-6">
        {/* Left Menu */}
        <LeftMenu />

        <div className="pt-[30px] pr-[30px] md:pt-[50px] md:pr-[50px] w-full">
          {/* OutLet */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
