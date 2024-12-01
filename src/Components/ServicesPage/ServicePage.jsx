import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ServicePage.css";
import Testimonial from "./Testimonials/Testimonials";
import Services1 from "../ServicesPage/Services1/Services1";
const ServicePage = () => {
  return (
    <div>
      <Navbar />
      <div className="data">
        <Services1 />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
