import React from "react";
import "./Section6.css";

import { RequestInvite } from "../../RequestInvite/RequestInvite";

export const Section6 = () => {
  return (
    <div className="section6  w-100  d-flex justify-content-center mt-5 align-items-center">
      <div className="bottomDiv d-flex justify-content-center flex-column w-100 p-5 align-items-center text-center">
        <h1 className="fw-bold mb-5">
          Are you prepared to take part in the revolution in investing?
        </h1>
        <RequestInvite />
      </div>
    </div>
  );
};
