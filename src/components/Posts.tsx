import React from "react";
import { beast } from "../assets";
import styles, { layout } from "../styles";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <>
      <div className="">
        <h4
          className={`text-2xl text-white font-robotoMain font-extrabold uppercase text-center mt-3`}
        >
          new movies
        </h4>
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4  mx-8 lg:mx-24 min-h-[100vh] gap-8`}
      >
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
};

export default Posts;
