import { useQuery } from "react-query";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./AllUsers.css";
import { FaUsers } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { Button } from "primereact/button";
import swal from "sweetalert";
const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
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

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  return (
    <div>
      {/* section Title */}
      <SectionTitle subHading="How many??" hading="MANAGE ALL USERS" />

      <div className="py-10 sm:px-[20px] lg:px-[50px] xl:px-[100px]">
        <DataTable
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} to {last} of {totalRecords}"
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          value={users}
          pt={{
            headerRow: {
              className: "!bg-[#D1A054] !rounded-tl-[15px] !rounded-tr-[15px]",
            },
            bodyRow: { className: "!py-5 border-b border-gray-200" },
          }}
          tableStyle={{ minWidth: "60rem" }}
        >
          <Column header="NAME" body={nameBodyTemplate}></Column>
          <Column header="EMAIL" body={emailBodyTemplate}></Column>
          <Column header="ROLE" body={roleBodyTemplate}></Column>
          <Column header="ACTION" body={actionBodyTemplate}></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default AllUsers;
