import React from "react";
import { Helmet } from "react-helmet";
import walletImg from "../../../../assets/dashboard/Home/wallet.svg";
import telephoneImg from "../../../../assets/dashboard/Home/telephone.svg";
import storeImg from "../../../../assets/dashboard/Home/store.svg";

const DashBoardHome = () => {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard | Home</title>
      </Helmet>

      <h1 className="text-neutral-900 text-[20px] sm:text-[32px] font-semibold font-['Cinzel']">
        HI, welcome back!
      </h1>
      <div className="grid md:grid-cols-3 gap-6 py-6 w-full">
        <div className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-100 py-8 rounded-lg flex items-center gap-6 justify-center w-full">
          <img src={walletImg} alt="" />
          <div className="flex flex-col">
            <h2 className="text-white text-[30px] sm:text-[40px] font-extrabold font-['Inter']">
              205
            </h2>
            <h6 className="text-white text-xl sm:text-2xl font-normal font-['Inter']">
              Menu
            </h6>
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-400 to-amber-100 py-8 rounded-lg flex items-center gap-6 justify-center w-full">
          <img src={telephoneImg} alt="" />
          <div className="flex flex-col">
            <h2 className="text-white text-[30px] sm:text-[40px] font-extrabold font-['Inter']">
              103
            </h2>
            <h6 className="text-white text-xl sm:text-2xl font-normal font-['Inter']">
              Shop
            </h6>
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-pink-200 py-8 rounded-lg flex items-center gap-6 justify-center w-full">
          <img src={storeImg} alt="" />
          <div className="flex flex-col">
            <h2 className="text-white text-[30px] sm:text-[40px] font-extrabold font-['Inter']">
              03
            </h2>
            <h6 className="text-white text-xl sm:text-2xl font-normal font-['Inter']">
              Contact
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardHome;
