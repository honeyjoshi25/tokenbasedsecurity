import React from "react";
import "./Section4.css";
import img_build from "../../../assets/images/img/giftCity.png";
import img_tick from "../../../assets/images/icons/icn_tick.svg";

export const Section4 = () => {
  return (
    <div className="section4 d-flex justify-content-center align-items-center  flex-column flex-md-row mt-5 p-5 w-100">
      <div className="sec4Left">
        <img src={img_build} className="img_flexone w-75" alt="img"></img>
      </div>
      <div className="sec4Right ms-4">
        <h1 className="sec4rightHeader fw-bold w-75">
          The First Regulated Token Offering in India
        </h1>
        <h6 className="sec4rightSubHeader w-75 text-justify text-muted fw-bold ">
          We are the first private market investment service in India that
          allows security tokens to be issued and traded end-to-end
        </h6>
        <div className="div1 mt-5 d-flex align-items-start ">
          <img src={img_tick} className="icn_tick" alt="img" />
          <div className="d-flex flex-column ms-4">
            <h4 className="fw-bold">100% Digital</h4>
            <span>
              Fractional and Frictionless: We offer a smooth investing
              experience!
            </span>
          </div>
        </div>
        <div className="div2 mt-5 d-flex align-items-start">
          <img src={img_tick} className="icn_tick" alt="img" />
          <div className="d-flex flex-column ms-4">
            <h4 className="fw-bold">Start Small</h4>
            <span>
              Investing in the private market is becoming more accessible. At
              USD 1000, tokens are available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
