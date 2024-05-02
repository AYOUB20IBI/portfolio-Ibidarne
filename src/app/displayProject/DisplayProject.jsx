import { Link, useParams } from "react-router-dom";
import "./DisplayProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
  faCheck,
  faEye,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import dataProjects from "../../../public/data/data";
import { useEffect, useState } from "react";
import { useStore } from "../../context/StoreContext";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
export default function DisplayProject() {
  const [listProjects, setListProjects] = useState(dataProjects);
  const [project, setProject] = useState({});
  const { id } = useParams();
  const { setPath } = useStore();

  useEffect(() => {
    setPath("portfolio");
  }),
    [];

  useEffect(() => {
    if (id) {
      setProject(listProjects.find((item) => item.id === Number(id)));
    }
  }, [id]);
  return (
    <>
      <section className="section-header-two">
        <div className="col-12">
          <div className="title_section_about">
            <h1>
              View <span>Project</span> Information
            </h1>
          </div>
        </div>
        <div className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9" id="part2">
                <div className="mb-2">
                    <Link to="/portfolio" className="text-light"><span className="me-3"><FontAwesomeIcon icon={faArrowLeft}/></span> Back</Link>
                </div>
                <div>
                  <img className="thumplainer" src={project.poster} alt="" />
                </div>
                <h1 className="mb-4 mt-4" id="title">
                  {project.title}
                </h1>
                <p>{project.description}</p>
                <h2 className="mb-4">Website Information</h2>
                <div className="container-fluid" id="mini-part2">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 mb-4">
                      <ul className="p-0">
                        <li>
                          <i className="me-3">
                            <FontAwesomeIcon icon={faCheck} />
                          </i>
                          <span>Technologies Used</span>
                          <ul>
                            {project.language &&
                              project.language.map((item, index) => (
                                <li key={index}>
                                  <sapn className="sub__list me-2">
                                    <FontAwesomeIcon icon={faHandPointRight} />
                                  </sapn>
                                  {item}
                                </li>
                              ))}
                          </ul>
                        </li>
                        <li>
                          <i className="me-3">
                            <FontAwesomeIcon icon={faCheck} />
                          </i>
                          <span>Advantages</span>
                          <ul>
                            {project.advantages &&
                              project.advantages.map((item, index) => (
                                <li key={index}>
                                  <sapn className="sub__list me-2">
                                    <FontAwesomeIcon icon={faHandPointRight} />
                                  </sapn>
                                  {item}
                                </li>
                              ))}
                          </ul>
                        </li>
                        <li>
                          <i className="me-3">
                            <FontAwesomeIcon icon={faCheck} />
                          </i>
                          <span>Developed By</span>
                          <ul>
                            <li>
                              <sapn className="sub__list me-2">
                                <FontAwesomeIcon icon={faHandPointRight} />
                              </sapn>
                              IBIDARNE AYOUB
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <h2 className="mb-4">Website Snapshot</h2>
                    <div className="mb-5">
                      <img
                        className="thumplainer2"
                        src={project.posterLive}
                        alt=""
                      />
                    </div>
                    <h2 className="mb-4">Visiting site</h2>
                    <div className="mb-5 d-flex justify-content-center align-items-center">
                      <Link to={project.link} target="_blank">
                        <button className="button">
                          <span className="button_lg">
                            <span className="button_sl"></span>
                            <div style={{ color: "#fff" }}>
                              <span className="button_text">
                                <i>
                                  <FontAwesomeIcon icon={faEye} />
                                </i>{" "}
                                LIVE DEMO
                              </span>
                            </div>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="row" id="note">
                    <div className="col">
                      <div className="">
                        <span>Note:</span>
                        <p className="text-light">
                          For a deeper dive into my projects and to see my code in action, 
                          I invite you to visit my <Link className="text-info fw-bold"><span ><FontAwesomeIcon icon={faGithub}/></span> GitHub</Link>. To stay updated on my professional 
                          journey and connect with me, please follow me on <Link className="text-info fw-bold"><span ><FontAwesomeIcon icon={faLinkedinIn}/></span> LinkedIn</Link>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
