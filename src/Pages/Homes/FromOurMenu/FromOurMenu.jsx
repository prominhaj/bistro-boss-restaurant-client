import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import OurMenuCard from "../../../Components/OurMenuCard/OurMenuCard";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";

const FromOurMenu = () => {
  const [allMenu, setAllMenu] = useState([]);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/allMenu?category=popular&&limit=6`)
      .then((res) => res.json())
      .then((data) => {
        setAllMenu(data);
        setLoading(false);
      });
  }, []);

  const viewFullMenu = () => {
    fetch(`http://localhost:5000/allMenu?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setAllMenu(data);
        setLimit(limit + 6);
      });
  };
  
  return (
    <section className="container mx-auto px-5 pt-8 pb-12">
      <SectionTitle
        subHading={"Check it out"}
        hading={"FROM OUR MENU"}
      ></SectionTitle>
      {loading && (
        <div className="text-center pt-5">
          <Spinner color="red.500" />
        </div>
      )}
      <div className="grid lg:grid-cols-2 gap-6 py-12">
        {allMenu.map((item) => (
          <OurMenuCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={viewFullMenu}
          className="btn bg-transparent border-b-4 border-x-0 border-t-0 px-6 hover:bg-black hover:text-white border-black focus:bg-black focus:text-white hover:border-black transition-all duration-400 text-center text-gray-800 sm:text-xl font-medium font-['Inter'] flex justify-center items-center !h-auto !min-h-0 py-3 uppercase"
        >
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default FromOurMenu;
