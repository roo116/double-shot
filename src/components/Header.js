import React from "react";

const Header = () => {

  return (
    <header className="d-flex flex-wrap flex-row justify-content around bg-black">
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
