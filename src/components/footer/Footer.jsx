import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="card">
            <img src="/imgs/footerLogo.png" alt="" />
            <div className="menu">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/categorypage"}>Category</NavLink>
              <NavLink to={"/productdetail"}>Product</NavLink>
              <NavLink to={"/contactpage"}>Contact</NavLink>
            </div>
          </div>
          <div className="row">
            <h6>2022 Relume. All right reserved.</h6>
            <div className="col">
              <h6>Privacy Policy</h6>
              <h6>Terms of Service</h6>
              <h6>Cookies Settings</h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
