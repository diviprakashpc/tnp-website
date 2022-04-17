import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Recruit from "../Recruit/Recruit";
import Placements from "../Placements/Placements";
import Footer from "../Footer/Footer";
import TopButton from "../ToTopButton/TopButton";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Recruit />
      <Placements />
      <Footer />
      <TopButton />
    </div>
  );
}
