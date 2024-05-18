import React from "react";
import "./Section4.css";
import img3 from "../../../assets/images/img/right_side_image.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Section4 = () => {
  return (
    <div
      className="hiwSec4 d-flex flex-column flex-md-row align-items-center  justify-content-center  mt-5 p-5"
      id="sec4"
    >
      <div className="hiwSec4Left col-12 col-md-6 p-5">
        <div className="hiwSec4LeftTop d-flex justify-content-center  flex-column ">
          <h1 className="fw-bold">Decoding Tokenization</h1>
          <h6 className="text-muted fw-bold mt-1">
            Easy solutions to difficult investment queries
          </h6>
        </div>
        <div className="hiwSec4LeftBottom mt-4">
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h6 className="fw-bold">
                What investments are made in the private market?
              </h6>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Real Estate, Venture Capital/Private equity funds, and shares of
                unlisted corporations are examples of investments that are not
                listed on an exchange.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h6 className="fw-bold">Tokenization: What is it?</h6>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                The process of fractionalizing and securitizing an asset into
                smaller pieces by digitally recording each component on a
                blockchain is known as Tokenization.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <h6 className="fw-bold">What are security tokens?</h6>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Traditional securities, such as real assets, stock, debt, and
                units of a fund that indicate beneficial interest, are
                represented digitally on a distributed ledger or blockchain by
                Security Tokens.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="hiwSec4Right col-12 col-md-6 d-flex justify-content-md-end justify-content-center">
        <img src={img3} alt="" className="w-75" />
      </div>
    </div>
  );
};
