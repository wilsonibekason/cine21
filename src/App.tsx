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
  PostCard,
  CustomeCard,
  CarouselImage,
  Postss,
} from "./components";
import styles from "./styles";
function App() {
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
        <h4
          className={`text-2xl text-white font-robotoMain font-extrabold uppercase text-center mt-3`}
        >
          new movies
        </h4>
        <div className="flex flex-wrap gap-4 mx-4 lg:mx-28 flex-col lg:flex-row basis-full mt-3">
          <div className=" text-white h-26 flex-auto w-full lg:w-[25%] ">
            <PostCard />
          </div>
          <div className=" text-white h-26 flex-auto w-full lg:w-[25%] ">
            <PostCard />
          </div>
          <div className=" text-white h-26 flex-auto w-full lg:w-[25%] ">
            <PostCard />
          </div>
          <div className=" text-white h-26 flex-auto w-full lg:w-[25%] ">
            <PostCard />
          </div>
        </div>
        {/* <div className={`${styles.boxWidth}`}>
          <Postss />
        </div> */}

        {/* <div className={`${styles.boxWidth}`}>
          <Posts />
        </div> */}
        <div className={`my-12 mx-4 lg:mx-32`}>
          <Tickets />
        </div>
        {/* <div className={`my-4 mx-4 md:mx-16 lg:mx-16 bg_black p-10 rounded-lg`}> */}
        <div className="my-4 mx-4 md:mx-16 lg:mx-16">
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
