import React from "react";
import imageUrl from "../assets/img/illustrations/page-misc-error-light.png";

const NotFound = () => {
  return (
    <>
      <div class="container-xxl container-p-y">
        <div class="misc-wrapper">
          <h1
            class="mb-2 mx-2"
            style={{ lineHeight: "6rem", fontSize: "6rem" }}
          >
            404
          </h1>
          <h4 class="mb-2 mx-2">Page Not Found️ ⚠️</h4>
          <p class="mb-6 mx-2">we couldn't find the page you are looking for</p>
          <a href="/" class="btn btn-primary">
            Back to home
          </a>
          <div class="mt-6">
            <img
              src={imageUrl}
              alt="page-misc-error-light"
              width="500"
              class="img-fluid"
              data-app-light-img="illustrations/page-misc-error-light.png"
              data-app-dark-img="illustrations/page-misc-error-dark.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
