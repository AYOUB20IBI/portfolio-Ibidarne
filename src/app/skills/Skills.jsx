// import { useState } from "react";
// import "./Skills.css";
// import ScrollTrigger from "react-scroll-trigger";
// import CountUp from "react-countup";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBootstrap,
//   faCss3Alt,
//   faGitAlt,
//   faGithub,
//   faHtml5,
//   faJs,
//   faLaravel,
//   faPhp,
//   faReact,
// } from "@fortawesome/free-brands-svg-icons";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";
// function Skills() {
//   // const styleTi = {
//   //   fontSize: "2rem",
//   //   fontWeight: "700",
//   //   color: "#fff",
//   //   marginTop: "20px",
//   // };
//   const [counteron, setCounterOn] = useState(false);

//   return (
//     <>
//       <ScrollTrigger
//         onEnter={() => setCounterOn(true)}
//         onExit={() => setCounterOn(false)}
//       >
//         <div className="skills">
//           <div className="col-12">
//             {/* <h3
//               style={styleTi}
//               className="text-center text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600"
//             >
//               My Skills
//             </h3> */}
//             <div className="title_section_about">
//               <h1>
//                 MY <span>SKILLS</span>
//               </h1>
//             </div>
//           </div>
//           <div className="container">
//             <div id="search__btn">
//               <button className="isActive">Frontend</button>
//               <button>Backend</button>
//               <button>Other Tools</button>
//               <button>All</button>
//             </div>
//             <div className="row justify-content-center">
//               <div id="section_progresse" className=" col-md-2 col-sm-6 ">
//                 <div className="progresZ pink">
//                   <span className="progress-left">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <span className="progress-right">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <div className="progress-value">
//                     {/* {counteron && (
//                       <CountUp start={0} end={90} duration={3} delay={0} />
//                     )}
//                     % */}
//                     <img src={require('../../assets/images/icon/html.png')} alt="html" />
//                   </div>
//                 </div>
//                 <div className="title_progress">
//                   <span>
//                     <i className="me-2">
//                       <FontAwesomeIcon icon={faHtml5} />
//                     </i>
//                     HTML
//                   </span>
//                 </div>
//               </div>
//               <div id="section_progresse" className=" col-md-2 col-sm-6 ">
//                 <div className="progresZ pink">
//                   <span className="progress-left">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <span className="progress-right">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <div className="progress-value">
//                     {/* {counteron && (
//                       <CountUp start={0} end={75} duration={3} delay={0} />
//                     )}
//                     % */}
//                     <img src={require('../../assets/images/icon/css.png')} alt="css" />
//                   </div>
//                 </div>
//                 <div className="title_progress">
//                   <span>
//                     <i className="me-2">
//                       <FontAwesomeIcon icon={faCss3Alt} />
//                     </i>
//                     CSS
//                   </span>
//                 </div>
//               </div>
//               <div id="section_progresse" className=" col-md-2 col-sm-6 ">
//                 <div className="progresZ pink">
//                   <span className="progress-left">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <span className="progress-right">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <div className="progress-value">
//                     {counteron && (
//                       <CountUp start={0} end={60} duration={3} delay={0} />
//                     )}
//                     %
//                   </div>
//                 </div>
//                 <div className="title_progress">
//                   <span>
//                     <i className="me-2">
//                       <FontAwesomeIcon icon={faBootstrap} />
//                     </i>
//                     BOOTSTRAP
//                   </span>
//                 </div>
//               </div>
//               <div id="section_progresse" className=" col-md-2 col-sm-6 ">
//                 <div className="progresZ pink">
//                   <span className="progress-left">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <span className="progress-right">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <div className="progress-value">
//                     {/* {counteron && (
//                       <CountUp start={0} end={70} duration={3} delay={0} />
//                     )}
//                     % */}
//                     <img src={require('../../assets/images/icon/js.png')} alt="js" />
//                   </div>
//                 </div>
//                 <div className="title_progress">
//                   <span>
//                     <i className="me-2">
//                       <FontAwesomeIcon icon={faJs} />
//                     </i>
//                     JAVASCRIPT
//                   </span>
//                 </div>
//               </div>
//               <div id="section_progresse" className=" col-md-2 col-sm-6 ">
//                 <div className="progresZ pink">
//                   <span className="progress-left">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <span className="progress-right">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <div className="progress-value">
//                     {counteron && (
//                       <CountUp start={0} end={74} duration={3} delay={0} />
//                     )}
//                     %
//                   </div>
//                 </div>
//                 <div className="title_progress">
//                   <span>
//                     {" "}
//                     <i className="me-2">
//                       <FontAwesomeIcon icon={faJs} />
//                     </i>
//                     JQUERY
//                   </span>
//                 </div>
//               </div>
//               <div id="section_progresse" className=" col-md-2 col-sm-6 ">
//                 <div className="progresZ pink">
//                   <span className="progress-left">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <span className="progress-right">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <div className="progress-value">
//                     {counteron && (
//                       <CountUp start={0} end={65} duration={3} delay={0} />
//                     )}
//                     %
//                   </div>
//                 </div>
//                 <div className="title_progress">
//                   <span>
//                     {" "}
//                     <i className="me-2">
//                       <FontAwesomeIcon icon={faPhp} />
//                     </i>{" "}
//                     PHP
//                   </span>
//                 </div>
//               </div>
//               <div id="section_progresse" className=" col-md-2 col-sm-6 ">
//                 <div className="progresZ pink">
//                   <span className="progress-left">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <span className="progress-right">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <div className="progress-value">
//                     {counteron && (
//                       <CountUp start={0} end={65} duration={3} delay={0} />
//                     )}
//                     %
//                   </div>
//                 </div>
//                 <div className="title_progress">
//                   <span>
//                     <i className="me-2">
//                       <FontAwesomeIcon icon={faDatabase} />
//                     </i>
//                     MYSQL
//                   </span>
//                 </div>
//               </div>
//               <div id="section_progresse" className=" col-md-2 col-sm-6 ">
//                 <div className="progresZ pink">
//                   <span className="progress-left">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <span className="progress-right">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <div className="progress-value">
//                     {counteron && (
//                       <CountUp start={0} end={80} duration={3} delay={0} />
//                     )}
//                     %
//                   </div>
//                 </div>
//                 <div className="title_progress">
//                   <span>
//                     <i className="me-2">
//                       <FontAwesomeIcon icon={faLaravel} />
//                     </i>
//                     LARAVEL
//                   </span>
//                 </div>
//               </div>
//               <div id="section_progresse" className=" col-md-2 col-sm-6 ">
//                 <div className="progresZ pink">
//                   <span className="progress-left">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <span className="progress-right">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <div className="progress-value">
//                     {counteron && (
//                       <CountUp start={0} end={75} duration={3} delay={0} />
//                     )}
//                     %
//                   </div>
//                 </div>
//                 <div className="title_progress">
//                   <span>
//                     <i className="me-2">
//                       <FontAwesomeIcon icon={faReact} />
//                     </i>
//                     REACT
//                   </span>
//                 </div>
//               </div>
//               <div id="section_progresse" className=" col-md-2 col-sm-6 ">
//                 <div className="progresZ pink">
//                   <span className="progress-left">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <span className="progress-right">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <div className="progress-value">
//                     {counteron && (
//                       <CountUp start={0} end={60} duration={3} delay={0} />
//                     )}
//                     %
//                   </div>
//                 </div>
//                 <div className="title_progress">
//                   <span>
//                     <i className="me-2">
//                       <FontAwesomeIcon icon={faGitAlt} />
//                     </i>{" "}
//                     GIT
//                   </span>
//                 </div>
//               </div>
//               <div id="section_progresse" className=" col-md-2 col-sm-6 ">
//                 <div className="progresZ pink">
//                   <span className="progress-left">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <span className="progress-right">
//                     <span className="progress-bar"></span>
//                   </span>
//                   <div className="progress-value">
//                     {counteron && (
//                       <CountUp start={0} end={60} duration={3} delay={0} />
//                     )}
//                     %
//                   </div>
//                 </div>
//                 <div className="title_progress">
//                   <span>
//                     <i className="me-2">
//                       <FontAwesomeIcon icon={faGithub} />
//                     </i>{" "}
//                     GITHUB
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </ScrollTrigger>
//     </>
//   );
// }

