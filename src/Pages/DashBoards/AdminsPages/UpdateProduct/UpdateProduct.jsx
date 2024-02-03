import { useForm } from "react-hook-form";
import AddItemForm from "../../../Shared/AddItemForm/AddItemForm";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const item = useLoaderData();

  const onUpdateItem = (item) => {
    console.log(item);
  };

  return (
    <div>
      <h2 className="text-center text-neutral-900 text-[40px] font-normal font-['Inter']">
        UPDATE ITEM
      </h2>
      <div>
        <AddItemForm
          onAddItem={onUpdateItem}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          update={true}
          updateValue={item}
        />
      </div>
    </div>
  );
};

export default UpdateProduct;
