import { useQuery } from "react-query";
import "./AllUsers.css";
import { FaUsers } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import swal from "sweetalert";
import useAxiosSecure from "../../../../hook/useAxiosSecure/useAxiosSecure";
import DashBoardTable from "../../../Shared/DashBoardTable/DashBoardTable";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  // Handle Admin Role
  const handleAdminRole = (item) => {
    swal({
      title: "Are you sure?",
      text: `${item.name} Admin Role`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/users/admin/${item._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              swal("SuccessFull Admin Role", {
                icon: "success",
              });
            }
          });
      }
    });
  };

  const nameBodyTemplate = (product, index) => {
    return (
      <div className="flex gap-8">
        <h2 className="text-neutral-900 text-xl font-bold font-['Inter']">
          {index.rowIndex + 1}
        </h2>
        <h2 className="text-neutral-500 text-base font-normal font-['Inter']">
          {product.name}
        </h2>
      </div>
    );
  };

  const emailBodyTemplate = (product) => {
    return (
      <h2 className="text-neutral-500 text-base font-normal font-['Inter']">
        {product.email}
      </h2>
    );
  };

  const roleBodyTemplate = (product) => {
    return product.role === "admin" ? (
      <button className="px-3 py-1 text-white rounded bg-violet-500 hover:bg-violet-600">Admin</button>
    ) : (
      <button
        onClick={() => handleAdminRole(product)}
        className="p-3 bg-[#D1A054] rounded"
      >
        <FaUsers className="text-2xl text-white" />
      </button>
    );
  };

  const actionBodyTemplate = () => {
    return (
      <button className="p-3 rounded bg-[#B91C1C]">
        <FaRegTrashAlt className="text-2xl text-white" />
      </button>
    );
  };


  return (
    <div>
      {/* section Title */}
      <SectionTitle subHading="How many??" hading="MANAGE ALL USERS" />

      <div className="py-10 sm:px-[20px] lg:px-[50px] xl:px-[100px]">
        <DashBoardTable data={users} header1="# NAME" header2="EMAIL" header3="ROLE" header4="ACTION" item1BodyTemp={nameBodyTemplate} item2BodyTemp={emailBodyTemplate} item3BodyTemp={roleBodyTemplate} item4BodyTemp={actionBodyTemplate} />
      </div>
    </div>
  );
};

export default AllUsers;
