import React from "react";
import "./Categorypage.scss";
import "../../components/product/Product.scss";
import Product from "../../components/product/Product";
import { NavLink } from "react-router-dom";

function Categorypage({ data }) {
  return (
    <>
      <div className="category">
        <div className="hero">
          <div className="container">
            <h2>main category name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <section className="products-section">
          <div className="container">
            <div className="title">
              <h5>main category name</h5>
              <h2>sub category name</h2>
            </div>
            <div className="card">
              {data.map((item) => {
                return <Product item={item} />;
              })}
            </div>
          </div>
        </section>
        <section className="products-section">
          <div className="container">
            <div className="title">
              <h5>main category name</h5>
              <h2>sub category name</h2>
            </div>
            <div className="card">
              {data.map((item) => {
                return <Product item={item} />;
              })}
            </div>
          </div>
        </section>
        <section className="products-section">
          <div className="container">
            <div className="title">
              <h5>main category name</h5>
              <h2>sub category name</h2>
            </div>
            <div className="card">
              {data.map((item) => {
                return <Product item={item} />;
              })}
            </div>
          </div>
        </section>
        <section className="products-section">
          <div className="container">
            <div className="title">
              <h5>main category name</h5>
              <h2>sub category name</h2>
            </div>
            <div className="card">
              {data.map((item) => {
                return <Product item={item} />;
              })}
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <h2>
              Medium length heading goes <br /> here
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              nisi ipsam, voluptatem in dolore ratione?
            </p>
            <form action="">
              <input type="email" placeholder="Enter your email" required />
              <button>sign up</button>
            </form>
            <h6>
              By clicking Sign Up you're confirmimg that you agree with our{" "}
              <NavLink>Terms and Conditions</NavLink>
            </h6>
          </div>
        </section>
      </div>
    </>
  );
}

export default Categorypage;
