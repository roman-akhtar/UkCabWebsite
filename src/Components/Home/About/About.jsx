import React from "react";
import "./About.css";
import about_logo from "../../../assets/Pictures/About1.jpeg";
import download_image from "../../../assets/Pictures/online-taxi-booking.png";
import download_icon from "../../../assets/Icons/playstore.png";

import { Link } from "react-router-dom";

import Book_icon from "../../../assets/icons/right-arrow.png";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about-text" id="About-Us">
          <h1>About Us</h1>
        </div>
        <div className="about divs">
          <div className="about_left  ">
            <img className="about_img" src={about_logo} alt="" />
          </div>
          <div className="about_right divs">
            <h3>Aylestone Kings</h3>
            <h1>Smooth Rides, Reliable Service</h1>

            <p>
              At Aylestone, we are dedicated to provide safe, reliable, and
              efficient transportation solutions, ensuring every journey is
              comfortable and punctual. With our team of experienced drivers and
              a commitment to exceptional service, we make reaching your
              destination effortless.
            </p>
            <p>
              Our professional drivers and modern fleet guarantee you arrive
              safely and on time, every time. Experience the difference with our
              unwavering focus on outstanding customer care and reliability.
            </p>
            <Link to="/ContactPage">
              <button className="btn1">
                <a href="#contact"></a>Book Now <img src={Book_icon} alt="" />
              </button>
            </Link>
          </div>
        </div>
        {/* Second */}

        <div className="about  divs" id="About-Us">
          <div className="about_left divs">
            <h1>Download Our App!</h1>
            <p>
              You can conveniently access our app on the Play Store or App
              Store, allowing you to effortlessly book a ride. Additionally, our
              app offers a pre-booking feature to help you plan your future
              journeys with ease.
            </p>

            <div className="download">
              <a href="https://play.google.com/store/apps/details?id=co.uk.aylestone.taxis">
                <button className="btn1">
                  Download Now
                  <img className="about_img" src={download_icon} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="about_right download-img">
            <img className="about_img" src={download_image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
