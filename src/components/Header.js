import React from "react";
import logo from "../img/ds-logo.jpg";

const Header = () => {
  const nav = [
    { name: "About" },
    { name: "Events" },
    { name: "The Music" },
    { name: "Gallery" },
    { name: "Get in Touch!!!" },
  ];

  return (
    <header className="d-flex flex-wrap justify-content-between bg-black">
      <div className="ds-logo">
        <span>
          <img src={logo} alt="logo" />
        </span>
      </div>
      <ul
        id="header-nav"
        className="d-flex flex-wrap flex-row justify-content-evenly mx-auto p-2 w-50 text-light text-decoration-none"
      >
        {nav.map((nav) => (
          <li className="mx-2 list-inline-item" key={nav.name}>
            {nav.name}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
