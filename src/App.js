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
      <main>
      <Front />
      </main>
      <About />

    </div>
  );
}

export default App;
