import moment from "moment";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="w-full md:h-[300px] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-0">
        <div className="bg-gray-800 py-8 w-full flex flex-col items-center justify-center h-full">
          <div className="flex flex-col gap-2 px-5">
            <header className="text-center text-white text-xl sm:text-[32px] mb-4 font-medium font-['Inter']">
              CONTACT US
            </header>
            <div className="text-center sm:flex flex-col gap-3 text-white text-lg sm:text-xl font-medium font-['Inter'] leading-9">
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 py-8 w-full h-full flex flex-col items-center justify-center">
          <div className="sm:flex flex-col gap-3 px-5">
            <header className="text-center text-white text-xl sm:text-[32px] mb-4 font-medium font-['Inter']">
              Follow US
            </header>
            <h6 className="text-center text-white text-xl font-medium font-['Inter'] leading-9">
              Join us on social media
            </h6>
            <div className="flex gap-4 items-center mt-2 sm:mt-0 justify-center">
              <Link to="https://www.facebook.com/fxminhaj1002/" target="_blank">
                <FaFacebookF className="w-[35px] h-[35px] relative flex-col justify-start items-start inline-flex" />
              </Link>
              <Link to="https://www.instagram.com/fxminhaj/" target="_blank">
                <FaInstagram className="w-[35px] h-[35px] relative flex-col justify-start items-start inline-flex" />
              </Link>
              <Link to="https://twitter.com/Parsonal32" target="_blank">
                <FaTwitter className="w-[35px] h-[35px] relative flex-col justify-start items-start inline-flex" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-4 px-5">
        <p className="text-center text-white text-md sm:text-xl font-medium font-['Inter'] leading-9">Copyright © Bistro Boss Restaurant {moment().years()}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
