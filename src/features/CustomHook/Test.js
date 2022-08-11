import React, { useState, useRef, useEffect } from "react";

export default function Test() {
  const [color, setColor] = useState("red");
  const intervalRef = useRef(null);
  function randomColor() {
    const randomColor = ["red", "black", "green", "yellow", "orange"];
    const randomNum = Math.ceil(randomColor.length * Math.random());
    return randomColor[randomNum];
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const newColor = randomColor();
      console.log(newColor);
      setColor(newColor);
      //  console.log(intervalRef.current);
    }, 1000);
    return () => {
      console.log("Clear interval: " + intervalRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div
      style={{ backgroundColor: color, width: "100px", height: "100px" }}
    ></div>
  );
}
