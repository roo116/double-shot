import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header>
      <h2>Double Shot Rock Band</h2>
      <div className='d-flex flex-wrap mx-auto justify-content-around'>
      <Navbar color="light" light expand="md">
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Music</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Merch</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    </header>
  );
};

export default Header;
