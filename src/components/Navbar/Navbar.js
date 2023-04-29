import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const acitveStyles = {
    backgroundColor: "lightblue",
    padding:"7px",
    borderradius:"10px",
    color: "darkblue",
    textDecoration: "none",
    margin:"20px",
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
        className = "logos"
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