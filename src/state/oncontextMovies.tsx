// import React, {
//   createContext,
//   useState,
//   FC,
//   useContext,
//   useEffect,
//   useRef,
// } from "react";
// import { carouselAsset } from "../utils/data";
// import { TodosContextState, slideProviderProps, RefObject } from "./types";

// const contextDefaultValues: TodosContextState = {
//   todos: [],
//   addTodo: () => {},
//   currentIndex: 0,
//   count: 0,
//   slideRef: useRef<HTMLDivElement>(null),
// };
// export const TodosContext =
//   createContext<TodosContextState>(contextDefaultValues);

// const TodosProvider = ({ children }: slideProviderProps) => {
//   let slideRef = useRef<HTMLDivElement>(null);
//   const [todos, setTodos] = useState<string[]>(contextDefaultValues.todos);
//   const [currentIndex, setCurrentIndex] = useState<number>(
//     contextDefaultValues.currentIndex
//   );
//   let count = 0;
//   let slideInterval: number | undefined;
//   type GreetFunction = (a: string) => void;
//   const addTodo = (newTodo: string) => setTodos((todos) => [...todos, newTodo]);

//   useEffect(() => {
//     slideRef.current?.addEventListener("animationend", removeAnimation);
//     slideRef?.current?.addEventListener("mouseenter", endSlider);
//     // slideRef?.current?.addEventListener("mouseleave", startSlider());
//     startSlider;
//     // clean up function
//     return () => endSlider();
//   }, []);

//   const removeAnimation = () =>
//     slideRef.current?.classList.remove(".fade-anim");
//   const startSlider = setInterval(() => {
//     handleOnNext();
//   }, 2000);
//   const endSlider = () => clearInterval(slideInterval);
//   const handleOnNext = () => {
//     count = (count + 1) % carouselAsset.length;
//     setCurrentIndex(count);
//     slideRef?.current?.classList.add(".fade-anim");
//   };
//   return (
//     <TodosContext.Provider
//       value={{
//         todos,
//         addTodo,
//         count,
//         currentIndex,
//         slideRef,
//       }}
//     >
//       {children}
//     </TodosContext.Provider>
//   );
// };

// export const useContextMovies = () => useContext(TodosContext);

// export default TodosProvider;
