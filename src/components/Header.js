import React from "react";
import logo from "../img/ds-logo.jpg"

const Header = () => {

  return (
    <header className="d-flex flex-wrap justify-content-between bg-black">
     <div className="ds-logo">
      <img src={logo} alt="logo" />
     </div>
      <ul id="header-nav" className="d-flex flex-wrap flex-row justify-content-evenly mx-auto p-2 w-50 text-light text-decoration-none">
        <li className="mx-2 list-inline-item">About</li>
        <li className="mx-2 list-inline-item">Events</li>
        <li className="mx-2 list-inline-item">The Music</li>
        <li className="mx-2 list-inline-item">Gallery</li>
        <span>
          <li className="nav-item list-inline-item">Get in touch!!!</li>
        </span>
      </ul>
    </header>
  );
};

export default Header;
