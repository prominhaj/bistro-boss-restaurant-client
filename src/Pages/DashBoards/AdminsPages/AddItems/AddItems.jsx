import React from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import AddItemForm from "../../../Shared/AddItemForm/AddItemForm";

const AddItems = () => {
  return (
    <div>
      {/* Section Title */}
      <SectionTitle subHading="What's new?" hading="ADD AN ITEM" />

      <section>
        <AddItemForm />
      </section>
    </div>
  );
};

export default AddItems;
