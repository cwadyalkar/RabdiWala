import React from "react";
import { IoMenu } from "react-icons/io5";
// import { CiDark } from "react-icons/ci";
// import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";
import logo from "../Assets/logo2.jpg"

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} className="logo" alt="logo" />

        <ul className="links-container">
          <li className="link-items">
            <a href="#home" className="links">
              Home
            </a>
          </li>
          <li className="link-items">
            <a href="#home" className="links">
              About
            </a>
          </li>
          <li className="link-items">
            <a href="#home" className="links">
              Menu
            </a>
          </li>
          <li className="link-items">
            <a href="#home" className="links">
              Contact
            </a>
          </li>
        </ul>


        <div className="nav-extras">
          <IoMenu/>
          {/* <CiDark/> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
