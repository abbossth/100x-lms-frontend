import React from "react";
import Logo from "../assets/images/logo.png"
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../data/slices/authSlice";

const Nav = () => {
  const dispatch = useDispatch()


  const handleLogOut = () => {
    const confirmLogOut = confirm("Haqiqatdan ham tizimdan chiqmoqchimisiz?")
    alert(confirmLogOut)
    if (confirmLogOut) {
      dispatch(logout())
    }
  }


  return (
    <>
      <nav class="sidebar close">
        <header>
          <Link to="/" class="image-text">
            <span class="image">
              <img width="80" src={Logo} alt="logo" />
            </span>
            <div class="text header-text text">
              <span class="name">LMS</span>
              <span class="profession">By Abbos</span>
            </div>
          </Link>

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
                <Link to="/">
                  <i class='bx bx-home-alt icon'></i>
                  <span class="text nav-text">Dashboard</span>
                </Link>
              </li>
              <li class="nav-link">
                <Link to="/users">
                  <i class='bx bx-user icon'></i>
                  <span class="text nav-text">Users</span>
                </Link>
              </li>
              <li class="nav-link">
                <Link to="/modules">
                  <i class='bx bx-book-alt icon'></i>
                  <span class="text nav-text">Modules</span>
                </Link>
              </li>
              <li class="nav-link">
                <Link to="/lessons">
                  <i class='bx bx-check-square icon'></i>
                  <span class="text nav-text">Lessons</span>
                </Link>
              </li>
            </ul>
          </div>
          <div class="bottom-content">
            <li class="">
              <div onClick={handleLogOut}>
                <i class='bx bx-log-out icon'></i>
                <span class="text nav-text">Log out</span>
              </div>
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
