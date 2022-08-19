import React from "react";
import { beast, cold } from "../assets";
// import { useContextMovies } from "../state/oncontextMovies";
import { carouselAsset } from "../utils/data";
const CarouselImage = () => {
  // const { count, currentIndex, slideRef } = useContextMovies();
  return (
    <>
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          // backgroundImage: `url('${carouselAsset[currentIndex]}')`,
          backgroundImage: `url('${beast}')`,
        }}
        // ref={slideRef}
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
