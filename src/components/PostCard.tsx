import React from "react";
import { beast } from "../assets";
import styles from "../styles";

const PostCard = () => {
  return (
    <>
      <div className="relative flex flex-col shadow-lg w-full">
        <img
          src={
            "https://i0.wp.com/cine21.ng/wp-content/uploads/2022/08/nope-official.jpg?resize=1024%2C706&ssl=1"
          }
          alt="img-card"
          className=" h-auto max-w-full  "
          width={800}
          height={552}
        />
        <div className="my-4 w-full">
          <h2 className={`${styles.cardHeading} `}>Captain America</h2>
          <p className={`${styles.spanPost} mt-4`}>
            The Red Ribbon Army was once destroyed by Son Goku. Individuals, who
            carry on its spirit, have created the ultimate Androids, Gamma 1 and
            Gamma 2. These two Androids call themselves “SuperHeroes”. They
            start attacking Piccolo and Gohan…What is the New Red Ribbon Army’s
            objective? In the face of approaching danger, it is time to awaken,
            Super Hero!
          </p>
          <h2 className={`${styles.cardHeading2} mt-2 `}>Captain America</h2>
          <p className={`${styles.spanPost2} mt-4`}>showing time</p>
          <p className={`${styles.spanPost2} mt-4`}>showing time</p>
          <ul className="list-none w-full flex flex-col ">
            <li className={`${styles.spanPost3} mt-4 pb-4`}>
              10:20pm - 20:30pm
            </li>
          </ul>
          <p className={`${styles.spanPost4} mt-4 pb-4`}>RATING: 15</p>
          <p className={`${styles.spanPost4} mt-4 pb-4`}>
            DURATION: <span className={`${styles.spanPost3}`}>1hr 53mins</span>
          </p>
          <p className={`${styles.spanPost4} mt-4 pb-4`}>
            GENRE:<span className={`${styles.spanPost3}`}>Drama, Romance</span>{" "}
          </p>
          <p className={`${styles.spanPost4} mt-4 pb-4`}>
            CAST:{" "}
            <span className={`${styles.spanPost3}`}>
              Deyemi Okanlawon, Bimbo Akintola, Toyin AbrahamCAST: Deyemi
              Okanlawon, Bimbo Akintola, Toyin Abraham
            </span>
          </p>
          <p className={`${styles.spanPost4} mt-4 pb-4`}>
            CAST:{" "}
            <span className={`${styles.spanPost3}`}>
              Deyemi Okanlawon, Bimbo Akintola, Toyin Abraham
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
