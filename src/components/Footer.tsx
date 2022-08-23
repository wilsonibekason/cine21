import React from "react";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
import styles from "../styles";

const Footer = () => {
  return (
    <>
      <div className="w-full flex py-6 justify-between items-center mx-0 lg:mx-16">
        <p className="text-[10px] lg:text-[12px] font-robotoCondensed w-full">
          © 2021 Cine21. All rights reserved.
        </p>

        <h1 className=" justify-end flex ">
          <ul className="list-none w-full flex flex-row items-center ">
            <li className={`${styles.span1} pr-2`}>
              <GrFacebookOption className="w-4 h-4" />
            </li>
            <li className={`${styles.span1} pr-2`}>
              {" "}
              <GrTwitter className="w-4 h-4" />
            </li>
            <li className={`${styles.span1} pr-2`}>
              <GrInstagram className="w-4 h-4 " />
            </li>
          </ul>
        </h1>
      </div>
    </>
  );
};

export default Footer;
