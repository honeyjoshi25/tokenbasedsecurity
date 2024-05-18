import React from "react";
import "./Section4.css";

export const Section4 = () => {
  return (
    <div className="aboutusBottomdiv d-flex flex-column justify-content-center align-items-center mt-5 p-5">
      <h1 className="fw-bold">Get in touch</h1>

      <span className="mt-3 w-75 fs-4 text-center">
        Please contact us with any inquiries you may have about beginning to
        invest or listing your assets on the platform, and we would be pleased
        to assist you
      </span>
      <div className="mt-3">
        <button>Send us an email.</button>
      </div>
    </div>
  );
};
