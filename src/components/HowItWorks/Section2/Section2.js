import React from "react";
import "./Section2.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img_product_step1 from "../../../assets/images/img/img_product_step1.jpg";
import img_register from "../../../assets/images/img/Register.JPG";
import img_product_step2 from "../../../assets/images/img/img_product_step2.jpg";
import img_explore from "../../../assets/images/img/Explore.JPG";
import img_product_step3 from "../../../assets/images/img/img_product_step3.jpg";
import img_invest from "../../../assets/images/img/Invest.JPG";

export const Section2 = () => {
  return (
    <div
      className="howItWorksSec2 mt-5 p-5 d-flex justify-content-center align-items-center flex-column "
      id="sec2"
    >
      <h1 className="fw-bold">Get started with AssetChain in 3 simple steps</h1>
      <Carousel
        showThumbs={false}
        infiniteLoop={false}
        showStatus={false}
        showArrows={false}
        width="50%"
        className="mt-4 d-flex align-items-center  justify-content-center howItWorksCarousel"
      >
        <div className="d-flex justify-content-center  flex-column align-items-center howItWorksSec2Slider">
          <img src={img_register} className="w-25 titleImg" alt="titleImg" />
          <h6 className="fw-bold">Send an invitation to join the team.</h6>
          <h6 className="fw-bold">Give details for KYC validation.</h6>
          <a href="#sec6" style={{ textDecoration: "none" }}>
            <span className="subSpan">Check Eligibility {">"}</span>
          </a>
          <img src={img_product_step1} className="mt-2" alt="titleImg" />
        </div>
        <div className="d-flex justify-content-center  flex-column align-items-center howItWorksSec2Slider">
          <img src={img_explore} className="w-25 titleImg" alt="titleImg" />
          <h6 className="fw-bold w-75 ">
            Check out AssetChain’s platform for premium offerings in the private
            market.
          </h6>
          <img src={img_product_step2} className="mt-2" alt="titleImg" />
        </div>
        <div className="d-flex justify-content-center  flex-column align-items-center howItWorksSec2Slider">
          <img src={img_invest} className="w-25 titleImg" alt="titleImg" />
          <h6 className="fw-bold w-75 ">
            Handle your assets with ease on our dashboard, earn money, and have
            the freedom to sell your tokens on our peer-to-peer exchange.
          </h6>
          <img src={img_product_step3} className="mt-2" alt="titleImg" />
        </div>
      </Carousel>
    </div>
  );
};
