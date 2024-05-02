

import { Link } from "react-router-dom";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEye } from "@fortawesome/free-solid-svg-icons";
import {
  faBattleNet,
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faLaravel,
  faNodeJs,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import dataProjects from "../../../public/data/data";
import { useState } from "react";

export default function Portfolio() {
  const [projects, setProjects] = useState(dataProjects);
  const [activeButton, setActiveButton] = useState("all");
  const [loading,setLoading]=useState(false)


  const filterProjectsByType = (type) => {
    setLoading(true)
    setActiveButton(type);
    if (type === "all") {
      setTimeout(()=>{
        setLoading(false)
        setProjects(dataProjects);
      },[1000])
    } else {
      const filteredProjects = dataProjects.filter((project) =>
        project.type.includes(type)
      );
      console.log(filteredProjects);
      setTimeout(()=>{
        setLoading(false)
        setProjects(filteredProjects);
      },[1000])
      
    }
  };
  return (
    <section id="section__projects">
      <div className="col-12">
        <div className="title_section_about">
          <h1>
            My <span>Creative Portfolio</span> Section
          </h1>
        </div>
      </div>
      <div className="container">
        <div id="search__btn">
          <button
            className={activeButton === "all" ? "isActive" : ""}
            onClick={() => {
              filterProjectsByType("all");
            }}
          >
            All
          </button>
          <button
            className={activeButton === "html_css" ? "isActive" : ""}
            onClick={() => {
              filterProjectsByType("html_css");
            }}
          >
            <span className="me-1">
              <FontAwesomeIcon icon={faHtml5} />
            </span>{" "}
            Html &{" "}
            <span className="me-1">
              <FontAwesomeIcon icon={faCss3Alt} />
            </span>{" "}
            Css
          </button>
          <button
            className={activeButton === "Bootstrap" ? "isActive" : ""}
            onClick={() => {
              filterProjectsByType("Bootstrap");
            }}
          >
            <span className="me-1">
              <FontAwesomeIcon icon={faBootstrap} />
            </span>
            Bootstrap
          </button>
          <button
            className={activeButton === "JavaScript" ? "isActive" : ""}
            onClick={() => {
              filterProjectsByType("JavaScript");
            }}
          >
            <span className="me-1">
              <FontAwesomeIcon icon={faJs} />
            </span>
            JavaScript
          </button>
          <button
            className={activeButton === "php" ? "isActive" : ""}
            onClick={() => {
              filterProjectsByType("php");
            }}
          >
            <span className="me-1">
              <FontAwesomeIcon icon={faPhp} />
            </span>
            Php
          </button>
          <button
            className={activeButton === "reactjs" ? "isActive" : ""}
            onClick={() => {
              filterProjectsByType("reactjs");
            }}
          >
            <span className="me-1">
              <FontAwesomeIcon icon={faReact} />
            </span>
            React Js
          </button>
          <button
            className={activeButton === "nodejs" ? "isActive" : ""}
            onClick={() => {
              filterProjectsByType("nodejs");
            }}
          >
            <span className="me-1">
              <FontAwesomeIcon icon={faNodeJs} />
            </span>
            Node Js
          </button>
          <button
            className={activeButton === "Laravel" ? "isActive" : ""}
            onClick={() => {
              filterProjectsByType("Laravel");
            }}
          >
            <span className="me-1">
              <FontAwesomeIcon icon={faLaravel} />
            </span>
            Laravel
          </button>
          <button
            className={activeButton === "reactjs_Laravel" ? "isActive" : ""}
            onClick={() => {
              filterProjectsByType("reactjs_Laravel");
            }}
          >
            <span className="me-1">
              <FontAwesomeIcon icon={faReact} />
            </span>{" "}
            React Js &{" "}
            <span className="me-1">
              <FontAwesomeIcon icon={faLaravel} />
            </span>{" "}
            Laravel
          </button>
          <button
            className={activeButton === "reactjs_nodejs" ? "isActive" : ""}
            onClick={() => {
              filterProjectsByType("reactjs_nodejs");
            }}
          >
            <span className="me-1">
              <FontAwesomeIcon icon={faReact} />
            </span>{" "}
            React Js &{" "}
            <span className="me-1">
              <FontAwesomeIcon icon={faNodeJs} />
            </span>{" "}
            Node Js
          </button>
          
        </div>
        <div className="section__portfolio">
          {loading ?(
            <>
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            </>
          ):(
            <>
            
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <div className="card__project" key={index}>
                    <div className="card__header">
                      <Link to={`/portfolio/display/${project.id}`}>
                        <img
                          src={project.poster}
                          alt="card__image"
                          className="card__image"
                          width="600"
                        />
                      </Link>
                    </div>
                    <div className="card__body">
                      <span className="tag tag-blue">
                        <span className="me-2">
                          <FontAwesomeIcon icon={faBattleNet} />
                        </span>
                        Web Development
                      </span>
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <div id="technology__used">
                        {project.language.map((item,index)=>(
                          <button key={index} disabled>{item}</button>
                        ))}
                      </div>
                    </div>
                    <div className="card__footer">
                      <div>
                        <Link>
                          <FontAwesomeIcon icon={faEye} /> Live
                        </Link>
                      </div>
                      <div>
                        <Link to={`/portfolio/display/${project.id}`}>
                          Read More <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-light text-bold">Data Not Found.</p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
