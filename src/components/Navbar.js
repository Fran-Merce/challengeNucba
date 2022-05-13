import React from "react";
import logo from '../assets/logo.png'
export const Navbar = ({ links }) => {
  return (
    <nav className="nav">
      <div className="logo">

      <img src={logo} alt="logo" />
      </div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a className="nav__link" href="/">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
