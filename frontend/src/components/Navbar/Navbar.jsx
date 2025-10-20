import React, { useState } from "react";
import "./Navbar.css";
import all_product from "../assets/Frontend_Assets/all_product.js";
import data_product from "../assets/Frontend_Assets/data.js";

import logo from "../assets/Frontend_Assets/logo.png";
import cart_icon from "../assets/Frontend_Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState('shop');




  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
          <li onClick={()}>Shop <hr /></li>
          <li onClick={()}>Men</li>
          <li onClick={()}>Woman</li>
          <li onClick={()}>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
