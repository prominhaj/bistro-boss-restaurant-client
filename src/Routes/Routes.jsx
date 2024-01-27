import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homes/Home/Home";
import DashBoard from "../Pages/DashBoards/DashBoard/DashBoard";
import Menu from "../Pages/Menus/Menu/Menu";
import Contact from "../Pages/Contacts/Contact/Contact";
import Shop from "../Pages/Shops/Shop/Shop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProtectedLogin from "../PrivateRoute/ProtectedLogin";
import Profile from "../Pages/Profile/Profile";
import DashBoardHome from "../Pages/DashBoards/Pages/DashBoardHome/DashBoardHome";
import Reservation from "../Pages/DashBoards/Pages/Reservation/Reservation";
import PaymentHistory from "../Pages/DashBoards/Pages/PaymentHistory/PaymentHistory";
import MyCart from "../Pages/DashBoards/Pages/MyCart/MyCart";
import AddReview from "../Pages/DashBoards/Pages/AddReview/AddReview";
import MyBooking from "../Pages/DashBoards/Pages/MyBooking/MyBooking";
import AdminDashBoard from "../Pages/DashBoards/AdminsPages/AdminDashBoard/AdminDashBoard";
import AddItems from "../Pages/DashBoards/AdminsPages/AddItems/AddItems";
import ManageItems from "../Pages/DashBoards/AdminsPages/ManageItems/ManageItems";
import ManageBooking from "../Pages/DashBoards/AdminsPages/ManageBooking/ManageBooking";
import AllUsers from "../Pages/DashBoards/AdminsPages/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "shop/:category",
        element: <Shop />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoardHome />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/reservation",
        element: (
          <PrivateRoute>
            <Reservation />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/history",
        element: (
          <PrivateRoute>
            <PaymentHistory />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/cart",
        element: (
          <PrivateRoute>
            <MyCart />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/review",
        element: (
          <PrivateRoute>
            <AddReview />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/booking",
        element: (
          <PrivateRoute>
            <MyBooking />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/home",
        element: <AdminDashBoard />,
      },
      {
        path: "/dashboard/admin/addItems",
        element: <AddItems />,
      },
      {
        path: "/dashboard/admin/manageItems",
        element: <ManageItems />,
      },
      {
        path: "/dashboard/admin/manageBookings",
        element: <ManageBooking />,
      },
      {
        path: "/dashboard/admin/allUsers",
        element: <AllUsers />,
      },
    ],
  },
  {
    path: "login",
    element: (
      <ProtectedLogin>
        <Login />
      </ProtectedLogin>
    ),
  },
  {
    path: "register",
    element: (
      <ProtectedLogin>
        <Register />
      </ProtectedLogin>
    ),
  },
  {
    path: "/*",
    element: <Error />,
  },
]);
