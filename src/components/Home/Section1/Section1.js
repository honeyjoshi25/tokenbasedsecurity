import React from "react";
import "./Section1.css";
import img1 from "../../../assets/images/img/img_polygon.png";
import img2 from "../../../assets/images/img/img_Compliance.png";

export const Section1 = () => {
  return (
    <div className="w-100 d-flex flex-column justify-content-center text-center mt-5">
      <div className="section1">
        <p className="section1p">
          <span style={{ color: "#1e31f9" }} className="fs-1 fw-bold">
            Access To Investments <br />
            In The Private Market
          </span>
        </p>

        <span className="section1span mt-3 fs-5 fw-bold">
          Property, Venture Finance, and Unlisted Businesses
          <br />
          <span style={{ color: "#1e31f9", fontWeight: "normal" }}>
            Blockchain simplifies
          </span>
          fractional investment for you
        </span>
        <div className="homeSec1Img mt-3 d-flex align-items-center justify-content-center flex-column  flex-md-row">
          <img src={img1} alt="img1" />
          <img src={img2} alt="img1" />
        </div>
        <div className="mt-4 w-100 d-flex align-items-center justify-content-center">
          <div className="input-group w-25">
            <input
              type="text"
              aria-label="Enter your email address"
              className="form-control rounded-pill"
              placeholder="Enter your email address"
            />
            <button className="input-group-text rounded-pill">
              Get early access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
