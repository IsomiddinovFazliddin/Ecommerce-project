import React from "react";
import "./Contactpage.scss";
import { MdEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function Contactpage() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="info">
            <h2>Contact us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <form action="">
              <label htmlFor="">Name</label>
              <input type="text" required />
              <label htmlFor="">Email</label>
              <input type="email" required />
              <label htmlFor="">Message</label>
              <textarea
                placeholder="Type your message..."
                name=""
                id=""
              ></textarea>
              <div className="row">
                <input type="checkbox" />
                <span>I accept the Terms</span>
              </div>
              <button>Submit</button>
            </form>
          </div>
          <div className="imgs">
            <img src="/imgs/contactImg.png" alt="" />
          </div>
        </div>
      </div>

      <section className="blok">
        <div className="container">
          <div className="box">
            <MdEmail />
            <h4>Email</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
            <Link>hello@relume.io</Link>
          </div>
          <div className="box">
            <BsChatLeftTextFill />
            <h4>Live chat</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
            <Link>Start new chat</Link>
          </div>
          <div className="box">
            <FaPhoneAlt />
            <h4>Phone</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
            <Link>+1 (555) 000-0000</Link>
          </div>
          <div className="box">
            <IoLocationSharp />
            <h4>Office</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
            <NavLink>123 Sample St, Sydney NSW 2000 AU</NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactpage;
