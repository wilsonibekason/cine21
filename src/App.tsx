import { useState } from "react";
import {
  Feed,
  Footer,
  Header,
  MovieCard,
  Tickets,
  HeaderTitle,
  Posts,
  CustomeCard,
} from "./components";
import styles from "./styles";
function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.flexCenter} ${styles.paddingX} bg_black`}>
          <div className={`${styles.boxWidth}`}>
            <Header />
          </div>
        </div>
        <div className={`${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <HeaderTitle />
          </div>
        </div>
        {/** header */}
        <div className={`${styles.boxWidth}`}>
          <Posts />
        </div>
        <div className={`my-8 mx-32`}>
          <Tickets />
        </div>
        <div className={`my-4 mx-16 bg_black p-10 rounded-lg`}>
          <CustomeCard
            message={
              "Customer Careline: 09150391829 | Advert/Marketing: 08028348929 "
            }
          />
        </div>
        <div className={`${styles.paddingX} bg_black ${styles.flexStart}`}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