// export default Skills;

// import { useState } from "react";
// import "./hh.css";
// import ScrollTrigger from "react-scroll-trigger";
// import CountUp from "react-countup";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBootstrap,
//   faCss3Alt,
//   faGitAlt,
//   faGithub,
//   faHtml5,
//   faJs,
//   faLaravel,
//   faPhp,
//   faReact,
// } from "@fortawesome/free-brands-svg-icons";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// function Skills() {
//   const [counteron, setCounterOn] = useState(false);

//   const skillsData = [
//     { name: "HTML", level: 90 },
//     { name: "CSS", level: 75 },
//     { name: "Bootstrap", level: 60 },
//     { name: "JavaScript", level: 70 },
//     { name: "jQuery", level: 74 },
//     { name: "PHP", level: 65 },
//     { name: "MySQL", level: 65 },
//     { name: "Laravel", level: 80 },
//     { name: "React", level: 75 },
//     { name: "Git", level: 60 },
//     { name: "GitHub", level: 60 }
//   ];

//   let circularProgress = document.querySelector(".circular-progress"),
// progressValue = document.querySelector(".progress-value");

// let progressStartValue = 0,
// progressEndValue = 10,
// speed = 20;

// let progress = setInterval(() => {
// progressStartValue++;

// progressValue.textContent = `${progressStartValue}%`
// circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

