import React, { useState } from "react";
import "./commonCss.css";
import { useNavigate } from "react-router-dom";
import smilyEmoji from "../assets/smilyEmoji.png";
import thumbsUP from "../assets/thumbsUP.png";
import cry from "../assets/cry.png";
const MainPage = () => {
  const navigate = useNavigate();
  const [changeEcoEmoji, setChangeEcoEmoji] = useState(false);
  const [changeNonEcoEmoji, setChangeNonEcoEmoji] = useState(false);
  return (
    <>
      <div className="pageContainer">
        <div className="mainPageContainer">
          <h1>How do you want to celebrate your diwali?</h1>
          <div className="cardsContainer">
            <div
              onClick={() => {
                navigate("/eco-friendly");
              }}
              className="leftCard card"
              onMouseEnter={() => {
                setChangeEcoEmoji(true);
              }}
              onMouseLeave={() => {
                setChangeEcoEmoji(false);
              }}
            >
              Eco-friendly way
              <img
                src={changeEcoEmoji === true ? thumbsUP : smilyEmoji}
                alt=""
              />
            </div>
            <div
              onClick={() => {
                navigate("/non-eco-friendly");
              }}
              className="rightCard card"
              onMouseEnter={() => {
                setChangeNonEcoEmoji(true);
              }}
              onMouseLeave={() => {
                setChangeNonEcoEmoji(false);
              }}
              style={changeNonEcoEmoji === true ?{borderColor:"red", boxShadow:"0 0 30px 4px red"}: null}
            >
              Non-Eco-friendly way
              <img
                src={changeNonEcoEmoji === true ? cry : smilyEmoji}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
