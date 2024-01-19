import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homes/Home/Home";
import Contact from "../Pages/Contact/Contact";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shops/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'contact',
            element: <Contact />
        },
        {
            path: 'dashboard',
            element: <DashBoard />
        },
        {
            path: 'menu',
            element: <Menu />
        },
        {
            path: 'shop',
            element: <Shop />
        },
    ]
  },
]);
