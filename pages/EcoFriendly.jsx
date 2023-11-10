import React from "react";
import "./commonCss.css";
import Video from "../assets/video.mp4";
import swastik from "../assets/swastik.png";
import DIYA from "../assets/DIYA.png";
const EcoFriendly = () => {
  return (
    <>
      <div className="pageContainer">
        <div className="ecoFriendlyPageContainer">
          <div className="left">
            <img src={swastik} alt="" />
            <img className="diya diya1" src={DIYA} alt="" />
            <img className="diya diya2" src={DIYA} alt="" />
            <img className="diya diya3" src={DIYA} alt="" />
            <img className="diya diya4" src={DIYA} alt="" />
            <h2 className="change-button">HAPPY</h2>
          </div>
          <video className="video" controls>
            <source src={Video} type="video/mp4" />
          </video>
          <div className="right">
            <img src={swastik} alt="" />
            <img className="diya diya1" src={DIYA} alt="" />
            <img className="diya diya2" src={DIYA} alt="" />
            <img className="diya diya3" src={DIYA} alt="" />
            <img className="diya diya4" src={DIYA} alt="" />
            <h2 className="change-button">DIWALI</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcoFriendly;
