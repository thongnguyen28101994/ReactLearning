import { color } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";

export default function useMagicColor() {
  const [color, setColor] = useState("red");
  const intervalRef = useRef(null);
  function randomColor() {
    const randomColor = ["red", "black", "green", "yellow", "orange"];
    const randomNum = Math.ceil(randomColor.length * Math.random());
    return randomColor[randomNum];
  }
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      //   const newColor = randomColor();
      //   setColor(newColor);
      console.log(intervalRef.current);
    }, 1000);
    return () => {
      console.log("Clear interval: " + intervalRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);
  return color;
}
