import React, { useRef,useEffect }  from "react";
import logo from "../Assets/logo2.jpg";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { Container } from "reactstrap";

import "./Navbar3.css";

const nav__links = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Menu",
    path: "/menu",
  },
  {
    display: "Contact Us",
    path: "/contact",
  },
];
const Navbar3 = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
 
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll",{});
  }, []);
 
 
 
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="" />
            <h5>RabdiWala</h5>
          </div>

          <div className="navigation" ref={menuRef}>
            <div className="menu d-flex align-items-center gap-5"  onClick={toggleMenu}>
            {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                  onClick={toggleMenu}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="nav__right d-flex align-items-center gap-4">
         
            <span className="mobile__menu" onClick={toggleMenu}>
              <IoMenu className="icon"/>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar3;
