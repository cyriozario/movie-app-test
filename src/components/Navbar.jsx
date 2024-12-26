import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </div>
    </nav>
  );
}

export default Navbar;
