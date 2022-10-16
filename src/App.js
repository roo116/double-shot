import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Front from "./components/Front";

// import images here

function App() {
  return (
    <div>
      <Header />
      <Front />
      <About />

    </div>
  );
}

export default App;
