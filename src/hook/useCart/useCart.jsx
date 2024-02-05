import { useQuery } from "react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import useAuth from "../useAuth/useAuth";

const useCart = () => {
  const token = localStorage.getItem("access-token");
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: cart = [], refetch, isLoading: cartLoading } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    // queryFn: async () => {
    //   const res = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`,
    //     {
    //       method: "GET",
    //       headers: {
    //         authorization: `Bearer ${token}}`,
    //       },
    //     }
    //   );
    //   return res.json();
    // },
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return [cart, refetch, cartLoading];
};

export default useCart;
