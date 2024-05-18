import React from "react";
import "./Section2.css";
import imgProduct from "../../../assets/images/img/img_product.jpg";
import { Data } from "./Data";

export const Section2 = () => {
  return (
    <div className="mt-5 d-flex flex-column w-100">
      <div className="section2 w-100">
        <div className="sec2header d-flex flex-column w-100">
          <div className="section2img d-flex align-items-center justify-content-center">
            <img src={imgProduct} className="img_product w-50" alt="img" />
          </div>
          <div className="p-5">
            <div className="sec2subHeader d-flex align-items-center justify-content-center mt-5 p-5">
              <span className="fw-bold fs-1 text-center">
                Rethinking Investments in the Private Market
              </span>
            </div>

            <div className="section2Cards d-flex justify-content-center w-100">
              <div className="s2card d-flex w-100 justify-content-center row">
                {Data.map((i, index) => {
                  return (
                    <div
                      className="cardsec d-flex flex-column m-3 p-3 text-start col-12 col-md-4 col-lg-3"
                      key={index}
                    >
                      <img src={i.img} alt="s2" className="w-25" />
                      <div>
                        <h4>{i.title}</h4>
                        <p className="fs-6">{i.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
