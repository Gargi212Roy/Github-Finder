import React from "react";
import Gif2 from "./assets/Gif2.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={Gif2}
        alt="Loading ..."
      />
    </div>
  );
}

export default Spinner;
