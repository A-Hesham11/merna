import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import BrandingDesigns from "./pages/BrandingDesigns";
import SocialMediaDesigns from "./pages/SocialMediaDesigns";
import ProjectDetails from "./pages/ProjectDetails";
import DigitalProductsDetails from "./pages/DigitalProductsDetails";
import Process from "./pages/Process";
import ContactUs from "./pages/ContactUs";
import DigitalProductsPage from "./pages/DigitalProductsPage";
import DigitalProductDetails from "./pages/DigitalProductDetails";
import "aos/dist/aos.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/branding" element={<BrandingDesigns />} />
        <Route path="/SocialMedia" element={<SocialMediaDesigns />} />
        <Route path="/projectDetails" element={<ProjectDetails />} />
        <Route path="/digitalProducts" element={<DigitalProductsPage />} />
        <Route path="/digitalProducts/details" element={<DigitalProductsDetails />} />
        <Route path="/ProductDetails" element={<DigitalProductDetails />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
