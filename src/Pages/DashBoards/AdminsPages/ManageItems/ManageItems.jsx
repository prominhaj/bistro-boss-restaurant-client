import { useQuery } from "react-query";
import DashBoardTable from "../../../Shared/DashBoardTable/DashBoardTable";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const ManageItems = () => {
  const { data: menu = [], isLoading: loading } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/menu");
      return res.json();
    },
  });

  console.log(menu);

  const imageBodyTemplate = (product, index) => {
    return (
      <div className="flex items-center gap-5">
        <h2 className="text-neutral-900 text-xl font-bold font-['Inter']">
          {index.rowIndex + 1}
        </h2>
        <img
          className="w-[75px] h-[75px] bg-zinc-300 rounded-md"
          src={product.image}
          alt=""
        />
      </div>
    );
  };

  const nameBodyTemplate = (product) => {
    return (
      <div>
        <h2 className="text-neutral-500 text-base font-normal font-['Inter']">
          {product.name}
        </h2>
      </div>
    );
  };

  const priceBodyTemplate = (product) => {
    return (
      <div>
        <h2 className="text-neutral-500 text-base font-normal font-['Inter']">
          ${product.price}
        </h2>
      </div>
    );
  };

  const updateBodyTemplate = (product) => {
    return (
      <div>
        <button className="bg-orange-400 rounded-[5px] p-3 pt-[10px] pr-[10px] flex  items-center justify-center">
          <FaRegEdit className="text-2xl text-white" />
        </button>
      </div>
    );
  };

  const actionBodyTemplate = () => {
    return (
      <div>
        <button className="p-3 rounded bg-[#B91C1C]">
          <FaRegTrashAlt className="text-2xl text-white" />
        </button>
      </div>
    );
  };

  return (
    <div>
      <SectionTitle subHading="Hurry Up!" hading="MANAGE ALL ITEMS" />
      <section className="py-10 sm:px-[20px] lg:px-[50px] xl:px-[100px]">
        <DashBoardTable
          data={menu}
          header1="# ITEM IMAGE"
          header2="ITEM NAME"
          header3="PRICE"
          header4="UPDATE"
          header5="ACTION"
          item1BodyTemp={imageBodyTemplate}
          item2BodyTemp={nameBodyTemplate}
          item3BodyTemp={priceBodyTemplate}
          item4BodyTemp={updateBodyTemplate}
          item5BodyTemp={actionBodyTemplate}
        />
      </section>
    </div>
  );
};

export default ManageItems;
