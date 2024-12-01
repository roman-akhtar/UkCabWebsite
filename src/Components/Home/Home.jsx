import "../../App.css";
import "../../index.css";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Home/Hero/Hero";
import Services from "../../Components/Home/Services/Services";
import Title from "../../Components/Home/Title/Title";
import About from "../../Components/Home/About/About";
import Footer from "../../Components/Footer/Footer";
import Carousel from "../ServicesPage/Carousel/Carousel";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Services" title="What We Offer" />
        <Services />

        <About />
        <h1>Why Us!</h1>
        <Carousel />
      </div>
      <Footer />
    </>
  );
}

export default Home;
