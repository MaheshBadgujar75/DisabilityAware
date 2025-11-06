import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/AboutUs";
import ContactForm from "../pages/ContactForm";
import Disabilities from "../pages/Disabilities/Disabilities";
// import DisabilityDetail from "../pages/DisabilityDetail";
import Schemes from "../pages/Schemes/Schemes";
import SchemeDetail from "../pages/Schemes/SchemeDetailsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactForm />} />
      <Route path="/disabilities" element={<Disabilities />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/schemes/:id" element={<SchemeDetail />} />
      {/* <Route path="/disabilities/:id" element={<DisabilityDetail />} />
      
      */}
    </Routes>
  );
}
