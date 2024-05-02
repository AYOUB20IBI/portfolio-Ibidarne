import CountUp from "react-countup";
import "./AboutFirst.css";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import DownloadCV from "./DownloadCV";
import SocialMedia from "./SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBriefcase, faCircleCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import WhatIDo from "../what-i-do/WhatIDo";
function AboutFirst() {
  const [counteron, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <section id="bsb-fact-pro-1-observer" style={{ marginBottom: "20px" }}>
          <div className="container">
            <div className="row gy-3 gy-md-5 gy-lg-0 align-items-center">
              <div className="col-12 col-lg-5">
                <h3 id="aboutme_title"
                  className=" text-light mb-2 mb-xl-3 text-uppercase"
                >
                  A Little Description About Me
                </h3>
                <p id="parag" className="mb-4 text-light mb-xl-5" >
                I'm Ayoub Ibidarne, a Full Stack developer based in Casablanca, 
                Morocco, proficient in both backend and frontend development. 
                Passionate about crafting WebApps and websites using the MERN Stack, 
                I'm dedicated to continuous improvement in both areas.
                </p>
                <DownloadCV />
                <SocialMedia />
              </div>
              <div className="col-12 col-lg-7">
                <div className="row justify-content-xl-end">
                  <div className="col-12 col-xl-11">
                    <div className="counter__skills">
                      <div className="col-12 col-md-6  col-sm-6">
                        <div className="counter">
                          <div className="counter-icon">
                            <i><FontAwesomeIcon icon={faAward}/></i>
                          </div>
                          <span className="counter-value">
                            {counteron && (
                              <CountUp
                                start={0}
                                end={1}
                                duration={3}
                                delay={0}
                              />
                            )}
                            +
                          </span>
                          <h3>Experience</h3>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-sm-6">
                        <div className="counter blue">
                          <div className="counter-icon">
                            <i><FontAwesomeIcon icon={faBriefcase}/></i>
                          </div>
                          <span className="counter-value">
                            {counteron && (
                              <CountUp
                                start={0}
                                end={10}
                                duration={3}
                                delay={0}
                              />
                            )}
                            +
                          </span>
                          <h3>PROJECTS</h3>
                        </div>
                      </div>
                      <div className="col-12 col-md-6  col-sm-6">
                        <div className="counter">
                          <div className="counter-icon">
                            <i><FontAwesomeIcon icon={faCircleCheck}/></i>
                          </div>
                          <span className="counter-value">
                            {counteron && (
                              <CountUp
                                start={0}
                                end={9}
                                duration={3}
                                delay={0}
                              />
                            )}
                            +
                          </span>
                          <h3>COMPLETED PROJECTS</h3>
                        </div>
                      </div>
                      <div className="col-12 col-md-6  col-sm-6">
                        <div className="counter blue">
                          <div className="counter-icon">
                            <i><FontAwesomeIcon icon={faStar}/></i>
                          </div>
                          <span className="counter-value">
                            {counteron && (
                              <CountUp
                                start={0}
                                end={20}
                                duration={3}
                                delay={0}
                              />
                            )}
                            +
                          </span>
                          <h3>Skills</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <WhatIDo/>
      </ScrollTrigger>
    </>
  );
}

export default AboutFirst;
