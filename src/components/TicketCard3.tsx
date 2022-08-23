import React from "react";
import styles from "../styles";

const TicketCard3 = ({ data, adult, child }) => {
  return (
    <>
      <div className="col-span-1 lg:col-span-4">
        <div className="relative flex flex-col shadow-sm w-full">
          <div className="border-t-2 h-2 border-gray-400" />
          <div className={`mt-12 `}>
            <h1 className={styles.cardHeading4}>{data}</h1>
            <ul className="list-none w-full flex flex-col mt-4 items-center">
              <li className={`${styles.cardHeading5} mt-4`}>child: {child}</li>
              <li className={`${styles.cardHeading5} mt-4`}>
                adult: {` ${adult}`}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard3;
