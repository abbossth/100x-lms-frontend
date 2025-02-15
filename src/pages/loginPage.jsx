import React from "react";
import logo from "../assets/images/logo.png";

const LoginPage = () => {
  return (
    <>
      <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
          <div class="authentication-inner">
            <div class="card px-sm-6 px-0">
              <div class="card-body">
                <div class="app-brand justify-content-center">
                  <a href="/" class="app-brand-link gap-2">
                    <span class="app-brand-logo demo">
                      <img width={80} src={logo} alt="logo" />
                    </span>
                    <span class="app-brand-text demo text-heading fw-bold">
                      LMS
                    </span>
                  </a>
                </div>

                <form id="formAuthentication" class="mb-6" action="index.html">
                  <div class="mb-6">
                    <label for="email" class="form-label">
                      Login yoki telefon raqam
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email-username"
                      placeholder="Login yoki telefon raqamingizni kiriting"
                      autofocus
                    />
                  </div>
                  <div class="mb-6 form-password-toggle">
                    <label class="form-label" for="password">
                      Parol
                    </label>
                    <div class="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        class="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                      />
                      <span class="input-group-text cursor-pointer">
                        <i class="bx bx-hide"></i>
                      </span>
                    </div>
                  </div>
                  <div class="mb-8">
                    <div class="d-flex justify-content-between mt-8">
                      <div class="form-check mb-0 ms-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="remember-me"
                        />
                        <label class="form-check-label" for="remember-me">
                          Eslab qolish
                        </label>
                      </div>
                      <a href="auth-forgot-password-basic.html">
                        <span>Parolni unutdingizmi?</span>
                      </a>
                    </div>
                  </div>
                  <div class="mb-6">
                    <button class="btn btn-primary d-grid w-100" type="submit">
                      Kirish
                    </button>
                  </div>
                </form>

                <p class="text-center">
                  <span>Platformada yangimisiz? </span>
                  <a href="https://t.me/abbossth">
                    <span>Ro'yhatdan o'ting</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
