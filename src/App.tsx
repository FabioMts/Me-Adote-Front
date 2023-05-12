import { useState } from "react";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
import adote from "../src/assets/adopt.jpg";
import adopt from "../src/assets/adote.png";
import adotecao from "../src/assets/adote-cachorro.png";
import Button from "@mui/material/Button";
import Navbar from "./components/navbar/Navbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Route, Routes } from "react-router";
import Contato from "./components/Contato";
import Home from "./components/Home";
import Pets from "./components/Pets";
import Doar from "./components/Doar";
import Swipeable from "./components/Swipeable";
import Anunciar from "./components/Anunciar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="header-bg">
      <div>
        <Navbar children={undefined}></Navbar>
      </div>
      <div className="central">
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Pets" element={<Pets />} />
          <Route path="Doar" element={<Doar />} />
          <Route path="Contato" element={<Contato />} />
          <Route path="Anunciar" element={<Anunciar />} />
        </Routes>
      </div>

      <div className="embaixo">
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
}

export default App;
