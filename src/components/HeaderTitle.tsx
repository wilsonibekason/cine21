import React from "react";
import styles from "../styles";

const HeaderLink = () => {
  return (
    <>
      <div className="w-full flex-end lg:flex py-6 justify-end lg:justify-between items-center">
        <div className="w-full">
          <p className={`${styles.heading3}`}>Movies Showing </p>
        </div>
        <div className="flex-col items-center">
          <div className="w-full">
            <p className={`${styles.heading3}`}>12th August-18th August 2022</p>
          </div>
        </div>
        {/** centered Heading */}
      </div>
    </>
  );
};

export default HeaderLink;
