import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "swiper/css/bundle";
import TodosProvider from "./state/oncontextMovies";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <TodosProvider> */}
    <App />
    {/* </TodosProvider> */}
  </React.StrictMode>
);
