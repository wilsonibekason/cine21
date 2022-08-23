import React from "react";
import styles from "../styles";
import { ticketList1, ticketList2, ticketList3 } from "../utils/data";
import TicketCard from "./TicketCard";
import TicketCard2 from "./TicketCard2";
import TicketCard3 from "./TicketCard3";

const Tickets = () => {
  return (
    <>
      <div className={``}>
        <div className="-pl-2">
          <h3 className={`${styles.cardHeading3}`}>tickets prices</h3>
          <div
            className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 mt-8  mx-0  lg:-mx-2  gap-8`}
          >
            {ticketList1.map((tick, index) => (
              <TicketCard {...tick} key={index} />
            ))}
            {ticketList2.map((tick, index) => (
              <TicketCard2 {...tick} key={index} />
            ))}
            {ticketList3.map((tick, index) => (
              <TicketCard3 {...tick} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
