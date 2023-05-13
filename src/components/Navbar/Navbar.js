import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/AppContext.js";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const { token, setToken } = useContext(AppContext);
  const navigation = useNavigate();
  const acitveStyles = {
    backgroundColor: "lightblue",
    padding: "7px",
    borderRadius: "10px",
    color: "darkblue",
    textDecoration: "none",
    margin: "20px",
  };
  const styles = {
    textDecoration: "none",
    color: "#fefefe",
    margin: "20px",
  };

  useEffect(() => {}, [token]);

  return (
    <header className="header">
      {token ? (
        <>
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
          <button
            style={{
              width: "fit-content",
              backgroundColor: "lightblue",
              padding: "7px",
              borderRadius: "10px",
              color: "darkblue",
              textDecoration: "none",
              // margin: "20px",
            }}
            onClick={() => {
              localStorage.removeItem("token");
              setToken(null);
              navigation("/login");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? acitveStyles : styles)}
            className="logo"
          >
            <h1 style={{ fontFamily: "Arial" }}>Logo</h1>
          </NavLink>
          <NavLink
            to={"/login"}
            style={({ isActive }) => (isActive ? acitveStyles : styles)}
          >
            <h1 style={{ fontFamily: "Arial" }}>Login</h1>
          </NavLink>
          <NavLink
            to={"/register"}
            style={({ isActive }) => (isActive ? acitveStyles : styles)}
          >
            <h1 style={{ fontFamily: "Arial" }}>Register</h1>
          </NavLink>
        </>
      )}
    </header>
  );
}

export { Navbar };