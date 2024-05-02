
import { Link, useLocation } from "react-router-dom";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBriefcase,
  faEnvelope,
  faFileInvoice,
  faGraduationCap,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../context/StoreContext";
import { useEffect } from "react";


export default function Navigation() {
  const { activePath, setPath } = useStore();
  const location = useLocation();
  useEffect(() => {
    const handleClickOutside = (event) => {
      const fabCheckbox = document.getElementById('fabCheckbox');
      if (fabCheckbox && !fabCheckbox.contains(event.target)) {
        fabCheckbox.checked = false;
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  return (
    <>
      <div className="fab_wrapper">
        <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
        <label className="fab" htmlFor="fabCheckbox">
          <span className="fab-dots-menu"><FontAwesomeIcon icon={faBars}/></span>
          <span className="fab-dots fab-dots-1"></span>
          <span className="fab-dots fab-dots-2"></span>
          <span className="fab-dots fab-dots-3"></span>
        </label>
        <div className="fab-wheel">
          <Link
            to="/"
            onClick={() => {
              setPath("home");
            }}
            className={
              activePath == "home" || location.pathname === "/"
                ? "fab-action fab-action-1 isActive"
                : "fab-action fab-action-1"
            }
          >
            <i>
              <FontAwesomeIcon icon={faHouse} />
            </i>
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setPath("about");
            }}
            className={
              activePath == "about" || location.pathname === "/about"
                ? "fab-action fab-action-2 isActive"
                : "fab-action fab-action-2"
            }
          >
            <i>
              <FontAwesomeIcon icon={faUser} />
            </i>
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              setPath("contact");
            }}
            className={
              activePath == "contact" || location.pathname === "/contact"
                ? "fab-action fab-action-3 isActive"
                : "fab-action fab-action-3"
            }
          >
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
          </Link>
          <Link
            to="/skills"
            onClick={() => {
              setPath("skills");
            }}
            className={
              activePath == "skills" || location.pathname === "/skills"
                ? "fab-action fab-action-4 isActive"
                : "fab-action fab-action-4"
            }
          >
            <i>
              <FontAwesomeIcon icon={faFileInvoice} />
            </i>
          </Link>
          <Link
            to="/portfolio"
            onClick={() => {
              setPath("portfolio");
            }}
            className={
              activePath == "portfolio" || location.pathname === "/portfolio"
                ? "fab-action fab-action-5 isActive"
                : "fab-action fab-action-5"
            }
          >
            <i>
              <FontAwesomeIcon icon={faBriefcase} />
            </i>
          </Link>
          <Link
            to="/education"
            onClick={() => {
              setPath("education");
            }}
            className={
              activePath == "education" || location.pathname === "/education"
                ? "fab-action fab-action-6 isActive"
                : "fab-action fab-action-6"
            }
          >
            <i>
              <FontAwesomeIcon icon={faGraduationCap} />
            </i>
          </Link>
        </div>
      </div>
    </>
  );
}
