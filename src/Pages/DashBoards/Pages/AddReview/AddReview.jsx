import React, { useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Textarea } from "@chakra-ui/react";
import { FaSpaceShuttle } from "react-icons/fa";

const AddReview = () => {
  const [rating, setRating] = useState(0);

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard | Review</title>
      </Helmet>

      {/* Section Title */}
      <SectionTitle
        subHading="Sharing is Caring!!!"
        hading="GIVE A REVIEW..."
      />
      <section className="py-10">
        <form className="bg-zinc-100 px-[100px] py-[50px]">
          <div className="text-center">
            <h2 className="text-neutral-900 text-[32px] font-medium font-['Cinzel']">
              Rate US!
            </h2>
            <div className="flex justify-center pt-5 items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                onChange={setRating}
                isRequired
              />
            </div>
          </div>
          <div className="pt-10 flex flex-col gap-6">
            <div>
              <label
                htmlFor="recipe"
                className="block text-neutral-700 text-xl mb-3 font-semibold font-['Inter']"
              >
                Which recipe you liked most?
              </label>
              <input
                name="recipe"
                id="recipe"
                className="border py-3 border-gray-300 text-xl px-4 text-black w-full rounded"
                type="text"
                placeholder="Recipe you liked most"
              />
            </div>
            <div>
              <label
                htmlFor="suggestion"
                className="block text-neutral-700 text-xl mb-3 font-semibold font-['Inter']"
              >
                Do you have any suggestion for us?
              </label>
              <input
                name="suggestion"
                id="suggestion"
                className="border py-3 border-gray-300 text-xl px-4 text-black w-full rounded"
                type="text"
                placeholder="Sugggestion"
              />
            </div>
            <div>
              <label
                htmlFor="details"
                className="block text-neutral-700 text-xl mb-3 font-semibold font-['Inter']"
              >
                Kindly express your care in a short way.
              </label>
              <Textarea
                name="details"
                className="border py-3 border-gray-300 text-xl px-4 text-black w-full rounded"
                rows={6}
                id="details"
                placeholder="Review in detail"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center py-4 px-7 rounded gap-3 bg-gradient-to-r from-yellow-800 to-yellow-600 text-white text-xl font-bold font-['Inter']"
              >
                Send Review <FaSpaceShuttle />
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddReview;
