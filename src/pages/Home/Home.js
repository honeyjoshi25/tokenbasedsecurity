import React, { useEffect } from "react";
import "./Home.css";

import { Section1 } from "../../components/Home/Section1/Section1";
import { Section2 } from "../../components/Home/Section2/Section2";
import { Section3 } from "../../components/Home/Section3/Section3";
import { Section4 } from "../../components/Home/Section4/Section4";
import { Section5 } from "../../components/Home/Section5/Section5";
import { Section6 } from "../../components/Home/Section6/Section6";
import { Header } from "../../components/Header-2/Header";
import Footer from "../../components/Footer/Footer";
export const Home = () => {
  useEffect(() => {
    var current_url = window.location.href;
    if (current_url.includes("#invest")) {
      setTimeout(() => {
        document.getElementById("investLink").click();
      }, 50);
    }
  }, []);
  return (
    <>
      <Header />
      <div className="home  mt-5 w-100">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      <Footer />
    </>
  );
};
