import React from "react";
import { Digit } from "./Digit";

export const Timer = ({ count }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        
        <div className="col-1 shadow-lg border-top border-bottom border-start border-5 border-success bg-dark">
          <Digit value={Math.floor(Math.floor(count / 60) / 10) % 10} />
        </div>
        <div className="col-1 shadow-lg border-top border-bottom border-5 border-success bg-dark">
          <Digit value={Math.floor(Math.floor(count / 60)) % 10} />
        </div>
        <div className="col-1 shadow-lg text-success border-top border-bottom border-5 border-success bg-dark fs-2">
          :
        </div>
        <div className="col-1 shadow-lg border-top border-bottom border-5 border-success bg-dark">
          <Digit value={Math.floor((count % 60) / 10) % 10} />
        </div>
        <div className="col-1 shadow-lg border-top border-bottom border-end border-5 border-success bg-dark">
          <Digit value={(count % 60) % 10} />
        </div>
        
      </div>
    </div>
  );
};

export default Timer;
