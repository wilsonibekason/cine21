import React from "react";
import { beast, cold } from "../assets";

const CarouselImage = () => {
  return (
    <>
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url('${cold}')`,
          on,
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
    </>
  );
};

export default CarouselImage;
