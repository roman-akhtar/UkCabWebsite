import instagram from "../../assets/Icons/instagram.png";
import facebook from "../../assets/Icons/facebook-app-symbol.png";
import "../Footer/Footer.css";

import { Link } from "react-router-dom";

import Book_icon from "../../../src/assets/Icons/right-arrow.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer_wrapper">
            {/* First Column */}
            <div className="footer_info">
              <div className="info_contact">
                <span style={{ fontWeight: "700" }}>Aylestone Kings</span>

                <span>753A Aylestone Road LE2 8TG</span>
                <a href="src\assets\Terms.pdf">
                  <span className="terms">Terms & Conditions</span>
                </a>
              </div>
            </div>

            {/* Second Column */}
            <div className="footer_links">
              <h2>Socials</h2>
              <div className="social_btns">
                <a href="https://www.instagram.com/aylestone_kings?igsh=MWZsczVvNGI5dGtpMg==">
                  <div className="social_btns-btn">
                    <img src={instagram} alt="instagram-link" />
                  </div>
                </a>
                <a href="https://m.facebook.com/aylestone.taxis/">
                  <div className="social_btns-btn">
                    <img src={facebook} alt="facebook-link" />
                  </div>
                </a>
              </div>
              <Link to="/ContactPage">
                <button className="btn1">
                  <a href="#contact"></a>Book Now <img src={Book_icon} alt="" />
                </button>
              </Link>
            </div>

            {/* Forth Column */}
            <div className="footer_links">
              <h2>Contacts</h2>
              <span>0116 2338888</span>
              <span> 0116 2425260</span>
              <span> Info@aylestone-taxis.co.uk</span>
            </div>
          </div>
          <div className="c_right">
            <span className="copyright">
              All Rights Reserved 2024 | Aylestone Kings
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
