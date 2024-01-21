import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homes/Home/Home";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Menu from "../Pages/Menus/Menu/Menu";
import Contact from "../Pages/Contacts/Contact/Contact";
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
