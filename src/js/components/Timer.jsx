import React from "react";
import { Digit } from "./Digit";

export const Timer = ({ count }) => {
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-3">
          <Digit value={Math.floor((Math.floor(count / 60)) / 10) % 10} />
        </div>
        <div className="col-3">
          <Digit value={Math.floor(Math.floor(count / 60)) % 10} />
        </div>
        <div className="col-3">
          <Digit value={Math.floor((count % 60) / 10) % 10} />
        </div>
        <div className="col-3">
          <Digit value={(count % 60) % 10} />
        </div>
      </div>
    </div>
  );
};

export default Timer;
