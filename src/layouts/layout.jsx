import React from "react";
import Aside from "../components/aside";
import Nav from "../components/nav";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Aside />

          <div className="layout-page">
            <Nav />
            <div className="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
