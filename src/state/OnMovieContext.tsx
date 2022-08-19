// import React, {
//   useEffect,
//   useRef,
//   useContext,
//   useState,
//   createContext,
// } from "react";
// import { carouselAsset } from "../utils/data";

// export const Context = createContext<string | object>({});
// interface slideProviderProps {
//   children: React.ReactNode;
// }
// const MovieProvider = ({ children }: slideProviderProps) => {
//   // type SliderState = typeof slideRef.current;

//   const [index, setIndex] = useState(0);
//   let slideRef = useRef<HTMLDivElement>(Object);
//   // slideCurrent: Slider State = slideRef.current;

//   let count: number = 0;
//   let slideInterval: number | undefined;

//   useEffect(() => {
//     slideRef.current.addEventListener("animationend", removeAnimation);
//     slideRef.current.addEventListener("mouseEnter", endSlider);
//     slideRef.current.addEventListener("mouseLeave", startSlider);
//     startSlider();
//     return () => {
//       endSlider();
//     };
//   }, []);
//   const removeAnimation = () => {
//     slideRef.current.classList.remove(".fade-anim");
//   };

//   const startSlider = () => {
//     slideInterval = setInterval(() => {
//       handleOnNext();
//     }, 2000);
//   };

//   const endSlider = () => {
//     clearInterval(slideInterval);
//   };

//   const handleNextSlide = () => {
//     const movieSliderLength = carouselAsset.length;
//     count = (index + movieSliderLength + 1) % movieSliderLength;
//     setIndex(count);
//     slideRef.current.classList.add(".fade-anim");
//   };

//   const handleOnNext = () => {
//     count = (count + 1) % carouselAsset.length;
//     setIndex(count);
//     slideRef.current.classList.add(".fade-anim");
//   };
//   return (
//     // <Context.Provider value={{
//     //     index,
//     //     slideRef,
//     //   }}
//     // >
//     //   {children}
//     // </Context.Provider>

//   );
// };

// export const useMovieContext = () => useContext(Context);
