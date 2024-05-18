import React from "react";
import "./Section1.css";
import imgPattern from "../../../assets/images/pattern/img_pattern5.svg";

export const Section1 = () => {
  return (
    <div className="section1Aboutus d-flex flex-row w-100 mt-5">
      <div className=" col-12 col-md-8 col-lg-6 p-5">
        <div className="d-flex flex-column aboutusHeader">
          <h1 className="fw-bold w-75  text-start">
            Our goal is to make investing in the private market accessible and
            easy.
          </h1>
          <span className="w-50 fw-bold mt-3 hs-3">
            AssetChain is a blockchain-based private <br />
            market investment platform that facilitates the issuing and trading
            of{" "}
            <span style={{ color: "#1e31f9", fontWeight: "normal" }}>
              security tokens
            </span>
          </span>
        </div>
      </div>

      <div className="aboutusHeaderImg col-md-4 col-lg-6 d-none d-md-flex justify-content-md-end">
        <img alt="aboutUs" src={imgPattern} />
      </div>
    </div>
  );
};
