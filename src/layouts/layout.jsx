import React from "react";
import Nav from "../components/nav";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Nav />

      <section class="home">
        
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
