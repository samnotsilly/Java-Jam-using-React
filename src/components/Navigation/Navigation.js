import "./Navigation.css";
import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Jobs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
