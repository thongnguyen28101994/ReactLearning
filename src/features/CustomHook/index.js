import React, { useState, useRef, useEffect } from "react";
//import useMagicColor from "./useMagicColor";
import Test1 from "./Test1";
export default function CustomHook() {
  const [showMagicColor, setShowMagicColor] = useState(true);
  //const color = useMagicColor();

  return (
    <>
      {showMagicColor && (
        //   (
        //     <div
        //       style={{ backgroundColor: color, width: "100px", height: "100px" }}
        //     ></div>
        //   )
        <Test1 />
      )}
      <button
        type="button"
        onClick={() => {
          setShowMagicColor(false);
        }}
      >
        Unmount
      </button>
    </>
  );
}
