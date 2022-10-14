import React from "react";

const Header = () => {

  return (
    <header>
      <h2>Double Shot Rock Band</h2>
      <ul className="d-flex flex-wrap justify-content-around">
        <li>About</li>
        <li>Events</li>
        <li>The Music</li>
        <li>Gallery</li>
        <span>
          <li>Get in touch!!!</li>
        </span>
      </ul>
    </header>
  );
};

export default Header;
