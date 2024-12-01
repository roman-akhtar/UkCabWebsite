import React from "react";
import "./ContactPage.css";
import Mail_icon from "../../assets/Icons/mail-icon.png";
import Phone_icon from "../../assets/Icons/phone-icon.png";
import Location_icon from "../../assets/Icons/location-icon.png";
import White_arrow from "../../assets/Icons/white-arrow.png";
import Whatsapp_icon from "../../assets/Icons/whatsapp.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "86e813b7-0d46-4182-916a-13e43a250bcd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="contact-page">
        <Navbar />
        <div className="contact" id="contact">
          <div className="contact-col contact_info">
            <h4>Contact Us</h4>
            <h3>
              Get in touch <img src={Mail_icon} alt="" />
            </h3>
            <p>
              Feel free to reach out through our contact information below, as
              we strive to provide exceptional service to our customers.
            </p>
            <ul>
              <li>
                <a href="tell"></a>
                <button className="btn1">
                  <a href="https://aylestonekings.webbooker.icabbi.com/">
                    Book Online
                    <img
                      src={Phone_icon}
                      alt="visit link http://icab.bi/Aylestonetaxi"
                    />
                  </a>
                </button>
              </li>

              <li>
                <a href="tell"></a>
                <button className="btn1">
                  <a href="tel: 0116 2338888">
                    Call 0116 2338888
                    <img src={Phone_icon} alt="Call 0116 2425260" />
                  </a>
                </button>
              </li>

              <li>
                <button className="btn1">
                  <a href="tel: 0116 2425260">
                    Call 0116 2425260
                    <img src={Phone_icon} alt="Call 0116 2425260" />
                  </a>
                </button>
              </li>
              <li>
                <button className="btn1">
                  <a href="https://wa.me/+447535855786">
                    Whatsapp
                    <img src={Whatsapp_icon} alt="+447535855786" />
                  </a>
                </button>
              </li>
              <li className="address">
                <img src={Location_icon} alt="" />
                Aylestone Kings
                <br />
                753A Aylestone Road, Leicester, United Kingdom
              </li>
            </ul>
          </div>

          <div className="contact-col contact_form">
            <form onSubmit={onSubmit}>
              <label>Your Name </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
              <label>Phone Number </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Mobile Number"
                required
              />
              <label>Write Your Message Here </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Enter Your Message"
                required
              ></textarea>
              <button type="submit" className="btn1 dark-btn">
                Submit Now <img src={White_arrow} alt="" />
              </button>
            </form>

            <span>{result}</span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
