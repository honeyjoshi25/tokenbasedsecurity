import React from "react";
import "./Section6.css";
import tick from "../../../assets/images/icons/icn_tick.svg";
import img8 from "../../../assets/images/icons/icn_investor.svg";
import img7 from "../../../assets/images/pattern/eligible_second_img.png";
import { RequestInvite } from "../../RequestInvite/RequestInvite";
import Box from "@mui/material/Box";
import flags from "../../../assets/images/img/flags.jpg";
import Modal from "@mui/material/Modal";
import close from "../../../assets/images/icons/img_close.svg";
import { Link } from "react-router-dom";

export const Section6 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="section6 d-flex flex-row w-100 p-5" id="sec6">
        <div className="sec6Left col-12 col-lg-6 mt-5 p-lg-5 d-flex justify-content-start flex-column">
          <h4 className="fw-bold">
            Verify Eligibility
            <br /> Get Early Access
          </h4>

          <div className="sec6options mt-4">
            <h5 className="change1920 fw-bold text-muted">
              Individual Investor
            </h5>
            <div className="opt1 d-flex align-items-center ">
              <img src={tick} className="img_tick" alt="" />
              <span className="ms-2">
                Tax resident of a&nbsp;
                <span onClick={handleOpen}>permitted country</span>
              </span>
            </div>
            <div className="opt2 d-flex align-items-center mt-2">
              <img src={tick} className="img_tick1" alt="" />
              <span className="ms-2">Net worth {">"} US$150,000</span>
            </div>
          </div>
          <div className="sec6btn mt-4">
            <RequestInvite />
          </div>

          <div className="sec6bottomDiv mt-4 d-flex align-items-center ">
            <img src={img8} className="img8 me-2" alt=""></img>
            <span>
              Institutional Investor?&nbsp;
              <Link
                to="/contactus"
                className="text-style-1"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </span>
          </div>
        </div>
        <div className="sec6Right  d-none d-lg-flex justify-content-lg-end col-lg-6">
          <img alt="" src={img7} className="img_eligibility w-75" />
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box className="requestModal p-3">
          <div className="sec6modalHeader d-flex flex-column ">
            <div className="cancelbtn w-100 d-flex justify-content-end">
              <img src={close} alt="close" onClick={handleClose} />
            </div>
            <h5 className="modalsec6Header fw-bold">Permitted Countries</h5>
            <span className="headerSpan text-muted">
              Residents of the following countries may be eligible to sign up as
              an investor.
            </span>
          </div>
          <div className="sec6modalDetails mt-2">
            <img src={flags} alt="flags" />
          </div>
        </Box>
      </Modal>
    </>
  );
};
