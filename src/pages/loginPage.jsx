import React from "react";
import Logo from "../assets/images/logo.png"
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate()

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    alert("Kirish muvaffaqiyatli bo'ldi!")
    navigate("/")
  }

  return (
    <>
      <div className="login-body">

        <div class="login-container">
          <div class="login-card">
            <div class="brand">
              <img src={Logo} alt="100x LMS Logo" />
            </div>
            <form onSubmit={handleOnSubmit}>
              <label>Login</label>
              <input type="text" placeholder="login" required />

              <label>Parol</label>
              <input type="password" placeholder="••••••••" required />

              <button type="submit">Kirish
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default LoginPage;
