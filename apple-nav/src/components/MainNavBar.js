import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./navigation.css";

export default function MainNavBar({ items }) {
  return (
    <nav className="main-nav">
      <div className="main-nav-content">
        <NavLink to="/" exact activeClassName="main-nav-link-active">
          <i className="fab fa-apple fa-2x" />
        </NavLink>
        {items.map(element => (
          <NavLink
            activeClassName="main-nav-link-active"
            to={`/${element.toLowerCase()}`}
          >
            {element}
          </NavLink>
        ))}
        <NavLink to="/support" activeClassName="main-nav-link-active">
          Support
        </NavLink>
        <Link to="/">
          <i className="fas fa-search fa-lg" />
        </Link>
        <Link to="/">
          <i className="fas fa-shopping-bag fa-lg" />
        </Link>
      </div>
    </nav>
  );
}
