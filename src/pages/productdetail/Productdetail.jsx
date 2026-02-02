import React, { useState } from "react";
import "./Productdetail.scss";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

function Productdetail({ data }) {
  const { id } = useParams();

  const filterData = data.find((item) => item.id == Number(id));

  const [mainImg, setMainImg] = useState(filterData.img);
  const [number, setNumber] = useState(1);
  return (
    <>
      <div className="productDetail">
        <div className="container">
          <div className="title">
            <span>Category</span>
            <IoIosArrowForward />
            <span>Product name</span>
          </div>
          <div className="productCard">
            <div className="imgsCard">
              <div className="smalImgs">
                {filterData.imgs.map((item) => {
                  return (
                    <div className="imgs">
                      <img
                        onClick={() => {
                          setMainImg(item);
                        }}
                        src={item}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
              <div className="boxImg">
                <img src={mainImg} alt="" />
              </div>
            </div>
            <div className="infoCard">
              <h2>{filterData.title}</h2>
              <h3>${filterData.price}</h3>
              <div className="star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span>(3.5 stars) • 10 reviews</span>
              </div>
              <p>{filterData.desc}</p>
              <h4>Variant</h4>
              <input type="text" placeholder="Select" />
              <h4>Variant</h4>
              <div className="btns">
                <button onClick={() => setNumber(1)}>Option One</button>
                <button onClick={() => setNumber(2)}>Option Two</button>
                <button onClick={() => setNumber(3)}>Option Three</button>
              </div>
              <h4>Quantity</h4>
              <span className="number">{number}</span>
              <button className="add" onClick={() => {}}>
                Add To Cart
              </button>
              <button
                className="buy"
                onClick={() => {
                  alert("Xaridingiz uchun tashakkur");
                  setNumber(1);
                }}
              >
                Buy Now
              </button>
              <h6>Free shipping over $50</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productdetail;
