import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const token = localStorage.getItem("access-token");
  const { user } = useAuth();
  const navigate = useNavigate();
  const { logOut } = useAuth();

  if (user) {
    axiosSecure.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
          logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }

  return [axiosSecure];
};

export default useAxiosSecure;