// if(progressStartValue == progressEndValue){
//     clearInterval(progress);
// }
// }, speed);

//   return (
//     <>
//       <ScrollTrigger
//         onEnter={() => setCounterOn(true)}
//         onExit={() => setCounterOn(false)}
//       >
//         <div className="skills">
//           {/* {skillsData.map((skill, index) => (
//             <div id="section_progresse" className="col-md-2 col-sm-6" key={index}>
//               <div className="progresZ pink">
//                 <span className="progress-left">
//                   <span className="progress-bar" style={{ width: `${skill.level}%` }}></span>
//                 </span>
//                 <span className="progress-right">
//                   <span className="progress-bar"></span>
//                 </span>
//                 <div className="progress-value">
//                   {counteron && (
//                     <CountUp start={0} end={skill.level} duration={3} delay={0} />
//                   )}
//                   %
//                 </div>
//               </div>
//               <div className="title_progress">
//                 <span>
//                   <i className="me-2">
//                     <FontAwesomeIcon icon={getIcon(skill.name)} />
//                   </i>
//                   {skill.name}
//                 </span>
//               </div>
//             </div>
//           ))} */}
//           <div className="circular-progress">
//             <span className="progress-value">0%</span>
//           </div>
//         </div>
//       </ScrollTrigger>
//     </>
//   );
// }

// function getIcon(skillName) {
//   switch (skillName) {
//     case "HTML":
//       return faHtml5;
//     case "CSS":
//       return faCss3Alt;
//     case "Bootstrap":
//       return faBootstrap;
//     case "JavaScript":
//       return faJs;
//     case "jQuery":
//       return faJs; // Assuming jQuery uses the same icon as JavaScript
//     case "PHP":
//       return faPhp;
//     case "MySQL":
//       return faDatabase;
//     case "Laravel":
//       return faLaravel;
//     case "React":
//       return faReact;
//     case "Git":
//       return faGitAlt;
//     case "GitHub":
//       return faGithub;
//     default:
//       return null;
//   }
// }

// export default Skills;

// import { useState, useEffect } from "react";
// import "./hh.css";
// import ScrollTrigger from "react-scroll-trigger";

// function Skills() {
//   const [counteron, setCounterOn] = useState(false);

//   useEffect(() => {
//     const progressStartValue = 0;
//     const progressEndValue = 10;
//     const speed = 20;

//     const circularProgress = document.querySelector(".circular-progress");
//     const progressValue = document.querySelector(".progress-value");

//     let currentProgress = progressStartValue;

//     const progress = setInterval(() => {
//       currentProgress++;

//       progressValue.textContent = `${currentProgress}%`;
//       circularProgress.style.background = `conic-gradient(#7d2ae8 ${currentProgress * 3.6}deg, #ededed 0deg)`;

//       if (currentProgress === progressEndValue) {
//         clearInterval(progress);
//       }
//     }, speed);

//     return () => clearInterval(progress);
//   }, []);

//   return (
//     <>
//       <ScrollTrigger
//         onEnter={() => setCounterOn(true)}
//         onExit={() => setCounterOn(false)}
//       >
//         <div className="skills">
//           <div className="circular-progress">
//             <span className="progress-value">0%</span>
//           </div>
//         </div>
//       </ScrollTrigger>
//     </>
//   );
// }

// export default Skills;
import { useEffect, useState } from "react";
import "./hh.css";
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
    percentage: 60,
    imageSrc: require("../../assets/images/icon/bootstrap.png"),
    type:'frontend'
  },
  {
    name: "JavaScript",
    icon: faJs,
    percentage: 70,
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
    percentage: 65,
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
    percentage: 75,
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
    percentage: 60,
    imageSrc: require("../../assets/images/icon/github.png"),
    type: 'other'
  },
  {
    name: "Redux",
    icon: faReact,
    percentage: 60,
    imageSrc: require("../../assets/images/icon/redux.png"),
    type:'frontend'
  },
  {
    name: "SQL",
    icon: faDatabase,
    percentage: 60,
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
    percentage: 60,
    imageSrc: require("../../assets/images/icon/postman.png"),
    type: 'other'
  },
  {
    name: "RestAPI",
    icon: faCloud,
    percentage: 60,
    imageSrc: require("../../assets/images/icon/restapi.png"),
    type: 'other'
  },
  {
    name: "vsCode",
    icon: faCode,
    percentage: 60,
    imageSrc: require("../../assets/images/icon/vscode.png"),
    type: 'other'
  },
  {
    name: "Canva",
    icon: faSwatchbook,
    percentage: 60,
    imageSrc: require("../../assets/images/icon/canva.png"),
    type: 'design'
  },
  {
    name: "PosterMyWall",
    icon: faSwatchbook,
    percentage: 60,
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
