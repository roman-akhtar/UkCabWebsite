import "./App.css";
import "./index.css";
import Home from "./Components/Home/Home";
import ServicePage from "./Components/ServicesPage/ServicePage";
import ContactPage from "./Components/ContactPage/ContactPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ServicePage" element={<ServicePage />}></Route>

          <Route path="/ContactPage" element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
