import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { IoRestaurant } from "react-icons/io5";

const AddItemForm = () => {
  return (
    <form className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-12 bg-zinc-100 p-[25px] sm:p-[50px] rounded-md">
      <FormControl className="md:col-span-2" isRequired>
        <FormLabel className="text-neutral-700 text-xl font-semibold font-['Inter']">
          Recipe name
        </FormLabel>
        <Input
          size={"lg"}
          className="!bg-white border border-gray-200 rounded-lg text-neutral-800 text-xl font-normal font-['Inter']"
          type="text"
          placeholder="Recipe name"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel className="text-neutral-700 text-xl font-semibold font-['Inter']">
          Category
        </FormLabel>
        <Select
          defaultValue={"Category"}
          className="!bg-white border !pt-0 border-gray-200 rounded-lg text-neutral-800 text-xl font-normal font-['Inter']"
          size={"lg"}
        >
          <option disabled>Category</option>
          <option>Salad</option>
          <option>Pizza</option>
          <option>Soup</option>
          <option>Dessert</option>
          <option>Popular</option>
        </Select>
      </FormControl>
      <FormControl isRequired>
        <FormLabel className="text-neutral-700 text-base sm:text-xl font-semibold font-['Inter']">
          Price
        </FormLabel>
        <Input
          size={"lg"}
          className="!bg-white border border-gray-200 rounded-lg text-neutral-800 text-base sm:text-xl font-normal font-['Inter']"
          type="number"
          placeholder="Price"
        />
      </FormControl>
      <FormControl className="md:col-span-2" isRequired>
        <FormLabel className="text-neutral-700 text-base sm:text-xl font-semibold font-['Inter']">
          Recipe Details
        </FormLabel>
        <Textarea
          rows={6}
          className="!bg-white border border-gray-200 rounded-lg text-neutral-800 text-base sm:text-xl font-normal font-['Inter']"
          size={"lg"}
          placeholder="Recipe Details"
        />
      </FormControl>
      <FormControl isRequired>
        <Input
          size={"lg"}
          className="text-neutral-800 text-base sm:text-xl font-normal font-['Inter']"
          type="file"
          placeholder="Price"
        />
      </FormControl>
      <div className="md:mt-2 md:col-span-2">
        <button className="flex items-center gap-2 sm:gap-3 text-white text-xl font-bold font-['Inter'] bg-gradient-to-r from-yellow-800 to-yellow-600 py-2 sm:py-3 px-4 sm:px-6 rounded">
          Add Item <IoRestaurant />
        </button>
      </div>
    </form>
  );
};

export default AddItemForm;
