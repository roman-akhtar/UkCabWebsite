import React from "react";
import "./Services.css";

//PICTURES
import image_1 from "../../../assets/Pictures/airport.jpg";
import image_2 from "../../../assets/Pictures/a4.jpg";
import image_3 from "../../../assets/Pictures/24.jpg";
// ICONS
import airport_icon from "../../../assets/Icons/airport.png";
import local_icon from "../../../assets/Icons/localization.png";
import time_icon from "../../../assets/Icons/fast.png";
const Services = () => {
  return (
    <div className="f-services">
      <div className="services">
        <div className="service divs">
          <img className="image" src={image_1} alt="" />
          <div className="caption">
            <img src={airport_icon} alt="" />
            <p className="service_name">Airport Trasfers</p>
          </div>
        </div>
        <div className="service divs">
          <img className="image" src={image_2} alt="" />
          <div className="caption">
            <img src={local_icon} alt="" />
            <p className="service_name">Local and Long Distance journeys</p>
          </div>
        </div>
        <div className="service divs">
          <img className="image" src={image_3} alt="" />
          <div className="caption">
            <img src={time_icon} alt="" />
            <p className="service_name">24/7 Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
