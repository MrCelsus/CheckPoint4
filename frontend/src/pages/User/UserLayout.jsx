import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

function UserLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default UserLayout;
