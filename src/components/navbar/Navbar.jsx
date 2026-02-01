import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <img src="/imgs/logo.png" alt="" />
          <div className="menu">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/categorypage"}>Category</NavLink>
            <NavLink to={"/productdetail"}>Product</NavLink>
            <NavLink to={"/contactpage"}>Contact</NavLink>
            <button>
              Cart <span>0</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
