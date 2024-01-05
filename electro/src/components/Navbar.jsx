// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import search from "../assets/SearchLogo.png";
import bar3 from "../assets/3bar.svg";
import x from "../assets/x.svg";
import "./Navbar.css";

const Navbar = () => {
  //this is for opening or closing the menu bar
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/024/553/676/small/skull-wearing-crown-logo-skull-king-sticker-pastel-cute-colors-generative-ai-png.png"
          alt="Logo"
        />
      </div>
      <div className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Contact</Link>
          </li>
        </ul>
        {/* <div className="search-bar">
            <div className="search_logo">
                <img src={search} alt="" />
            </div>
          <input type="text" placeholder="Search Services Here" />
        </div> */}

        <div class="container">
          <div class="search-container">
            <input class="input" type="text" />
            <svg viewBox="0 0 24 24" class="search__icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </div>
        </div>
         
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className="close_open_bar bar">
          <img src={isMobileMenuOpen ? x : bar3} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
