import React, {useEffect} from "react";
import logo from "../img/ds-logo.jpg";

const Header = (props) => {
 
  const {
    nav=[],
    setCurrentNav,
    currentNav,
  } = props

  useEffect (() => {
    document.title = (currentNav.name)
  }, [currentNav])


  // const navSelected = (props) => {
  //   console.log(`${props} was clicked`)
  // }

  return (
    <header className="d-flex flex-wrap justify-content-start bg-black">
      <div className="ds-logo">
        <span>
          <img src={logo} alt="logo" />
        </span>
      </div>
      <ul
        id="header-nav"
        className="d-flex flex-wrap flex-row justify-content-evenly mx-auto p-2 w-50"
      >
        {nav.map((nav) => (
          <li className={`mx-2 list-inline-item ${currentNav.name === nav.name && 'navActive'}`} key={nav.name}>
           <span onClick={() => setCurrentNav(nav)}><a className="text-light text-decoration-none" data-testid={nav.name} href={`#${nav.name}`}>{nav.name}</a></span> 
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
