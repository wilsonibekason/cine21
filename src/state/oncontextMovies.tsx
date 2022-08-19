import React, {
  createContext,
  useState,
  FC,
  useContext,
  useEffect,
  useRef,
} from "react";
import { carouselAsset } from "../utils/data";
import { TodosContextState, slideProviderProps } from "./types";

const contextDefaultValues: TodosContextState = {
  todos: [],
  addTodo: () => {},
  currentIndex: 0,
  count: 0,
};

export const TodosContext =
  createContext<TodosContextState>(contextDefaultValues);

const TodosProvider = ({ children }: slideProviderProps) => {
  let slideRef = useRef<HTMLDivElement>(null);
  const [todos, setTodos] = useState<string[]>(contextDefaultValues.todos);
  const [currentIndex, setCurrentIndex] = useState<number | undefined>(
    contextDefaultValues.currentIndex
  );
  let count = 0;
  let slideInterval: number | undefined;
  type GreetFunction = (a: string) => void;
  const addTodo = (newTodo: string) => setTodos((todos) => [...todos, newTodo]);

  useEffect(() => {
    slideRef.current?.addEventListener("animationend", removeAnimation);
    startSlider;
  }, []);

  const removeAnimation = () =>
    slideRef.current?.classList.remove(".fade-anim");
  const startSlider = setInterval(() => {
    handleOnNext;
    return () => endSlider();
  }, 2000);
  const endSlider = () => clearInterval(slideInterval);
  const handleOnNext = () => {
    count = (count + 1) % carouselAsset.length;
    setCurrentIndex(count);
    slideRef?.current?.classList.add(".fade-anim");
  };
  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        count,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useContextMovies = () => useContext(TodosContext);

export default TodosProvider;
