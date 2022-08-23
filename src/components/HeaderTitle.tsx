import React from "react";
import styles from "../styles";

const HeaderLink = () => {
  return (
    <>
      <div className=" lg:flex py-6 justify-start lg:justify-between  items-center">
        <p
          className={`text-2xl text-white font-robotoMain font-extrabold uppercase`}
        >
          Movie showing
        </p>

        <div className=" justify-end items-center flex flex-row">
          <p
            className={`text-xl lg:text-2xl text-white font-raleway font-medium capitalise `}
          >
            12th August-18th August 2022
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderLink;
