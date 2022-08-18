import React from "react";
import styles from "../styles";

const Tickets = () => {
  return (
    <>
      <div className={``}>
        <div>
          <h3 className={`${styles.cardHeading}`}>tickets prices</h3>
          {/* <div
            className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16  mx-8 lg:mx-24 min-h-[100vh] gap-8`}
          >
            <div className="relative flex flex-col shadow-sm w-full">
              <div className="border-t-2 h-2 border-gray-400" />
              <div className={`mt-12 `}>
                <h1 className={styles.cardHeading}>Weekend(mon-friday)</h1>
                <ul className="list-none w-full flex flex-col mt-4 items-center">
                  <li className={`${styles.cardHeading} mt-4`}>child: 100</li>
                </ul>
              </div>
            </div>
          </div> */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 mt-16  mx-4 lg:mx-12  gap-8`}
          >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
