import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Header from "./components/Header";
import Front from "./components/Front";
import Gallery from "./components/Gallery";
import About from "./components/About";

// import images here

function App() {
  return (
    <div>
      <Header />
      <Front />
      <main>
      <Gallery />
      <About />
      </main>
    </div>
  );
}

export default App;
