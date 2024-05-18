import React from "react";
import "./Section5.css";
import { Data } from "./Data";

export const Section5 = () => {
  return (
    <div className="section5hiw d-flex flex-column p-5 w-100" id="sec5">
      <div className="sec5Header p-0 p-md-5">
        <div>
          <h1 className="fw-bold">The Future of Investing</h1>
          <p className="w-50">
            Using blockchain technology, we are able to provide you with a
            secure and quick tokenization platform through the usage of&nbsp;
            <a
              href="https://polygon.technology/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span>Polygon</span>
            </a>
            &nbsp; by blockchain AssetChain.
          </p>
        </div>
      </div>
      <div className="sec5hiwCards d-flex flex-column p-0 p-md-5 pt-0">
        <h4 className="sec5hiwCardsHeader fw-bold">Why Blockchain?</h4>
        <div className="sec5hiwCard mt-3 d-flex flex-column flex-lg-row">
          {Data.map((i, index) => {
            return (
              <div
                className="blockchainCard col-12 col-lg-4 m-1 d-flex flex-column justify-content-start p-3"
                key={index}
              >
                <div className="img_gradient">
                  <img src={i.img} alt="" className="w-25" />
                </div>

                <div className="description mt-3">
                  <h5 className="fw-bold"> {i.title}</h5>
                  <span className="fw-bold text-muted mt-2"> {i.span}</span>
                  <p className="mt-2 fw-bold w-75">{i.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
