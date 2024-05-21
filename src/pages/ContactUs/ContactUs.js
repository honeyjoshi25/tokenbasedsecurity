import React from "react";
import "./ContactUs.css";
import { TextField } from "@mui/material";
import location from "../../assets/images/icons/icn_location.svg";
import email from "../../assets/images/icons/icn_email.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const ContactUs = () => {
  return (
    <div className="contactUs mt-5 p-5 d-flex flex-column flex-md-row">
      <div className="contactUsLeft col-12 col-md-6 d-flex align-items-center  justify-content-center flex-column  ">
        <h1 className="fw-bold mb-5">Contact Us</h1>
        <div className="d-flex flex-column justify-content-start">
          <div className="contactAddr d-flex flex-column ">
            <div className="d-flex align-items-center ">
              <img src={location} alt="location" />
              <h6 className="fw-bold ms-3">AssetChain Pvt. Ltd.</h6>
            </div>

            <span>
              132, My Street,
              <br /> Kingston,
              <br /> New York, 12401.
            </span>
          </div>
          <div className="contactAddr d-flex flex-column mt-5">
            <div className="d-flex align-items-center ">
              <img src={location} alt="location" />
              <h6 className="fw-bold ms-3">AssetChain Fintech LLP</h6>
            </div>
            <span>
              132, My Street,
              <br /> Kingston,
              <br /> New York, 12401.
            </span>
          </div>
          <div className="contactAddr d-flex align-items-center  mt-5">
            <img src={email} alt="location" />
            <h6 className="fw-bold ms-3">info@AssetChain.network</h6>
          </div>
        </div>
      </div>
      <div className="contactUsRight col-12 col-md-6 d-flex align-items-center  justify-content-center mt-5 mt-md-0">
        <div className="contactUsCard w-50">
          <div className="contactUsDetails">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              className="w-100 mb-2"
              name="name"
            />
          </div>

          <div className="contactUsDetails">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              className="w-100 mb-2"
              name="email"
            />
          </div>

          <div className="contactUsDetails">
            <TextField
              id="outlined-basic"
              label="Contact"
              variant="outlined"
              type="text"
              className="w-100 mb-2"
              name="phone"
            />
          </div>

          <div className="contactUsDetails">
            <TextField
              multiline
              rows={3}
              id="outlined-basic"
              label="Message"
              variant="outlined"
              type="text"
              className="w-100 mb-2"
              name="message"
            />
          </div>

          <div className="ContactUSButton w-100">
            <button className="w-100 p-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
