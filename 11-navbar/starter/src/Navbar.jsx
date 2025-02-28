import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import { links } from "./data";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container">
            <ul className="links">
                {links.map((link) => {
                    const {id , url , text} = link
                    return(
                        <>
                        <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                        </>
                    )
                })}
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
