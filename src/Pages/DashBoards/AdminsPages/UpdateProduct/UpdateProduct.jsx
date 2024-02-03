import { useForm } from "react-hook-form";
import AddItemForm from "../../../Shared/AddItemForm/AddItemForm";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hook/useAxiosSecure/useAxiosSecure";
import swal from "sweetalert";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const item = useLoaderData();
  const id = item._id;
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const onUpdateItem = async (item) => {
    axiosSecure.put(`/menu-update/${id}`, item).then((res) => {
      if (res.data.modifiedCount > 0) {
        swal("Update SuccessFull", "", "success");
        navigate("/dashboard/admin/manageItems");
      } else {
        toast.error("Places Change Same Thing");
      }
    });
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
