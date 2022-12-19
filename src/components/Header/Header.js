import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>JavaJam Coffee Bar</h1>
      </Link>
    </header>
  );
};

export default Header;
