import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./view/Contact";
import Home from "./view/Home";
// import {
//   Feed,
//   Footer,
//   Header,
//   MovieCard,
//   Tickets,
//   HeaderTitle,
//   Posts,
//   PostCard,
//   CustomeCard,
//   CarouselImage,
// } from "./components";
// import styles from "./styles";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
