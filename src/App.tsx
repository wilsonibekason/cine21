import { useState } from "react";
import { beast } from "./assets";
import {
  Feed,
  Footer,
  Header,
  MovieCard,
  Tickets,
  HeaderTitle,
  Posts,
  CustomeCard,
  CarouselImage,
} from "./components";
import styles from "./styles";
function App() {
  return (
    <>
      <div className="black-bg w-full overflow-hidden">
        <div className={`${styles.flexCenter} ${styles.paddingX} black-bg`}>
          <div className={`${styles.boxWidth}`}>
            <Header />
          </div>
        </div>

        {/* <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[calc(100vh-60px)]"> */}
        <CarouselImage />
        {/* </div> */}

        <div className={`${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <HeaderTitle />
          </div>
        </div>
        {/** header */}
        <div className={`${styles.boxWidth}`}>
          <Posts />
        </div>
        <div className={`my-8 mx-4 lg:mx-32`}>
          <Tickets />
        </div>
        <div className={`my-4 mx-4 md:mx-16 lg:mx-16 bg_black p-10 rounded-lg`}>
          <CustomeCard />
        </div>
        <div className={`${styles.paddingX} bg_black ${styles.flexStart}`}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
