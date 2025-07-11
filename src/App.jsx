/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "H. Efe Kocasu",
  title: "Statistics Student || Data Science || ML & DL & AI",
  email: "kocasuhasanefe@gmail.com",
  gitHub: "efekcss",
  instagram: "efekcss",
  linkedIn: "efekcss",
  medium: "hefekocasu",
  twitter: "efekcss",
  youTube: "", 
};

const primaryColor = "#000000"; // Siyah renk (footer'daki renk yani)
const secondaryColor = "#666666"; //  Koyu gri (çok koyu)

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Education />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
