import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { StoreContext } from "./context/StoreContext";
import Layout from "./layout/Layout";
import Hero from "./app/hero/Hero";
import About from "./app/about/About";
import Portfolio from "./app/portfolio/Portfolio";
import Contact from "./app/contact/Contact";
import Skills from "./app/skills/Skills";
import Education from "./app/education/Education";
import NotFound from "./app/404/NotFound";
import DisplayProject from "./app/displayProject/DisplayProject";

function App() {
  return (
    <BrowserRouter>
      <StoreContext>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/display/:id" element={<DisplayProject />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </StoreContext>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
