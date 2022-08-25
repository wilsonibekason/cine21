import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "swiper/css/bundle";
import TodosProvider from "./state/oncontextMovies";
import Contact from "./view/Contact";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <TodosProvider> */}
      <App />

      {/* </TodosProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
