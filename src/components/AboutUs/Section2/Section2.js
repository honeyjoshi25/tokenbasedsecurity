import React from "react";
import { Data } from "./Data";
import "./Section2.css";
import iconLinkedin from "../../../assets/images/icons/icn_linkedin.svg";

export const Section2 = () => {
  return (
    <div
      className="section2Aboutus d-flex flex-column align-items-center justify-content-center mt-5"
      id="teamLink"
    >
      <div className="ourTeam d-flex flex-column align-items-center justify-content-center">
        <h1 className="fw-bold">Our Team</h1>
        <span className="mt-3 fs-5">
          AssetChain is led by a group of passionate and varied people.
        </span>
      </div>
      <div className="avatar mt-5 row w-100 d-flex justify-content-center   p-md-1 p-lg-5">
        {Data.map((i, index) => {
          return (
            <div
              className="background d-flex flex-column p-2 col-12 col-md-4 col-lg-3 m-2"
              key={index}
            >
              <span className="backgroundTitle text-start fw-bold">
                {i.title}
              </span>
              <span className="backgroundSpan text-start mt-2 fw-bold">
                {i.span}
              </span>
              <div className="profileImage d-flex justify-content-center mt-3">
                <img className="aboutUsTeamImg w-50" src={i.img} alt="img" />
              </div>
              <div className="img__description_layer">
                <p className="para text-start text-light">{i.para}</p>
                <div>
                  <div className="LI-In-Bug-1 ">
                    <a
                      href={i.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                      className="d-flex align-items-center justify-content-start"
                    >
                      <img src={iconLinkedin} alt="linkedin" />
                      <p className="backgroundSpan ms-2 mt-3">
                        {"View Profile >"}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
