import React from "react";
import "./Homepage.scss";
import Product from "../../components/product/Product";
import "../../components/product/Product.scss";
import { useParams } from "react-router-dom";

function Homepage({ data }) {
  return (
    <>
      <div className="homeHero">
        <div className="container">
          <div className="info">
            <h1>Medium length hero headline goes here</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <button>Start Looking</button>
          </div>
          <div className="image">
            <img src="/imgs/heroImg.png" alt="" />
          </div>
        </div>
      </div>

      <section className="product-section">
        <div className="container">
          <div className="title">
            <h5>TRANDING</h5>
            <h2>Tranding Products</h2>
            <div className="row">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <button>View all</button>
            </div>
          </div>
          <div className="card">
            {data.map((item) => {
              return <Product item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
