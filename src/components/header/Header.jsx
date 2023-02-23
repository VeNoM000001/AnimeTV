import React from "react";
import { Link } from "react-router-dom";
import Itachi from "../../assets/itachi.jpeg";
import "./Search.scss";

const Header = () => {
  return (
    <nav>
      <img src={Itachi} alt="navImg" />
      <Link to="/">Anime TV</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/about">About</Link>
        <Link to="/yourlist">Your List</Link>
      </div>
    </nav>
  );
};

export default Header;
