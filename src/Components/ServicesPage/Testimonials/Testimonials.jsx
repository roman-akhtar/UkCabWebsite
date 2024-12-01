import React, { useRef } from "react";
import "../Testimonials/Testimonials.css";
import Next_icon from "../../../assets/Icons/next-icon.png";
import Back_icon from "../../../assets/Icons/back-icon.png";
import User_1 from "../../../assets/Pictures/user-1.png";
import User_2 from "../../../assets/Pictures/user-2.png";
import User_3 from "../../../assets/Pictures/user-3.png";
import User_4 from "../../../assets/Pictures/user-4.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Title from "../../Home/Title/Title";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackrward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <>
      <Title subTitle="Testimonials" title="What our customers say" />
      <div className="testimonials" id="testimonials">
        <img
          src={Next_icon}
          alt=""
          className="next-btn"
          onClick={slideForward}
        />
        <img
          src={Back_icon}
          alt=""
          className="back-btn"
          onClick={slideBackrward}
        />

        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={User_1} alt="" />
                  <div>
                    <h3>Amelia</h3>
                    <span>Aylestone, UK</span>
                    <div>
                      <p>
                        Aylestone Kings is one of the best travel coompanies, I
                        have travelled with so far.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={User_2} alt="" />
                  <div>
                    <h3>Arthur</h3>
                    <span>Aylestone, UK</span>
                    <div>
                      <p>
                        Choosing Aylestone Kings for transportation was a great
                        decision. Travel was safe and secure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={User_3} alt="" />
                  <div>
                    <h3>Freya</h3>
                    <span>Aylestone, UK</span>
                    <div>
                      <p>
                        It was a great experience travelling with Aylestone
                        Kings. The driver was very friendly and respecting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={User_4} alt="" />
                  <div>
                    <h3>George</h3>
                    <span>Aylestone, UK</span>
                    <div>
                      <p>
                        Travelling with Aylestone Kings feels like travelling in
                        own vehicle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
