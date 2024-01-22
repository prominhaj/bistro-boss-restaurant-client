import React from "react";
import { Link } from "react-router-dom";

const MoreButton = ({route }) => {
  return (
    <Link
      to={route}
      className="btn bg-transparent border-b-4 border-x-0 border-t-0 px-6 hover:bg-black hover:text-white border-black focus:bg-black focus:text-white hover:border-black transition-all duration-400 text-center text-gray-800 sm:text-xl font-medium font-['Inter'] flex justify-center items-center !h-auto !min-h-0 py-3 uppercase"
    >
      ORDER YOUR FAVOURITE FOOD
    </Link>
  );
};

export default MoreButton;
