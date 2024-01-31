import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import LeftMenu from "../LeftMenu/LeftMenu";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../../hook/useAdmin/useAdmin";

const DashBoard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/"
    ) {
      if (isAdmin || isAdminLoading) {
        return navigate("/dashboard/admin/home");
      } else {
        return navigate("/dashboard/home");
      }
    }
  }, [location, navigate, isAdmin, isAdminLoading]);

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>

      <div className="flex gap-6">
        {/* Left Menu */}
        <LeftMenu isAdmin={isAdmin} />

        <div className="pt-[30px] pr-[30px] md:pt-[50px] md:pr-[50px] w-full">
          {/* OutLet */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
