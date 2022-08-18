import React from "react";
import styles from "../styles";

const CustomeCard = ({ message }) => {
  return (
    <>
      <div className="w-full ">
        <h1 className={`${styles.cardHeading}`}>{message}</h1>
      </div>
    </>
  );
};

export default CustomeCard;
