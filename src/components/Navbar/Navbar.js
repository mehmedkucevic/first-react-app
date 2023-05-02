import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const acitveStyles = {
    backgroundColor: "#7119ff",
    padding: "11px",
    borderRadius: "30px",
    color: "#bebebe",
    textDecoration: "none",
    margin: "20px",
    boxShadow: "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px" ,
    scroll:"smooth",
    transition:"transform 0.4s ease-in-out",
  };
  const styles = {
    textDecoration: "none",
    color: "white",
    margin: "20px",
  };
  return (
    <header className="header">
      <NavLink
        to={"/"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
        className="logo"
      >
        <h1 style={{ fontFamily: "Arial" }}>Logo</h1>
      </NavLink>
      <NavLink
        to={"/about-us"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h1 style={{ fontFamily: "Arial" }}>About Us</h1>
      </NavLink>
      <NavLink
        to={"/hotels"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h1 style={{ fontFamily: "Arial" }}>Hotels</h1>
      </NavLink>
      <NavLink
        to={"/teams"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h1 style={{ fontFamily: "Arial" }}>Teams</h1>
      </NavLink>
      <NavLink
        to={"/quotes"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h1 style={{ fontFamily: "Arial" }}>Quotes</h1>
      </NavLink>
    </header>
  );
}

export { Navbar };