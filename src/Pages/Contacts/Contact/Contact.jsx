import React from "react";
import HeroSection from "../../../Components/HeroSection/HeroSection";
import { Helmet } from "react-helmet";
import bgImg from "../../../assets/contact/banner.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { MdLocalPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaTelegramPlane } from "react-icons/fa";
import OurLocationItem from "../../../Components/OurLocationItem/OurLocationItem";
import locations from "../../../../public/LocationsData/LoacationData";

const Contact = () => {

  return (
    <div className="pb-20">
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Contact</title>
      </Helmet>

      <HeroSection
        img={bgImg}
        title="CONTACT US"
        subTitle="Would you like to try a dish?"
      />
      <div className="container mx-auto px-5">
        <section className="py-[60px] md:py-[100px]">
          <SectionTitle subHading="Visit Us" hading="OUR LOCATION" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 pt-10">
            {
              locations.map(item => <OurLocationItem key={item._id} item={item}></OurLocationItem>)
            }
          </div>
        </section>
        <section className="pb-10">
          <SectionTitle subHading="Send Us a Message" hading="CONTACT FORM" />
          <form className="grid md:grid-cols-2 gap-6 mt-10 p-[30px] sm:p-[50px] bg-zinc-100">
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                size={"lg"}
                className="!bg-white"
                type="text"
                placeholder="Enter your name"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                size={"lg"}
                className="!bg-white"
                type="email"
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl className="md:col-span-2" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input
                size={"lg"}
                className="!bg-white"
                type="number"
                placeholder="Enter your phone number"
              />
            </FormControl>
            <FormControl className="md:col-span-2" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                rows={7}
                size={"lg"}
                className="!bg-white"
                placeholder="Write your message here"
              />
            </FormControl>
            <div className="md:col-span-2">
              <div className="block">
                <h2 className="font-bold">This is Captcha Area</h2>
              </div>
              <div className="pt-8 md:pt-12 flex justify-center">
                <button
                  className="bg-gradient-to-r from-yellow-800 to-yellow-600 text-white md:text-xl py-4 px-5 flex items-center gap-2 font-bold font-['Inter']"
                  type="submit"
                >
                  Send Message{" "}
                  <FaTelegramPlane className="text-2xl text-white" />
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
