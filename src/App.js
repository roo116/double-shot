import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Main from "./components/Main";

// import images here

function App() {
  return (
    <div>
      <Header />
      <Main />
      <About />
    </div>
  );
}

export default App;
