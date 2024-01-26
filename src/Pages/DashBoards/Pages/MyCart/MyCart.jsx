import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../../hook/useCart/useCart";
import { Link } from "react-router-dom";
import TableItem from "../../../Shared/TableItem/TableItem";
import swal from "sweetalert";

const MyCart = () => {
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  const handleDelete = (item) => {
    swal({
      title: "Are you sure?",
      text: `${item.name} Delete`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              refetch();
              swal("Delete SuccessFull For Your Cart", {
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard | Cart</title>
      </Helmet>

      {/* Section Title */}
      <SectionTitle subHading="My Cart" hading="WANNA ADD MORE?" />

      {/* Total Orders */}
      <section className="py-12 overflow-auto">
        <div className="bg-[#F6F6F6] p-10 rounded min-w-[60rem] md:min-w-[80rem] mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-neutral-900 text-[25px] md:text-[32px] font-bold font-['Cinzel']">
              Total orders: {cart.length}
            </h2>
            <h2 className="text-neutral-900 text-[25px] md:text-[32px] font-bold font-['Cinzel']">
              total price: ${totalPrice}
            </h2>
            <Link className="px-[17px] py-3.5 bg-[#D1A054] rounded-lg justify-start items-start gap-2.5 inline-flex text-white text-base sm:text-xl font-bold font-['Cinzel']">
              Pay
            </Link>
          </div>
          <div className="pt-7">
            <table className="w-full flex flex-col justify-center">
              <thead>
                <tr className="flex items-center bg-[#D1A054] justify-between py-5 px-10 rounded-tl-[15px] rounded-tr-[15px]">
                  <th className="w-1/4 text-white text-start text-base font-semibold font-['Inter']">
                    Item Image
                  </th>
                  <th className="w-1/4 text-white text-base font-semibold font-['Inter']">
                    ITEM NAME
                  </th>
                  <th className="w-1/4 text-white text-base font-semibold font-['Inter']">
                    PRICE
                  </th>
                  <th className="w-1/4 text-white text-base font-semibold font-['Inter']">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item, index) => (
                  <TableItem
                    key={item._id}
                    item={item}
                    onDelete={handleDelete}
                    index={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyCart;
