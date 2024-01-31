import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { FaRegCalendarCheck } from "react-icons/fa";
import "./Reservation.css";
import { Calendar } from "primereact/calendar";
import { IoTimeOutline } from "react-icons/io5";
import { Input, Select } from "@chakra-ui/react";
import OurLocationItem from "../../../../Components/OurLocationItem/OurLocationItem";
import locations from "../../../../LocationsData/LoacationData";

const Reservation = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard | Reservation</title>
      </Helmet>

      {/* Section Title */}
      <SectionTitle subHading="Reservation" hading="BOOK A TABLE" />

      {/* Book Table */}
      <section className="py-10">
        <form className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          <div>
            <label
              className="text-neutral-700 text-xl font-semibold font-['Inter'] block mb-3"
              htmlFor="date"
            >
              Date*
            </label>
            <Calendar
              value={date}
              className="w-full"
              id="date"
              showIcon
              placeholder="mm/dd/yyyy"
              onChange={(e) => setDate(e.value)}
              showButtonBar
              pt={{
                input: {
                  root: {
                    className:
                      "border border-slate-200 text-gray-600 rounded py-3",
                  },
                },
                dropdownButton: {
                  root: { className: "border border-slate-200 py-3" },
                },
              }}
            />
          </div>
          <div>
            <label
              className="text-neutral-700 text-xl font-semibold font-['Inter'] block mb-3"
              htmlFor="time"
            >
              Time*
            </label>
            <Calendar
              id="time"
              value={time}
              placeholder="-- / -- --"
              className="w-full"
              onChange={(e) => setTime(e.value)}
              showIcon
              timeOnly
              icon={() => <IoTimeOutline className="text-2xl" />}
              pt={{
                input: {
                  root: {
                    className:
                      "border border-slate-200 text-gray-600 rounded py-3",
                  },
                },
                dropdownButton: {
                  root: { className: "border border-slate-200 py-3" },
                },
              }}
            />
          </div>
          <div>
            <label
              className="text-neutral-700 text-xl font-semibold font-['Inter'] block mb-3"
              htmlFor="guest"
            >
              Guest*
            </label>
            <Select
              name="guest"
              defaultValue={"person1"}
              className="w-full border pt-0 border-slate-200 rounded py-3 text-gray-600 text-base font-normal font-['Inter'] "
              id="guest"
            >
              <option value="person1">1 Person</option>
              <option value="person2">2 Person</option>
              <option value="person3">3 Person</option>
              <option value="person4">4 Person</option>
            </Select>
          </div>
          <div>
            <label
              className="text-neutral-700 text-xl font-semibold font-['Inter'] block mb-3"
              htmlFor="name"
            >
              Name*
            </label>
            <Input
              id="name"
              name="name"
              className="w-full border border-slate-200 rounded py-3 text-gray-600 px-3 transition-all focus:outline-[#1C64F2]  text-base font-normal font-['Inter']"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              className="text-neutral-700 text-xl font-semibold font-['Inter'] block mb-3"
              htmlFor="phone"
            >
              Phone*
            </label>
            <Input
              id="phone"
              name="phone"
              className="w-full border border-slate-200 rounded py-3 text-gray-600 px-3 transition-all focus:outline-[#1C64F2]  text-base font-normal font-['Inter']"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label
              className="text-neutral-700 text-xl font-semibold font-['Inter'] block mb-3"
              htmlFor="email"
            >
              Email*
            </label>
            <Input
              id="email"
              name="email"
              className="w-full border border-slate-200 rounded py-3 text-gray-600 px-3 transition-all focus:outline-[#1C64F2]  text-base font-normal font-['Inter']"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-3">
            <button
              className="flex items-center gap-2 text-white sm:text-xl font-bold font-['Inter'] bg-gradient-to-r text-base from-yellow-800 to-yellow-600 py-3 sm:py-4 px-5 sm:px-7 rounded"
              type="submit"
            >
              Book A Table <FaRegCalendarCheck />
            </button>
          </div>
        </form>
      </section>

      {/* Our Location */}
      {/* Section Title */}
      <SectionTitle subHading="Visit Us" hading="OUR LOCATION" />
      <section className="grid items-center justify-center grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
        {
          locations.map(item => <OurLocationItem key={item._id} item={item} />)
        }
      </section>
    </>
  );
};

export default Reservation;
