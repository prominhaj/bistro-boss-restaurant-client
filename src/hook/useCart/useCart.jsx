import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`,
        {
          method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem('access-token')}`
          }
        }
      );
      return res.json();
    },
    // queryFn: async () => {
    //   const res = await axiosSecure(`/carts?email=${user?.email}`);
    //   return res.data;
    // },
  });

  return [cart, refetch];
};

export default useCart;
