import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Front from "./components/Front";
import Gallery from "./components/Gallery";
import About from "./components/About";

// import images here

function App() {
  const [nav] = useState([
    { name: "About" },
    { name: "Events" },
    { name: "The Music" },
    { name: "Gallery" },
  ]);

  const [currentNav, setCurrentNav] = useState(nav[0]);

  return (
    <div>
      <Header
      nav={nav}
      setCurrentNav={setCurrentNav}
      currentNav={currentNav}
      ></Header>

      <Front />
      <main>
        <Gallery />
        <About />
      </main>
    </div>
  );
}

export default App;
