import React from "react";
import { Data } from "./Data";
import "./Section3.css";

export const Section3 = () => {
  return (
    <div
      className="howItWorksSec3 d-flex flex-column  justify-content-center  align-items-center w-100 mt-5 p-5"
      id="sec3"
    >
      <div className="hiwsec3Title">
        <h1 className="fw-bold">Obtain Returns in 3 ways</h1>
      </div>

      <div className="hiwSec3Cards row d-flex justify-content-center  align-items-center mt-5">
        {Data.map((i, index) => {
          return (
            <div
              className="hiwSec3card col-12 col-md-4 col-lg-3 d-flex flex-column  justify-content-center  align-items-center m-2"
              key={index}
            >
              <img src={i.img} alt="how-it-works" className="hiwImg" />
              <div className="cardDesc mt-4 text-center ">
                <h5 className="fw-bold">{i.title}</h5>
                <p className=" mt-2">{i.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
