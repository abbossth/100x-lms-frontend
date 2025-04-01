import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png"
import { useNavigate } from "react-router";
import { login } from "../api/users/userLogin";
import showNotification from "../utils/showNotifications";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../data/slices/authSlice";
import { useDisclosure } from "@mantine/hooks";
import { Box, LoadingOverlay } from "@mantine/core";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, { open, close }] = useDisclosure(false);


  const [loginValues, setLoginValues] = useState({
    phone: "",
    password: ""
  })

  // input handler
  const handleInputChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setLoginValues(prevValues => {
      return {
        ...prevValues,
        [name]: value
      }
    })
  }

  // form submit
  const handleOnSubmit = async (e) => {
    // open loading overlay
    open()

    e.preventDefault()
    // login request
    const resData = await login(loginValues);
    if (resData.status >= 200 && resData.status < 300) {
      showNotification(resData.data.message, "")
      dispatch(loginSuccess({
        accessToken: resData.data.token,
        user: resData.data.user,
      }));
      navigate('/'); // Redirect to dashboard
      close()

    } else {
      showNotification(resData.response.data.error, resData.message, "red")
      close()
    }

  }

  return (
    <>
      <div className="login-body">
        <div class="login-container">
          <Box pos="relative">
            <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
            {/* ...other content */}
            <div class="login-card">
              <div class="brand">
                <img src={Logo} alt="100x LMS Logo" />
              </div>
              <form onSubmit={handleOnSubmit}>
                <label>Phone number</label>
                <input name="phone" value={loginValues.phone} onChange={handleInputChange} type="text" placeholder="phone" required />

                <label>Parol</label>
                <input name="password" value={loginValues.password} onChange={handleInputChange} type="password" placeholder="••••••••" required />

                <button type="submit">Kirish
                </button>

              </form>
            </div>
          </Box>

        </div>
      </div>


    </>
  );
};

export default LoginPage;
