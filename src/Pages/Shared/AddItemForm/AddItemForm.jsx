import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoRestaurant } from "react-icons/io5";

const AddItemForm = ({ onAddItem, register, handleSubmit, errors }) => {
  //   const {
  //     register,
  //     formState: { errors },
  //     handleSubmit,
  //   } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onAddItem)}
      className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-12 bg-zinc-100 p-[25px] sm:p-[50px] rounded-md"
    >
      <FormControl className="md:col-span-2">
        <FormLabel className="text-neutral-700 text-xl font-semibold font-['Inter']">
          Recipe name
        </FormLabel>
        <Input
          {...register("name", { required: true })}
          size={"lg"}
          className="!bg-white border border-gray-200 rounded-lg text-neutral-800 text-xl font-normal font-['Inter']"
          type="text"
          placeholder="Recipe name"
        />
        {errors.name && <p className="text-red-500">Recipe Name is required</p>}
      </FormControl>
      <FormControl>
        <FormLabel className="text-neutral-700 text-xl font-semibold font-['Inter']">
          Category
        </FormLabel>
        <Select
          {...register("category", { required: true })}
          className="!bg-white border !pt-0 border-gray-200 rounded-lg text-neutral-800 text-xl font-normal font-['Inter']"
          size={"lg"}
          placeholder="Category"
        >
          <option>Salad</option>
          <option>Pizza</option>
          <option>Soup</option>
          <option>Dessert</option>
          <option>Popular</option>
        </Select>
        {errors.category && (
          <p className="text-red-500">Category is required</p>
        )}
      </FormControl>
      <FormControl>
        <FormLabel className="text-neutral-700 text-base sm:text-xl font-semibold font-['Inter']">
          Price
        </FormLabel>
        <Input
          {...register("price", { required: true })}
          size={"lg"}
          className="!bg-white border border-gray-200 rounded-lg text-neutral-800 text-base sm:text-xl font-normal font-['Inter']"
          type="number"
          placeholder="Price"
        />
        {errors.price && <p className="text-red-500">Price is required</p>}
      </FormControl>
      <FormControl className="md:col-span-2" isRequired>
        <FormLabel className="text-neutral-700 text-base sm:text-xl font-semibold font-['Inter']">
          Recipe Details
        </FormLabel>
        <Textarea
          {...register("recipe", { required: true })}
          rows={6}
          className="!bg-white border border-gray-200 rounded-lg text-neutral-800 text-base sm:text-xl font-normal font-['Inter']"
          size={"lg"}
          placeholder="Recipe Details"
        />
        {errors.recipe && (
          <p className="text-red-500">Recipe Details is required</p>
        )}
      </FormControl>
      <FormControl>
        <Input
          {...register("image", { required: true })}
          size={"lg"}
          className="text-neutral-800 text-base sm:text-xl font-normal font-['Inter']"
          type="file"
          placeholder="Price"
        />
        {errors.image && <p className="text-red-500">Image is required</p>}
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
