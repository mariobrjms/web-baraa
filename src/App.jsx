import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPages from "./pages/FaqPages";
import SyaratKetenPages from "./pages/SyaratKetenPages";
import NavbarComponents from "./components/NavbarComponents";
import FooterComponents from "./components/FooterComponents";

function App() {
  return (
    <div>
      <NavbarComponents />

      <Routes>
        <Route path="/" Component={HomePages} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPages} />
        <Route path="/syaratketen" Component={SyaratKetenPages} />
      </Routes>
      <FooterComponents /> 
    </div>
  );
}

export default App;
