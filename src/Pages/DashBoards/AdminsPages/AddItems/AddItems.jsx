import swal from "sweetalert";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hook/useAxiosSecure/useAxiosSecure";
import AddItemForm from "../../../Shared/AddItemForm/AddItemForm";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const imageUploadToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(`https://api.imgbb.com/1/upload?key=${imageUploadToken}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const { name, recipe, image, category, price } = data;
          const newItem = {
            name,
            recipe,
            image: imgRes.data.display_url,
            category: category.toLowerCase(),
            price: parseFloat(price),
          };
          axiosSecure.post("/menu", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              swal("Item Add SuccessFull", " ", "success");
            }
          });
        }
      });
  };

  return (
    <div>
      {/* Section Title */}
      <SectionTitle subHading="What's new?" hading="ADD AN ITEM" />

      <section className="md:px-10 xl:px-20">
        <AddItemForm onAddItem={onSubmit} register={register} errors={errors} handleSubmit={handleSubmit} />
      </section>
    </div>
  );
};

export default AddItems;
