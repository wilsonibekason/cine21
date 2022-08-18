import React from "react";
import { beast } from "../assets";
import styles from "../styles";

const PostCard = () => {
  return (
    <>
      <div className="relative flex flex-col shadow-lg w-full">
        <img src={beast} alt="img-card" className=" object-cover" />
        <div className="my-4 w-full mx-4">
          <h2 className={`${styles.cardHeading} `}>Captain America</h2>
          <p className={`${styles.span1} mt-4`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            dolores quo ullam perspiciatis voluptatum quibusdam similique.
            Dolore dolorum cumque deleniti.
          </p>
          <h2 className={`${styles.cardHeading2} mt-2 `}>Captain America</h2>
          <p className={`${styles.span2} mt-4`}>shipping time</p>
          <p className={`${styles.span2} mt-4`}>shipping time</p>
          <ul className="list-none w-full flex flex-col mt-4 items-center">
            <li className={`${styles.span2} mt-4`}>10:20 - 20:30</li>
          </ul>
          <p className={`${styles.span2} mt-4`}>shipping time</p>
          <p className={`${styles.span2} mt-4`}>shipping time</p>
          <p className={`${styles.span2} mt-4`}>shipping time</p>
          <p className={`${styles.span2} mt-4`}>shipping time</p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
