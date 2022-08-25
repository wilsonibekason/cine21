import React, { useEffect, useState } from "react";
import { beast } from "../assets";
import styles, { layout } from "../styles";
import { cineMovies, ICineType } from "../utils/data";
import PostCard from "./PostCard";

import axios from "../baseUrl/axios";
import requests from "../baseUrl/request";
const baseUrl = "https://image.tmdb.org/t/p/original";
const Posts = () => {
  const {
    fetchActionMovies,
    fetchComedyMovies,
    fetchDocumentaries,
    fetchNetflixOriginals,
  } = requests;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      const request = await axios.get(fetchNetflixOriginals);
      const { data } = request;
      console.log("dmtb result: ", data);
      if (data && !cancelled) setMovies(data?.results);
    };

    fetchData();
    return () => {
      console.log("data cancelled");
      cancelled = true;
    };
  }, [fetchNetflixOriginals]);

  console.table(movies);
  /**
 * 
 * adult: false
backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg"
genre_ids: (3) [16, 878, 28]
id: 610150
original_language: "ja"
original_title: "ドラゴンボール超 スーパーヒーロー"
overview: "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family."
popularity: 7195.285
poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg"
release_date: "2022-06-11"
title: "Dragon Ball Super: Super Hero"
video: false
vote_average: 7.5
vote_count: 148
 */

  return (
    <>
      <h4
        className={`text-2xl text-white font-robotoMain font-extrabold uppercase text-center mt-3`}
      >
        new movies
      </h4>
      <div className="flex flex-wrap gap-4 mx-4 lg:mx-28 flex-col lg:flex-row basis-full mt-3">
        {movies.map((cineMovie, index) => (
          <div className=" text-white h-26 flex-auto w-full lg:w-[25%] ">
            {/* @ts-ignore */}
            <PostCard key={index} {...cineMovie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
