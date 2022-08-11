import React, { useState, useRef, useEffect } from "react";
import useMagicColor from "./useMagicColor";

export default function Test1() {
  const color = useMagicColor();
  return (
    <div
      style={{ backgroundColor: color, width: "100px", height: "100px" }}
    ></div>
  );
}
