import React from "react";
import "./Section1.css";
import imgPattern1 from "../../../assets/images/pattern/icn_pattern.svg";
import { Options } from "../../../pages/HowItWorks/Options";

export const Section1 = () => {
  return (
    <div
      className="howItWorksSec1 mt-5 w-100 d-flex flex-column position-relative "
      id="sec1"
    >
      <div className="sec1Title d-flex flex-row w-100">
        <div className="col-12 col-md-7 d-flex flex-column p-5">
          <h1 className="w-75 fw-bold">
            It's now easier than ever to invest in private marketplaces
          </h1>
          <span className="mt-4">
            Get started with AssetChain in 3 simple steps
          </span>
        </div>
        <div className="d-none d-md-flex justify-content-md-end col-md-5">
          <img src={imgPattern1} alt="" />
        </div>
      </div>
      <div className="hiwTopclass w-100 d-flex justify-content-center">
        <div className="navbarCustom w-75 d-flex flex-column flex-md-row justify-content-md-around bg-light p-4">
          {Options.map((i, index) => {
            return (
              <a
                key={index}
                href={i.href}
                style={{ textDecoration: "none", color: "inherit" }}
                className="fw-bold"
              >
                <div>{i.title}</div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
