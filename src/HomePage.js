import React from "react";

import { pageStyle } from "./components/styles";
import Header from "./Header";
import Product from "./Product";
import Mission from "./Mission";
import AboutUs from "./AboutUs";
import useActiveSectionHighlighting from "./components/SectionHighlight";
import MyNavbar from "./components/NavBar";
import Contact from "./Contact";
const HomePage = () => {
  useActiveSectionHighlighting(["#home", "#product", "#about", "#contact"]);

  return (
    <>
      <MyNavbar />
      <div style={pageStyle}>
        <section id="home">
          {" "}
          <Header /> <Mission />
        </section>
        <section id="product">
          {" "}
          <Product />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default HomePage;
