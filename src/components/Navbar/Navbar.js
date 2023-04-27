import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const acitveStyles = {
    backgroundColor: "lightblue",
    color: "darkblue",
    textDecoration: "none",
  };
  const styles = {
    backgroundColor: "blue",
    textDecoration: "none",
  };
  return (
    <header className="header">
      <NavLink
        to={"/"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h1 style={{ fontFamily: "Arial" }}>Logo</h1>
      </NavLink>
      <NavLink
        to={"/about-us"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h1 style={{ fontFamily: "Arial" }}>About Us</h1>
      </NavLink>
    </header>
  );
}

export { Navbar };