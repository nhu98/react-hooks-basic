import { useEffect, useRef, useState } from "react";

function randomColor(currentColor) {
  const LIST_COLOR = ["red", "green", "yellow"];
  const currentColorIndex = LIST_COLOR.indexOf(currentColor);
  let newIndex = currentColorIndex;

  while (currentColorIndex === newIndex) {
    //random 0-2
    newIndex = Math.trunc(Math.random() * 3);
  }

  console.log(LIST_COLOR[newIndex]);
  return LIST_COLOR[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  //change color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      //   console.log("first color: ", color);
      //   console.log("change color: ", colorRef.current);
      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return { color };
}

export default useMagicColor;
