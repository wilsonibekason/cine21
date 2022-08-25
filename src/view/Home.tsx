import { useState } from "react";
import {
  Feed,
  Footer,
  Header,
  MovieCard,
  Tickets,
  HeaderTitle,
  Posts,
  PostCard,
  CustomeCard,
  CarouselImage,
} from ".././components";
import styles from ".././styles";
function Home() {
  return (
    <>
      <div className="black-bg  overflow-hidden">
        {/* <div className={`${styles.flexCenter} ${styles.paddingX} black-bg`}> */}
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
        {/* </div> */}

        {/* <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[calc(100vh-60px)]"> */}
        <CarouselImage />
        {/* </div> */}
        <div className="border-t bg-gray-250 mt-12" />
        <div className={` ${styles.paddingX} min-w-full -my-4`}>
          {/* <div className={`min-w-[100%]`}> */}
          <HeaderTitle />
          {/* </div> */}
        </div>
        <div className="border-t bg-white" />
        {/** header */}

        <Posts />
        {/* <div className={`${styles.boxWidth}`}>
          <Postss />
        </div> */}

        {/* <div className={`${styles.boxWidth}`}>
          <Posts />
        </div> */}
        <div className={`my-12 mx-4 lg:mx-[120px]`}>
          <Tickets />
        </div>
        {/* <div className={`my-4 mx-4 md:mx-16 lg:mx-16 bg_black p-10 rounded-lg`}> */}
        <div className="my-4 mx-4 md:mx-16 lg:mx-16">
          <CustomeCard />
        </div>
        <div
          className={`${styles.paddingX}  py-2 bg_black ${styles.flexStart}`}
        >
          <Footer />
        </div>
        <div className={`${styles.boxWidth}`}>
          <div className="w-full bg-gray-200 p-4" />
        </div>
      </div>
    </>
  );
}

export default Home;
