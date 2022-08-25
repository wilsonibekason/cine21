import React from "react";
import { beast } from "../assets";
import styles from "../styles";

const PostCard = ({
  img,
  title,
  description,
  showtime,
  rating,
  duration,
  genre,
  cast,
  director,
}) => {
  return (
    <>
      <div className="relative flex flex-col shadow-lg w-full">
        <img
          src={img}
          alt="img-card"
          className=" h-auto max-w-full  "
          width={800}
          height={552}
        />
        <div className="my-4 w-full">
          <h2 className={`${styles.cardHeading} `}>{title}</h2>
          <p className={`${styles.spanPost} mt-4`}>{description}</p>
          <h2 className={`${styles.cardHeading2} mt-2 `}>View Trailer</h2>
          <p className={`${styles.spanPost2} mt-4`}>showing time</p>
          <p className={`${styles.spanPost2} mt-4`}>showing time</p>
          <ul className="list-none w-full flex flex-col ">
            <li className={`${styles.spanPost3} mt-4 pb-4`}>{showtime}</li>
          </ul>
          <p className={`${styles.spanPost4} mt-4 pb-4`}>RATING: {rating}</p>
          <p className={`${styles.spanPost4} mt-4 pb-4`}>
            DURATION: <span className={`${styles.spanPost3}`}>{duration}</span>
          </p>
          <p className={`${styles.spanPost4} mt-4 pb-4`}>
            GENRE:<span className={`${styles.spanPost3}`}>{genre}</span>{" "}
          </p>
          <p className={`${styles.spanPost4} mt-4 pb-4`}>
            CAST: <span className={`${styles.spanPost3}`}>{cast}</span>
          </p>
          <p className={`${styles.spanPost4} mt-4 pb-4`}>
            CAST: <span className={`${styles.spanPost3}`}>{director}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
