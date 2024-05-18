import React from "react";
import img_arrow from "../../../assets/images/pattern/img_arrow.png";
import "./Section5.css";
import img_secure from "../../../assets/images/icons/img_secure.svg";
import img_access from "../../../assets/images/icons/img_accessible.svg";
import img_simple from "../../../assets/images/icons/img_simplified.svg";

export const Section5 = () => {
  return (
    <div
      className="section5  d-flex justify-content-between flex-row w-100 mt-5 p-5 pe-0"
      id="investLink"
    >
      <div className="sec5Left mt-5 p-lg-5 p-0 col-12 col-lg-6">
        <span className="sec5LeftHeader fs-1 fw-bold">
          Why Invest with <br />
          <span className="fs-1 fw-bold">AssetChain?</span>
        </span>
        <div className="sec5LeftCard mb-5 d-flex align-items-start mt-5">
          <img src={img_secure} className="img_secure" alt="img" />
          <div className="d-flex flex-column text-start ms-4">
            <span className="Completely-Secure fs-4 fw-bold">
              Safe & Secure
            </span>
            <p className="sec5LeftPara  w-50 text-justify">
              Using security tokens, our platform leverages the power of
              blockchain technology to make every transaction unchangeable and
              impenetrable to tampering
            </p>
          </div>
        </div>
        <div className="sec5LeftCard mb-5 d-flex align-items-start">
          <img src={img_access} className="img_secure" alt="img" />
          <div className="d-flex flex-column text-start ms-4">
            <span className="Completely-Secure fs-4 fw-bold">
              Simplified Process
            </span>
            <p className="sec5LeftPara w-50 text-justify">
              Smart contracts enable safe and quick settlement for all of our
              investor compliances, payouts, and transfers
            </p>
          </div>
        </div>
        <div className="sec5LeftCard d-flex align-items-start">
          <img src={img_simple} className="img_secure" alt="img" />
          <div className="d-flex flex-column text-start ms-4">
            <span className="Completely-Secure fs-4 fw-bold">
              Co-invest with experts
            </span>
            <p className="sec5LeftPara  w-50 text-justify">
              Curators are being curated by us. You will get the chance to
              invest alongside the top-tier professionals in real estate,
              venture capital, or the unlisted market
            </p>
          </div>
        </div>
      </div>
      <div className="sec5Right d-none d-lg-flex justify-content-lg-end col-lg-6">
        <img src={img_arrow} className="w-50" alt="img" />
      </div>
    </div>
  );
};

// export default Section5
