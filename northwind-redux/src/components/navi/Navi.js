import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import CartSummary from '../cart/CartSummary'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="md">
        <NavbarBrand><Link to="/">Northwind Store</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink><Link to="/saveproduct">Add to product</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Link to="/cart">My Cart</Link>
              </NavLink>
            </NavItem>
            <CartSummary/>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;