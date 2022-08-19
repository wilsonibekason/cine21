import React from "react";
import styles from "../styles";

const TicketCard = () => {
  return (
    <>
      <div className="col-span-1 lg:col-span-4">
        <div className="relative flex flex-col shadow-sm w-full">
          <div className="border-t-2 h-2 border-gray-400" />
          <div className={`mt-12 `}>
            <h1 className={styles.cardHeading}>Weekend(mon-friday)</h1>
            <ul className="list-none w-full flex flex-col mt-4 items-center">
              <li className={`${styles.cardHeading} mt-4`}>child: 100</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
