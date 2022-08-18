import { useState } from "react";
import {
  Feed,
  Footer,
  Header,
  MovieCard,
  Tickets,
  HeaderTitle,
  Posts,
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
        <div className={`${styles.paddingX} bg-primary ${styles.flexStart}`}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
