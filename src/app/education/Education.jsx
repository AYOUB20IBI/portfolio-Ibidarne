import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styleEducation from "./Education.module.css";
import { faBriefcase, faCalendarDay, faGraduationCap, faPlus, faStar, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { faBattleNet } from "@fortawesome/free-brands-svg-icons";
function Education() {
  return (
    <>
      <div className="container" id={styleEducation.education}>
        <div className="col-12">
            <div className={styleEducation.title_section_education}>
              <h1>
                Experience <span>&</span> Education 
              </h1>
            </div>
        </div>
        <div className={`${styleEducation.timelineE}`}>
          <div
            className={`${styleEducation.container_education} ${styleEducation.left_container}`}
          >
            <div className={`${styleEducation.img_education}`}>
              <i>
                <FontAwesomeIcon icon={faBriefcase} />
              </i>
            </div>
            <div className={`${styleEducation.text_box}`}>
              <div className={`${styleEducation.text__top}`}>
                <h2><span className="me-1"><FontAwesomeIcon icon={faBattleNet}/></span> Traineeship.</h2>
              </div>
              <div className={`${styleEducation.text__bottom}`}>
                <small><span className="me-1"><FontAwesomeIcon icon={faCalendarDay}/></span> April 2024 - May 2024</small><br />
                <small><span className="me-1"><FontAwesomeIcon icon={faThumbTack}/></span>  BRIGHTEN CONSULTING</small>
                <p><small><span className="me-1"><FontAwesomeIcon icon={faPlus}/></span></small> Developing a website for the company to display its services.</p>
                <span
                  className={`${styleEducation.left_container_arrow}`}
                ></span>
              </div>
            </div>
          </div>

          <div
            className={`${styleEducation.container_education} ${styleEducation.rigth_container}`}
          >
            <div className={`${styleEducation.img_education}`}>
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div className={`${styleEducation.text_box}`}>
              <div className={`${styleEducation.text__top}`}>
                <h2><span className="me-1"><FontAwesomeIcon icon={faBattleNet}/></span> Specialized Technician.</h2>
              </div>
              <div className={`${styleEducation.text__bottom}`}>
                <small><span className="me-1"><FontAwesomeIcon icon={faCalendarDay}/></span> September 2022 - Present</small><br />
                <small><span className="me-1"><FontAwesomeIcon icon={faThumbTack}/></span> ISTA Sidi Moumen</small>
                <p>
                    <small><span className="me-1"><FontAwesomeIcon icon={faPlus}/></span></small> Technicien Spécialisé en Développement Digital.
                </p>
                <span
                  className={`${styleEducation.rigth_container_arrow}`}
                ></span>
              </div>
            </div>
          </div>

          <div
            className={`${styleEducation.container_education} ${styleEducation.left_container}`}
          >
            <div className={`${styleEducation.img_education}`}>
              <i>
                <FontAwesomeIcon icon={faGraduationCap} />
              </i>
            </div>
            <div className={`${styleEducation.text_box}`}>
              <div className={`${styleEducation.text__top}`}>
                <h2><span className="me-1"><FontAwesomeIcon icon={faBattleNet}/></span> Bachelor's Degree.</h2>
              </div>
              <div className={`${styleEducation.text__bottom}`}>
                <small><span className="me-1"><FontAwesomeIcon icon={faCalendarDay}/></span> September 2021 - June 2022</small><br />
                <small><span className="me-1"><FontAwesomeIcon icon={faThumbTack}/></span> High school MOSTAFA LAMAANI</small>
                <p><small><span className="me-1"><FontAwesomeIcon icon={faPlus}/></span></small> I obtained a baccalaureate in the Department of Physics.</p>
                <span
                  className={`${styleEducation.left_container_arrow}`}
                ></span>
              </div>
            </div>
          </div>

          <div
            className={`${styleEducation.container_education} ${styleEducation.rigth_container}`}
          >
            <div
              className={`${styleEducation.img_education}`}
              style={{ background: "#00ff0a" }}
            >
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
            </div>
            <div className={`${styleEducation.text_box} border-0`}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
