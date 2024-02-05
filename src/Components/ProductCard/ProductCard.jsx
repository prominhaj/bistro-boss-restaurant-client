import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useCart from "../../hook/useCart/useCart";
import toast from "react-hot-toast";

const ProductCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    if (user?.email) {
      fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            toast.success("Cart Added SuccessFull")
          }
        });
    } else {
      toast.error("Places Login First");
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="relative">
        <img className="w-full h-[300px] object-cover" src={image} alt="" />
        <h4 className="text-center text-white text-base font-semibold font-['Inter'] leading-relaxed py-2 px-5 bg-gray-900 absolute right-5 top-5 rounded">
          ${price}
        </h4>
      </div>
      <div className="flex flex-col justify-between bg-zinc-100 py-[30px] px-[40px] flex-grow">
        <h2 className="text-center mb-[8px] text-neutral-900 text-xl sm:text-2xl font-semibold font-['Inter']">
          {name}
        </h2>
        <p className="flex-grow text-start text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
          {recipe.length > 80 ? recipe.slice(0, 80) + "..." : recipe}
        </p>
        <div className="text-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="px-[30px] mt-[24px] py-5 hover:bg-gray-800 hover:border-none duration-300 bg-gray-200 rounded-lg border-b-2 border-yellow-600 justify-start items-start gap-2.5 inline-flex text-center text-yellow-600 sm:text-xl font-medium font-['Inter'] uppercase"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
