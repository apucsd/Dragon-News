import React from "react";
import NavbarPage from "../Pages/Shared/Header/Navbar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <NavbarPage></NavbarPage>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
