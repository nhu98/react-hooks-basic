import React, { useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "deeppink";
    console.log(initColor);
    return initColor;
  });

  function handleClickBox() {
    const newColor = getRandomColor();
    setColor(newColor);
    // console.log(color);
    localStorage.setItem("box-color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleClickBox}
    ></div>
  );
}

export default ColorBox;
