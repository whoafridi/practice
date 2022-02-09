import React from "react";
import "./NavBar.css";

const NavBar = ({ cart }) => {
  return (
    <nav>
      <div className="nav_box">
      <div>
      <span className="nav">Home</span>
      <span className="nav">Products</span>
      <span className="nav">Services</span>
      <span className="nav">About</span>
      </div>
        <span className="nav_color">
          <i className="fas fa-cart-plus">
              {cart.length}
          </i>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
