import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useStore } from "../../context/StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faEnvelope, faFileInvoice, faGraduationCap, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const { activePath, setPath } = useStore();
  const location = useLocation();
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>

      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => {
                  setPath("home");
                }}
                className={
                  activePath == "home"  || location.pathname === "/"
                    ? "nav-link scrollto active"
                    : "nav-link scrollto"
                }
              >
                <i><FontAwesomeIcon icon={faHouse}/></i> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  setPath("about");
                }}
                className={
                  activePath == "about"  || location.pathname === "/about"
                    ? "nav-link scrollto active"
                    : "nav-link scrollto"
                }
              >
                <i><FontAwesomeIcon icon={faUser}/></i> <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                onClick={() => {
                  setPath("education");
                }}
                className={
                  activePath == "education"  || location.pathname === "/education"
                    ? "nav-link scrollto active"
                    : "nav-link scrollto"
                }
              >
                <i><FontAwesomeIcon icon={faGraduationCap}/></i> <span>Experience & Education </span>
              </Link>
            </li>

            <li>
              <Link
                to="/skills"
                onClick={() => {
                  setPath("skills");
                }}
                className={
                  activePath == "skills"  || location.pathname === "/skills"
                    ? "nav-link scrollto active"
                    : "nav-link scrollto"
                }
              >
                <i><FontAwesomeIcon icon={faFileInvoice}/></i> <span>Skills</span>
              </Link>
            </li>

            <li>
              <Link
                to="/portfolio"
                onClick={() => {
                  setPath("portfolio");
                }}
                className={
                  activePath == "portfolio"  || location.pathname === "/portfolio"
                    ? "nav-link scrollto active"
                    : "nav-link scrollto"
                }
              >
                <i><FontAwesomeIcon icon={faBriefcase}/></i>
                <span>Projects</span>
              </Link>
            </li>
            
            <li>
              <Link
                to="/contact"
                onClick={() => {
                  setPath("contact");
                }}
                className={
                  activePath == "contact"  || location.pathname === "/contact"
                    ? "nav-link scrollto active"
                    : "nav-link scrollto"
                }
              >
                <i><FontAwesomeIcon icon={faEnvelope}/></i>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
