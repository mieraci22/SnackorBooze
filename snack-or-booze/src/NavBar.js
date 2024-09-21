import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <Navbar expand="md">
      <NavLink to="/" className="navbar-brand">
        Snack or Booze
      </NavLink>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink
            to="/snacks"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Snacks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/drinks"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Drinks
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;