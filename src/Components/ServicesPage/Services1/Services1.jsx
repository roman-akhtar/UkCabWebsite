import React from "react";
import "./Services1.css";
import about_img from "../../../assets/Pictures/street.jpg";
import { Link } from "react-router-dom";
import Book_icon from "../../../assets/icons/right-arrow.png";

const Services1 = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>

      <div className="about-right divs">
        <h3 className="topToBottom">-SERVICES-</h3>
        <p className="topToBottom">
          We Provide safety to our customers. We believe in safe, secure travel
          experience and many more services.
        </p>
        <h3 className="leftToRight">Ride in Comfort and Style!</h3>
        <p>
          -Experience top-notch transportation with our reliable cab services.
          Whether it's a quick trip across town or a ride to the airport, we
          have got you covered!
        </p>
        <h3 className="leftToRight">Your Journey, Our Priority</h3>
        <p className="rightToLeft">
          -Enjoy safe, punctual, and friendly service with our professional
          drivers. We prioritize your comfort and satisfaction every mile of the
          way.
        </p>
        <h3 className="leftToRight">Affordable Rates, Exceptional Service</h3>
        <p className="rightToLeft">
          -Get the best value for your money! Our competitive rates ensure you
          can travel without breaking the bank.
        </p>
        <h3 className="leftToRight">24/7 Availability</h3>
        <p className="rightToLeft">
          -Need a ride at any hour? We are here for you 24/7. Just a call or
          click away, we make getting around hassle-free, day or night!
        </p>
        <h3 className="leftToRight">Book Your Ride NOW!</h3>
        <p className="rightToLeft">
          -Join our growing list of satisfied customers. Book your cab with us
          now and enjoy a smooth, stress-free ride!
        </p>
        <Link to="/ContactPage">
          <button className="btn1">
            <a href="#contact"></a>Book Now <img src={Book_icon} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services1;
