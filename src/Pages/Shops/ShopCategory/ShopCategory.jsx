import React from "react";
import useMenu from "../../../useMenu/useMenu";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Spinner } from "@chakra-ui/react";

const ShopCategory = ({ category }) => {
  const [menu, loading] = useMenu(category, 6);
  return (
    <div>
      {loading && (
        <div className="text-center -m-8">
          <Spinner color="blue.800" size='xl' />
        </div>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
