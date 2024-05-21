import React from "react";
import "./HowItWorks.css";
import { Section1 } from "../../components/HowItWorks/Section1/Section1";
import { Section2 } from "../../components/HowItWorks/Section2/Section2";
import { Section3 } from "../../components/HowItWorks/Section3/Section3";
import { Section4 } from "../../components/HowItWorks/Section4/Section4";
import { Section5 } from "../../components/HowItWorks/Section5/Section5";
import { Section6 } from "../../components/HowItWorks/Section6/Section6";

export const HowItworks = () => {
  return (
    <div className="howItworks">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};
