import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import "./App.css";
const App = () => {
  return (
    <>
      <Navigation />
      <Home />
      <About />
    </>
  );
};

export default App;
