import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WhatIDo.css'
import { faStar } from '@fortawesome/free-regular-svg-icons';
export default function WhatIDo() {
  return (
    <section id='what__i__Do' className='container'>
        <div className="title_section_about">
              <h1>
                What <span>I DO</span>
              </h1>
        </div>
      <ul className="cards">
        <li>
          <div className="card">
            <img
              src={require('../../assets/images/fullstack.jpeg')}
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <div className="card__header-text">
                  <h3 className="card__title"><span><FontAwesomeIcon icon={faStar}/></span> Full Stack Developer</h3>
                </div>
              </div>
              <p className="card__description">
              I specialize in crafting comprehensive, efficient, and versatile
               end-to-end solutions, leveraging expertise in both front-end and back-end technologies.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img
              src={require('../../assets/images/frontend.jpeg')}
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                
                <div className="card__header-text">
                  <h3 className="card__title"><span><FontAwesomeIcon icon={faStar}/></span>  FrontEnd Developper</h3>
                </div>
              </div>
              <p className="card__description">
              I thrive in backend development, utilizing robust frameworks and databases to architect scalable and secure server-side solutions.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img
              src={require('../../assets/images/backend.jpeg')}
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                
                <div className="card__header-text">
                  <h3 className="card__title"><span><FontAwesomeIcon icon={faStar}/></span>  BackEnd Developper</h3>
                </div>
              </div>
              <p className="card__description">
                I thrive in backend development, utilizing robust frameworks 
                and databases to architect scalable and secure server-side solutions.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
