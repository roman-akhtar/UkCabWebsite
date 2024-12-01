import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Menu_icon from "../../assets/Icons/menu-icon.png";

import Contact_icon from "../../assets/icons/phone-call.png";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""} `}>
      <p>Aylestone Kings</p>

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ServicePage">Services</Link>
        </li>
        <li>
          <Link to="/ContactPage">
            <button className="btn1">
              Contact <img src={Contact_icon} alt="" />
            </button>
          </Link>
        </li>
      </ul>
      <img src={Menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
