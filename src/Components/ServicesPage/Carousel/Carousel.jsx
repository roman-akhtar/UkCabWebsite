import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";
import ChildSeat from "../../../assets/Icons/baby-car-seat.png";
import CooperateAccounts from "../../../assets/Icons/corporate.png";
import Disabled from "../../../assets/Icons/disabled.png";
import EnvoirmentCom from "../../../assets/Icons/environment.png";
import EventCoordination from "../../../assets/Icons/Event.png";
import Luggage from "../../../assets/icons/travel-luggage.png";
import MeetNGreet from "../../../assets/Icons/business-meeting.png";
import MultiPassenger from "../../../assets/Icons/passengers.png";
import MultiplePayments from "../../../assets/Icons/payment-method.png";
import QuickResponse from "../../../assets/Icons/efficiency.png";
import RealTime from "../../../assets/Icons/fast.png";

const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="carousel-card">
            <div className="carousel-wrapper">
              <div className="carousel-img">
                <img src={QuickResponse} alt="" />
              </div>
              <h2>Quick Response Times</h2>
              <p className="description">
                Known for prompt pick-ups and efficient routes to get you to
                your destination on time.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-card">
            <div className="carousel-wrapper">
              <div className="carousel-img">
                <img src={MultiplePayments} alt="" />
              </div>
              <h2>Multiple Payment Options</h2>
              <p className="description">
                Accepting various payment methods, including cash, card, and
                online payments.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-card">
            <div className="carousel-wrapper">
              <div className="carousel-img">
                <img src={CooperateAccounts} alt="" />
              </div>
              <h2>Corporate Accounts</h2>
              <p className="description">
                Offering tailored services for businesses with the option to set
                up corporate accounts for regular travel needs.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-card">
            <div className="carousel-wrapper">
              <div className="carousel-img">
                <img src={MeetNGreet} alt="" />
              </div>
              <h2>Meet and Greet Service</h2>
              <p className="description">
                Providing personalized meet and greet services, especially
                useful for airport pick-ups.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-card">
            <div className="carousel-wrapper">
              <div className="carousel-img">
                <img src={Disabled} alt="" />
              </div>
              <h2>Disabled Access Vehicles</h2>
              <p className="description">
                Offering vehicles that are equipped to accommodate passengers
                with mobility challenges.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-card">
            <div className="carousel-wrapper">
              <div className="carousel-img">
                <img src={Luggage} alt="" />
              </div>
              <h2>Luggage Assistance</h2>
              <p className="description">
                Drivers are available to help with loading and unloading
                luggage, ensuring a hassle-free experience.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-card">
            <div className="carousel-wrapper">
              <div className="carousel-img">
                <img src={ChildSeat} alt="" />
              </div>
              <h2>Child Seat Availability</h2>
              <p className="description">
                Providing child seats upon request to ensure the safety of young
                passengers.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-card">
            <div className="carousel-wrapper">
              <div className="carousel-img">
                <img src={RealTime} alt="" />
              </div>
              <h2>Real-Time Tracking</h2>
              <p className="description">
                Utilizing technology to allow customers to track their taxi in
                real-time.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-card">
            <div className="carousel-wrapper">
              <div className="carousel-img">
                <img src={EnvoirmentCom} alt="" />
              </div>
              <h2>Environmental Commitment</h2>
              <p className="description">
                Operating eco-friendly vehicles to reduce the carbon footprint.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-card">
            <div className="carousel-wrapper">
              <div className="carousel-img">
                <img src={MultiPassenger} alt="" />
              </div>
              <h2>Multi-Passenger Vehicles</h2>
              <p className="description">
                Offering larger vehicles for group travel, such as minibuses and
                people carriers
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-card">
            <div className="carousel-wrapper">
              <div className="carousel-img">
                <img src={EventCoordination} alt="" />
              </div>
              <h2>Event Coordination</h2>
              <p className="description">
                Assisting with the coordination of transportation for large
                groups during events, ensuring everyone arrives on time and
                together.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

// const Carousel = () => {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     autoplay: true,
//     speed: 1000,
//     autoplaySpeed: 3000,
//     slidesToScroll: 1,
//     dots: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <div className="carousel-card">
//             <div className="carousel-wrapper">
//               <div className="carousel-img">
//                 <img src={QuickResponse} alt="" />
//               </div>
//               <h2>Quick Response Times</h2>
//               <p>
//                 Known for prompt pick-ups and efficient routes to get you to
//                 your destination on time.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="carousel-card">
//             <div className="carousel-wrapper">
//               <div className="carousel-img">
//                 <img src={MultiplePayments} alt="" />
//               </div>
//               <h2>Multiple Payment Options</h2>
//               <p>
//                 Accepting various payment methods, including cash, card, and
//                 online payments.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="carousel-card">
//             <div className="carousel-wrapper">
//               <div className="carousel-img">
//                 <img src={CooperateAccounts} alt="" />
//               </div>
//               <h2>Corporate Accounts</h2>
//               <p>
//                 Offering tailored services for businesses with the option to set
//                 up corporate accounts for regular travel needs.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="carousel-card">
//             <div className="carousel-wrapper">
//               <div className="carousel-img">
//                 <img src={MeetNGreet} alt="" />
//               </div>
//               <h2>Meet and Greet Service</h2>
//               <p>
//                 Providing personalized meet and greet services, especially
//                 useful for airport pick-ups.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="carousel-card">
//             <div className="carousel-wrapper">
//               <div className="carousel-img">
//                 <img src={Disabled} alt="" />
//               </div>
//               <h2>Disabled Access Vehicles</h2>
//               <p>
//                 Offering vehicles that are equipped to accommodate passengers
//                 with mobility challenges.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="carousel-card">
//             <div className="carousel-wrapper">
//               <div className="carousel-img">
//                 <img src={Luggage} alt="" />
//               </div>
//               <h2>Luggage Assistance</h2>
//               <p>
//                 Drivers are available to help with loading and unloading
//                 luggage, ensuring a hassle-free experience.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="carousel-card">
//             <div className="carousel-wrapper">
//               <div className="carousel-img">
//                 <img src={ChildSeat} alt="" />
//               </div>
//               <h2>Child Seat Availability</h2>
//               <p>
//                 Providing child seats upon request to ensure the safety of young
//                 passengers.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="carousel-card">
//             <div className="carousel-wrapper">
//               <div className="carousel-img">
//                 <img src={RealTime} alt="" />
//               </div>
//               <h2>Real-Time Tracking</h2>
//               <p>
//                 Utilizing technology to allow customers to track their taxi in
//                 real-time.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="carousel-card">
//             <div className="carousel-wrapper">
//               <div className="carousel-img">
//                 <img src={EnvoirmentCom} alt="" />
//               </div>
//               <h2>Environmental Commitment</h2>
//               <p>
//                 Operating eco-friendly vehicles to reduce the carbon footprint.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="carousel-card">
//             <div className="carousel-wrapper">
//               <div className="carousel-img">
//                 <img src={MultiPassenger} alt="" />
//               </div>
//               <h2>Multi-Passenger Vehicles</h2>
//               <p>
//                 Offering larger vehicles for group travel, such as minibuses and
//                 people carriers
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="carousel-card">
//             <div className="carousel-wrapper">
//               <div className="carousel-img">
//                 <img src={EventCoordination} alt="" />
//               </div>
//               <h2>Event Coordination</h2>
//               <p>
//                 Assisting with the coordination of transportation for large
//                 groups during events, ensuring everyone arrives on time and
//                 together.
//               </p>
//             </div>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;
