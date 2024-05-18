import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { NavData } from "./NavData";
import { useLocation } from "react-router-dom";
import { UTurnLeft } from "@mui/icons-material";
import { RequestInvite } from "../RequestInvite/RequestInvite";
import logo from "../../assets/images/icons/AssetChain Logo.png";

export const Header = () => {
  const location = useLocation();

  const [navVisible, setNavVisible] = useState(false);

  return (
    <div>
      <div className="assetChain-nav">
        <div className=" container-fluid d-flex  justify-content-between align-items-center">
          <div>
            <button
              className="assetChain-nav-btn d-flex d-md-none"
              onClick={() => setNavVisible(!navVisible)}
            >
              <MdMenu size={24} />
            </button>
            <Link to="/" className="link">
              <img
                src={logo}
                alt="logo"
                height={50}
                className="me-5 d-none d-md-block"
              />
            </Link>
          </div>
          <div>
            <div className="assetChain-nav-compo d-none d-md-flex align-items-center ">
              <div className="d-flex align-items-center ">
                {NavData.map((i, index) => {
                  return (
                    <Link className="link" to={i.link} key={index}>
                      <div
                        className="headerNav-div p-3"
                        id={location.pathname === i.link ? "activePath" : ""}
                      >
                        <span>{i.title}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <RequestInvite />
            </div>
          </div>
        </div>
      </div>
      <nav className={!navVisible ? "header-sidebar" : ""}>
        <div>
          <div className="d-flex justify-content-between w-100">
            <Link to="/" className="link">
              <img src={logo} alt="logo" height={25} className="ps-2" />
            </Link>
            {navVisible ? (
              <div className="d-flex align-items-center">
                <div className="header-sidebarLine" />
                <div
                  className="header-sidebar-btn-open "
                  onClick={() => setNavVisible(false)}
                >
                  <UTurnLeft sx={{ fontSize: "20px" }} />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="header-links header-sidebar-top">
            {NavData.map((i, index) => {
              return (
                <Link
                  className="header-sidebar-link link"
                  id={location.pathname === i.link ? "activePath" : ""}
                  to={i.link}
                  key={index}
                >
                  <div className="d-flex justify-content-start header-option">
                    <span className="mt-1 ms-2">{i.title}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <RequestInvite />
        </div>
      </nav>
    </div>
  );
};
