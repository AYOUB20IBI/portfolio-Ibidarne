
import { useEffect, useState } from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faLaravel,
  faNodeJs,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud, faCode, faDatabase, faFileExcel, faFilePowerpoint, faFileWord, faSquarePollVertical, faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import ScrollTrigger from "react-scroll-trigger";

const skillsData = [
  {
    name: "HTML",
    icon: faHtml5,
    percentage: 90,
    imageSrc: require("../../assets/images/icon/html.png"),
    type:'frontend'
  },
  {
    name: "CSS",
    icon: faCss3Alt,
    percentage: 75,
    imageSrc: require("../../assets/images/icon/css.png"),
    type:'frontend'
  },
  {
    name: "Bootstrap",
    icon: faBootstrap,
    percentage: 70,
    imageSrc: require("../../assets/images/icon/bootstrap.png"),
    type:'frontend'
  },
  {
    name: "JavaScript",
    icon: faJs,
    percentage: 75,
    imageSrc: require("../../assets/images/icon/js.png"),
    type:'frontend'
  },
  {
    name: "jQuery",
    icon: faJs,
    percentage: 74,
    imageSrc: require("../../assets/images/icon/jquery.png"),
    type:'frontend'
  },
  {
    name: "PHP",
    icon: faPhp,
    percentage: 70,
    imageSrc: require("../../assets/images/icon/php.png"),
    type:'backend'
  },
  {
    name: "MySQL",
    icon: faDatabase,
    percentage: 65,
    imageSrc: require("../../assets/images/icon/mysql.png"),
    type:'backend'
  },
  {
    name: "Laravel",
    icon: faLaravel,
    percentage: 80,
    imageSrc: require("../../assets/images/icon/laravel.png"),
    type:'backend'
  },
  {
    name: "React",
    icon: faReact,
    percentage: 80,
    imageSrc: require("../../assets/images/icon/reactjs.png"),
    type:'frontend'
  },
  {
    name: "Git",
    icon: faGitAlt,
    percentage: 60,
    imageSrc: require("../../assets/images/icon/git.png"),
    type: 'other'
  },
  {
    name: "GitHub",
    icon: faGithub,
    percentage: 75,
    imageSrc: require("../../assets/images/icon/github.png"),
    type: 'other'
  },
  {
    name: "Redux",
    icon: faReact,
    percentage: 50,
    imageSrc: require("../../assets/images/icon/redux.png"),
    type:'frontend'
  },
  {
    name: "SQL",
    icon: faDatabase,
    percentage: 65,
    imageSrc: require("../../assets/images/icon/sql.png"),
    type:'backend'
  },
  {
    name: "Excel",
    icon: faFileExcel,
    percentage: 60,
    imageSrc: require("../../assets/images/icon/excel.png"),
    type:'office'
  },
  {
    name: "UML",
    icon: faSquarePollVertical,
    percentage: 60,
    imageSrc: require("../../assets/images/icon/uml.png"),
    type: 'other'
  },
  {
    name: "MongoDB",
    icon: faNodeJs,
    percentage: 60,
    imageSrc: require("../../assets/images/icon/mongodb.png"),
    type:'backend'
  },
  {
    name: "PowerPoint",
    icon: faFilePowerpoint,
    percentage: 60,
    imageSrc: require("../../assets/images/icon/powerpoint.png"),
    type:'office'
  },
  {
    name: "Word",
    icon: faFileWord,
    percentage: 60,
    imageSrc: require("../../assets/images/icon/word.png"),
    type:'office'
  },
  {
    name: "Postman",
    icon: faCloud,
    percentage: 80,
    imageSrc: require("../../assets/images/icon/postman.png"),
    type: 'other'
  },
  {
    name: "RestAPI",
    icon: faCloud,
    percentage: 85,
    imageSrc: require("../../assets/images/icon/restapi.png"),
    type: 'other'
  },
  {
    name: "vsCode",
    icon: faCode,
    percentage: 90,
    imageSrc: require("../../assets/images/icon/vscode.png"),
    type: 'other'
  },
  {
    name: "Canva",
    icon: faSwatchbook,
    percentage: 55,
    imageSrc: require("../../assets/images/icon/canva.png"),
    type: 'design'
  },
  {
    name: "PosterMyWall",
    icon: faSwatchbook,
    percentage: 70,
    imageSrc: require("../../assets/images/icon/postermywall.jpg"),
    type: 'design'
  },
  {
    name: "NodeJs",
    icon: faNodeJs,
    percentage: 60,
    imageSrc: require("../../assets/images/icon/nodejs.png"),
    type:'backend'
  },
];

