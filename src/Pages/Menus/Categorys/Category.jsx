import React from "react";
import OurMenuCard from "../../../Components/OurMenuCard/OurMenuCard";
import useMenu from "../../../hook/useMenu/useMenu";

const Category = ({ category }) => {
  const [menu, loading] = useMenu(category, 6);
  return (
    <div className="grid md:grid-cols-2 gap-6 py-6 sm:py-10">
      {menu.map((item) => (
        <OurMenuCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Category;
