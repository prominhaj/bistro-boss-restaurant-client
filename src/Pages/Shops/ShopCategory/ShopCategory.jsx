import React, { useEffect, useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Spinner } from "@chakra-ui/react";
import { Pagination } from "flowbite-react";
import useShopMenu from "../../../hook/useShopMenu/useShopMenu";

const ShopCategory = ({ category }) => {
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;
  const totalPage = Math.ceil(total / limit);
  const [products, loading] = useShopMenu(currentPage, category, limit);

  useEffect(() => {
    fetch(`https://bistro-boss-server-five-black.vercel.app/totalProducts?category=${category}`)
      .then((res) => res.json())
      .then((data) => setTotal(data.result));
  }, [category]);

  const onPageChange = (number) => setCurrentPage(number);
  
  return (
    <div>
      {loading && (
        <div className="text-center -mt-5">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
      <div className="pt-5 text-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ShopCategory;
