import React from "react";
import "./Product.scss";
import { NavLink } from "react-router-dom";

function Product({ item }) {
  return (
    <>
      <NavLink to={`/productdetail/${item.id}`} className="box">
        <div className="imgs">
          <img src={item.img} alt="" />
        </div>
        <h4>{item.title}</h4>
        <h6>Variant</h6>
        <span>${item.price}</span>
      </NavLink>
    </>
  );
}

export default Product;
