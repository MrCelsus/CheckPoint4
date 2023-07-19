import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";

function AdminLayout() {
  return (
    <main>
      <SideBar />
      <Outlet />
    </main>
  );
}

export default AdminLayout;
