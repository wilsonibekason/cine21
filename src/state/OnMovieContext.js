import React, {
  useEffect,
  useRef,
  useContext,
  useState,
  createContext,
} from "react";

export const Context = createContext({});
const MovieProvider = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export const useMovieContext = () => useContext(Context);
