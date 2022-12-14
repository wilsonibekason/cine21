import React, { useEffect, useRef, useState } from "react";
import { beast, cold } from "../assets";
import { TodosContextState } from "../state/types";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  /**SwiperCore */ Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import { useContextMovies } from "../state/oncontextMovies";
import { carouselAsset } from "../utils/data";
const CarouselImage = () => {
  const contextDefaultValues: TodosContextState = {
    todos: [],
    addTodo: () => {},
    currentIndex: 0,
    count: 0,
    slideRef: useRef<HTMLDivElement>(null),
  };
  // const { count, currentIndex, slideRef } = useContextMovies();
  let slideRef = useRef<HTMLDivElement>(null);
  const [todos, setTodos] = useState<string[]>(contextDefaultValues.todos);
  const [currentIndex, setCurrentIndex] = useState<number>(
    contextDefaultValues.currentIndex
  );
  let count = 0;
  let slideInterval: number | undefined;
  useEffect(() => {
    slideRef.current?.addEventListener("animationend", removeAnimation);
    slideRef?.current?.addEventListener("mouseenter", endSlider);
    // slideRef?.current?.addEventListener("mouseleave", startSlider());
    startSlider;
    // clean up function
    return () => endSlider();
  }, []);

  const removeAnimation = () =>
    slideRef.current?.classList.remove(".fade-anim");
  const startSlider = setInterval(() => {
    handleNextSlide();
  }, 10000);
  const endSlider = () => clearInterval(slideInterval);
  const handleOnNext = () => {
    count = (count + 1) % carouselAsset.length;
    setCurrentIndex(count);
    slideRef?.current?.classList.add(".fade-anim");
  };
  const handleNextSlide = () => {
    const productBannerLength = carouselAsset.length;
    count = (currentIndex + productBannerLength + 1) % productBannerLength;
    setCurrentIndex(count);
    slideRef.current?.classList.add(".fade-anim");
  };

  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect="fade"
        loop
        speed={500}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[calc(100vh-12vh)] ">
            <div
              className="absolute top-0 w-full h-full bg-center bg-no-repeat bg-cover "
              style={{
                backgroundImage: `url('https://i0.wp.com/cine21.ng/wp-content/uploads/2022/08/nope-official.jpg?resize=1024%2C706&ssl=1')`,
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[calc(100vh-12vh)] ">
            <div
              className="absolute top-0  w-full h-full bg-center bg-no-repeat bg-cover "
              style={{
                backgroundImage: `url('https://i0.wp.com/cine21.ng/wp-content/uploads/2022/08/Stranger.jpg?resize=691%2C1024&ssl=1')`,
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[calc(100vh-12vh)] ">
            <div
              className="absolute top-0  w-full h-full bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url('https://i0.wp.com/cine21.ng/wp-content/uploads/2022/08/Dragon-ball-scaled.jpg?resize=723%2C1024&ssl=1')`,
              }}
            />
          </div>
        </SwiperSlide>
        {/* ... pos: 50% cover black norepeat min100% min100% */}
      </Swiper>
    </>
  );
};
{
  /* <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black"
        ></span> */
}
export default CarouselImage;
