import React from "react";
import logo from "../assets/images/logo.png";

const Aside = () => {
  return (
    <>
      <aside>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1>Logo</h1>
      </aside>
    </>
  );
};

export default Aside;
