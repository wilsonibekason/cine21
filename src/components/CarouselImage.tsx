import React, { useEffect, useRef, useState } from "react";
import { beast, cold } from "../assets";
import { TodosContextState } from "../state/types";
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
  return (
    <>
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url('${carouselAsset[currentIndex]}')`,
          //backgroundImage: `url('${beast}')`,
        }}
        ref={slideRef}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
    </>
  );
};

export default CarouselImage;
