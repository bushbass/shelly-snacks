import React from "react";
import { Link } from "react-router-dom";
import shellySmiling from "../images/shelly-smiling-smaller.png";
import shoppingCartContext from "../shoppingCartContext";

const Header = () => {
  return (
    <shoppingCartContext.Consumer>
      {({ siteTitle, currentUser, cart }) => (
        <header>
          <div className="logo-title">{siteTitle}</div>
          <img
            className="logo-image"
            src={shellySmiling}
            alt="shelly the dog smiling"
          />
          <p className="good-dogs-brent">They're good snacks Brent!</p>
          <p className="good-dogs-brent">
            {currentUser ? `Welcome ${currentUser}` : null}
          </p>

          <nav>
            <div className="nav-item">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-item">
              <Link to="/about">About</Link>
            </div>
            <div className="nav-item">
              <Link to="/products">Products</Link>
            </div>
            <div className="nav-item">
              <Link to="/login">Login</Link>
            </div>
          </nav>
        </header>
      )}
    </shoppingCartContext.Consumer>
  );
};

export default Header;
