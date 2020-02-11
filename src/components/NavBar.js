import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavbarText
} from 'reactstrap';

const Navigation = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">myReads</NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" navbar></Nav>
          <NavbarText> <NavLink href="/addBook/">Add Book</NavLink></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;