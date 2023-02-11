import React from "react";
import Gif from "./assets/Gif.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={Gif}
        alt="Loading ..."
      />
    </div>
  );
}

export default Spinner;
