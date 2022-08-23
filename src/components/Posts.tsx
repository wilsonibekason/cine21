import React from "react";
import { beast } from "../assets";
import styles, { layout } from "../styles";
import { cineMovies, ICineType } from "../utils/data";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <>
      <h4
        className={`text-2xl text-white font-robotoMain font-extrabold uppercase text-center mt-3`}
      >
        new movies
      </h4>
      <div className="flex flex-wrap gap-4 mx-4 lg:mx-28 flex-col lg:flex-row basis-full mt-3">
        {cineMovies.map((cineMovie, index) => (
          <div className=" text-white h-26 flex-auto w-full lg:w-[25%] ">
            <PostCard key={index} {...cineMovie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
