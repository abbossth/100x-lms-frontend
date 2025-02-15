import React from "react";
import logo from "../assets/images/logo.png";

const Aside = () => {
  return (
    <>
      <aside
        id="layout-menu"
        class="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div class="app-brand demo">
          <a href="index.html" class="app-brand-link">
            <span class="app-brand-logo demo">
              <img src={logo} alt="logo" width={80} />
            </span>
            <span class="app-brand-text demo menu-text fw-bold ms-2">LMS</span>
          </a>

          <a
            href="/"
            class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i class="bx bx-chevron-left bx-sm d-flex align-items-center justify-content-center"></i>
          </a>
        </div>

        <div class="menu-inner-shadow"></div>

        <ul class="menu-inner py-1">
          <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Apps &amp; Pages</span>
          </li>
          <li class="menu-item">
            <a href="/users" target="_blank" class="menu-link">
              <i class="menu-icon tf-icons bx bx-envelope"></i>
              <div class="text-truncate" data-i18n="Users">
                Users
              </div>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Aside;
