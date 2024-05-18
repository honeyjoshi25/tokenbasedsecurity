import React, { useState } from "react";
import "./Section3.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import register from "../../../assets/images/img/register.png";
import explore from "../../../assets/images/img/explor.png";
import investing from "../../../assets/images/img/investing.png";

export const Section3 = () => {
  const [current, setCurrent] = useState({
    id: 0,
    img: register,
  });

  const nextSlide = () => {
    if (current.id === 0) {
      setCurrent({ ...current, id: current.id + 1, img: explore });
    } else if (current.id === 1) {
      setCurrent({ ...current, id: current.id + 1, img: investing });
    } else {
      setCurrent({ ...current, id: 0, img: register });
    }
  };

  const prevSlide = () => {
    if (current.id === 2) {
      setCurrent({ ...current, id: current.id - 1, img: explore });
    } else if (current.id === 1) {
      setCurrent({ ...current, id: current.id - 1, img: register });
    } else {
      setCurrent({ ...current, id: 0, img: register });
    }
  };

  return (
    <div className="section3 d-flex flex-column justify-content-center align-items-center">
      <div className="sec3header text-center">
        <header className="fw-bold fs-1">How AssetChain Works</header>
        <span className="w-75 text-center fs-5">
          Investing with us is simple in 3 easy steps
        </span>
      </div>
      <div className="sec3Slider mt-5">
        <div className="sliderNum">
          <div
            className={current.id === 0 ? "sliderNumDiv" : "disabled"}
            onClick={() => setCurrent({ ...current, id: 0, img: register })}
          >
            <span>01</span>
          </div>
          <span>- - - -</span>
          <div
            className={current.id === 1 ? "sliderNumDiv" : "disabled"}
            onClick={() => setCurrent({ ...current, id: 1, img: explore })}
          >
            <span>02</span>
          </div>
          <span>- - - -</span>
          <div
            className={current.id === 2 ? "sliderNumDiv" : "disabled"}
            onClick={() => setCurrent({ ...current, id: 2, img: investing })}
          >
            <span>03</span>
          </div>
        </div>
        <div className="divSlider d-flex mt-5">
          {/* <img src={sec3bg} alt="homeSec3" /> */}
          <div className="homeSliders d-flex align-items-center justify-content-center">
            <MdArrowBackIos className="arrow-back" onClick={prevSlide} />

            <div className="d-flex align-items-center  justify-content-center ">
              <img
                src={current.img}
                className="img_Photo_register w-75"
                alt="img"
              />
            </div>
            <MdArrowForwardIos className="arrow-forward" onClick={nextSlide} />
          </div>
        </div>
      </div>
    </div>
  );
};
