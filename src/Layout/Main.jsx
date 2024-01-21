import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";

const Main = () => {
  return (
    <>
      <Header />
      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
      <Footer />
    </>
  );
};

export default Main;
