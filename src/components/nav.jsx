import React from "react";
import Logo from "../assets/images/logo.png"

const Nav = () => {
  return (
    <>
      <nav class="sidebar close">
        <header>
          <a href="/" class="image-text">
            <span class="image">
              <img width="80" src={Logo} alt="logo" />
            </span>
            <div class="text header-text text">
              <span class="name">LMS</span>
              <span class="profession">By Abbos</span>
            </div>
          </a>

          <i class='bx bxs-chevron-right toggle'></i>
        </header>

        <div class="menu-bar">
          <div class="menu">
            <ul class="menu-links">
              <li class="search-box">
                <i class='bx bx-search icon'></i>
                <input type="search" placeholder="Search..." />
              </li>
              <li class="nav-link">
                <a href="/">
                  <i class='bx bx-home-alt icon'></i>
                  <span class="text nav-text">Dashboard</span>
                </a>
              </li>
              <li class="nav-link">
                <a href="/">
                  <i class='bx bx-user icon'></i>
                  <span class="text nav-text">Users</span>
                </a>
              </li>
              <li class="nav-link">
                <a href="/">
                  <i class='bx bx-book-alt icon'></i>
                  <span class="text nav-text">Modules</span>
                </a>
              </li>
              <li class="nav-link">
                <a href="/">
                  <i class='bx bx-check-square icon'></i>
                  <span class="text nav-text">Lessons</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="bottom-content">
            <li class="">
              <a href="#">
                <i class='bx bx-log-out icon'></i>
                <span class="text nav-text">Log out</span>
              </a>
            </li>

            <li class="mode">
              <div class="moon-sun">
                <i class='bx bx-moon icon moon'></i>
                <i class='bx bx-sun icon sun'></i>
              </div>
              <span class="mode-text text">Dark Mode</span>
              <div class="toggle-switch">
                <span class="switch"></span>
              </div>
            </li>
          </div>
        </div>


      </nav>
    </>
  );
};

export default Nav;
