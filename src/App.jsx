import { useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./Hero";
import Project from "./Project";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <Footer />
    </>
  );
}

export default App;
