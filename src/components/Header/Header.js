import React, { useState, useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { RequestInvite } from "../RequestInvite/RequestInvite";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const headeData = [
  {
    title: "How it works",
    link: "/howItWorks",
  },
  {
    title: "About us",
    link: "/aboutUs",
  },
];
export const Header = () => {
  const { pathname } = useLocation();
  const [scroll, setScroll] = useState(false);
  const chnageBG = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", chnageBG);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className={
        scroll
          ? "headerActive w-100 header w-100 d-flex justify-content-between p-3"
          : "header w-100 d-flex justify-content-between p-3"
      }
    >
      <div className="navLeft" onClick={() => navigate("/")}>
        <Link to="/" className="link">
          <h5>AssetChain</h5>
        </Link>
      </div>

      <div className="navRight d-flex align-items-center">
        {headeData.map((item, index) => {
          return (
            <Link to={item.link} className="link m-4">
              <div
                className="navItem"
                key={index}
                id={window.location.pathname === item.link ? "active" : ""}
              >
                {item.title}
              </div>
            </Link>
          );
        })}
        <RequestInvite />
      </div>
    </div>
  );
};

export default Header;
