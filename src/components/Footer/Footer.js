import React from "react";
import "./Footer.css";
import { Divider } from "@material-ui/core";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/icons/AssetChain Logo.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="w-100">
      <div className="nonDiv w-100">
        <Divider
          className="nonDevdivider w-100"
          style={{ backgroundColor: "#1a60f6", height: 5 }}
        />
      </div>
      <div className="footer p-5 w-100">
        <div className="footerWrapper d-flex flex-column flex-md-row">
          <div className="footerLeft col-12 col-md-4">
            <div
              className="upperimg"
              onClick={() => {
                navigate("/");
              }}
            >
              <Link to="/" className="link">
                <img src={logo} alt="logo" className="w-25" />
              </Link>
            </div>
            <span>© 2021-2022 AssetChain Fintech LLP</span>
          </div>
          <div className="footerRight d-flex col-md-8 flex-row">
            <div className="rightCard d-flex flex-column col-6">
              <h5 className="fw-bold">Invest </h5>
              <div className="d-flex flex-column fw-bold">
                <Link
                  className="rightCard link mb-3"
                  to="/
  "
                >
                  <span>Home</span>
                </Link>

                <a
                  className="rightCard link mb-3"
                  id="investLink"
                  href="/#invest"
                >
                  <span>Why Invest</span>
                </a>

                <Link className="rightCard link mb-3" to={"/howitworks"}>
                  <span>How it works</span>
                </Link>
              </div>
            </div>
            <div className="rightCard d-flex flex-column col-6">
              <h5 className="fw-bold">Company</h5>
              <div className="d-flex flex-column fw-bold">
                <Link className="rightCard link mb-3" to={"/aboutus"}>
                  <span>About Us</span>
                </Link>

                <a
                  className="rightCard link mb-3"
                  id="teamLink "
                  href="/aboutus#team"
                >
                  <span>Team</span>
                </a>

                <Link className="rightCard link mb-3" to={"/contactus"}>
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <p className="Copyright p-5 pb-0 w-100">
        AssetChain Pvt. Ltd. is the owner of the trademark and/or registered
        trademark AssetChain. All rights reserved.
      </p>
      {/* <div className="d-flex flex-column p-5 w-100 footerContent">
        <p className="Disclaimer">
          Certain forward-looking statements on this website are vulnerable to a
          number of risks and uncertainties. It is advised that you not rely
          unduly on any of these forward-looking statements. AssetChain Fintech
          LLP maintains this website at its full and complete discretion.
        </p>

        <p className="Disclaimer">
          The IFSCA's Regulatory Sandbox Framework governs AssetChain Fintech
          LLP. AssetChain Fintech LLP has prepared the content on the
          AssetChain.network website without taking into account the investment
          needs or financial circumstances of any specific user. Before making
          any investments, prospective investors are advised to speak with
          qualified tax, legal, and financial professionals. Risk is a part of
          all investments, and losing all of your money is one of them. Before
          making an investment, please carefully examine the investing
          objectives, risks, transaction costs, and other associated expenses.
          Asset allocation and diversification do neither guarantee profits or
          protect against losses. Investment choices ought to be made in light
          of each person's unique objectives, time horizon, and risk tolerance.
          Historical price trends and historical appreciation percentages based
          on sales data may be included in our materials. This information isn't
          meant to represent the kind of returns AssetChain Fintech LLP would
          have made at those times. An investment's performance may be
          significantly reduced by fees, expenditures, and other factors.
        </p>

        <p className="Disclaimer">
          Past price trends are not indicative of future price trends and are
          not intended to be a proxy for historical or projected future
          performance of an asset. Also, our materials may present comparisons
          between the historical price performance of an asset with other
          investment asset classes, such as stocks, bonds, real estate, funds,
          and others. There is no guarantee of profits and investing includes
          risk of loss. The information contained herein neither constitutes an
          offer for nor a solicitation of interest in any specific offering.
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