function Skills() {
  const [dataSkills, setDataSkills] = useState(
    skillsData.filter(skill => skill.type === 'frontend')
  );
  const [counteron, setCounterOn] = useState(false);

  useEffect(() => {
    const intervals = [];

    const handleProgress = (skill) => {
      const speed = 20;
      const progressEndValue = skill.percentage;
      let currentProgress = 0;

      const circularProgress = document.querySelector(
        `#circular-progress-${skill.name}`
      );

      const interval = setInterval(() => {
        currentProgress++;
        if (currentProgress <= progressEndValue) {
          circularProgress.style.background = `conic-gradient(var(--color1) ${
            currentProgress * 3.6
          }deg, #ededed 0deg)`;
        } else {
          clearInterval(interval);
        }
      }, speed);

      intervals.push(interval);
    };


    intervals.forEach((interval) => clearInterval(interval));

    dataSkills.forEach((skill) => {
      handleProgress(skill);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [dataSkills]);

  const filterSkillsByType = (type) => {
    if (type === 'all') {
      setDataSkills(skillsData); 
    } else {
      const filteredSkills = skillsData.filter(skill => skill.type === type);
      setDataSkills(filteredSkills);
    }
  }

  const [isActive,setIsActive]=useState('frontend')
  
  

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="skills">
          <div className="col-12">
            <div className="title_section_about">
              <h1>
                My <span>Skills</span>
              </h1>
            </div>
          </div>
          <div className="container">
            <div id="search__btn">
              <button  onClick={() => {
                filterSkillsByType('frontend')
                setIsActive('frontend')
              }} className={isActive === 'frontend' ? 'isActive' : ''}>Frontend</button>
              <button onClick={() => {
                filterSkillsByType('backend')
                setIsActive('backend')
              }} className={isActive === 'backend' ? 'isActive' : ''}>Backend</button>
              <button onClick={() => {
                filterSkillsByType('office')
                setIsActive('office')
              }} className={isActive === 'office' ? 'isActive' : ''}>Office</button>
              <button onClick={() => {
                filterSkillsByType('design')
                setIsActive('design')
              }} className={isActive === 'design' ? 'isActive' : ''}>Design</button>
              <button onClick={() => {
                filterSkillsByType('other')
                setIsActive('other')
              }} className={isActive === 'other' ? 'isActive' : ''}>Other Tools</button>
              <button onClick={() => {
                filterSkillsByType('all')
                setIsActive('all')
              }} className={isActive === 'all' ? 'isActive' : ''}>All</button>
            </div>
            <div className="body__skills">
              {dataSkills.map((skill, index) => (
                <div
                  id={`section_progresse-${skill.name}`}
                  className="m-2"
                  key={index}
                >
                  <div>
                    <div className="progresZ pink">
                      <div
                        id={`circular-progress-${skill.name}`}
                        className="circular-progress"
                      >
                        <span
                          id={`progress-value-${skill.name}`}
                          className="progress-value"
                        >
                          {skill.imageSrc && <img src={skill.imageSrc} />}
                        </span>
                      </div>
                    </div>
                    <div className="title_progress">
                      <span>
                        <i className="me-2">
                          <FontAwesomeIcon icon={skill.icon} />
                        </i>
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}

export default Skills;
