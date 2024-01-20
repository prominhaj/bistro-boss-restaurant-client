import React from "react";
import testImg from "../../assets/home/slide1.jpg";

const ProductCard = () => {
  return (
    <div className="flex flex-col">
      <img className="w-full h-[300px] object-cover" src={testImg} alt="" />
      <div className="bg-zinc-100 py-[30px] px-[40px]">
        <h2 className="text-center mb-[8px] text-neutral-900 text-2xl font-semibold font-['Inter']">
          Caeser Salad
        </h2>
        <p className="text-center text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
          Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </p>
        <div className="text-center">
          <button className="px-[30px] mt-[24px] py-5 hover:bg-gray-800 hover:border-none duration-300 bg-gray-200 rounded-lg border-b-2 border-yellow-600 justify-start items-start gap-2.5 inline-flex text-center text-yellow-600 text-xl font-medium font-['Inter'] uppercase">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
