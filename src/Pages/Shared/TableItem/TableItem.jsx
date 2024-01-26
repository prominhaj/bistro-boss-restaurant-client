import { FaTrashAlt } from "react-icons/fa";

const TableItem = ({ item, index, onDelete }) => {
  const { image, name, price } = item;

  return (
    <tr className="flex px-10 items-center justify-between py-3 sm:py-5 border-b">
      <td className="w-1/4 flex items-center gap-10">
        <span className="text-center text-neutral-900 text-xl font-bold font-['Inter']">
          {index + 1}
        </span>
        <img src={image} className="w-[75px] h-[75px] rounded bg-zinc-300"></img>
      </td>
      <td className="w-1/4 text-center text-neutral-500 text-base font-normal font-['Inter']">
        {name}
      </td>
      <td className="w-1/4 text-center text-neutral-500 text-base font-normal font-['Inter']">
        ${price}
      </td>
      <td className="w-1/4 text-center">
        <button onClick={() => onDelete(item)} className="bg-red-700 rounded-[5px] p-3"><FaTrashAlt className="text-white text-2xl" /></button>
      </td>
    </tr>
  );
};

export default TableItem;
