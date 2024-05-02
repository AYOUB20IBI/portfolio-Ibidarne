// import { useEffect, useRef, useState } from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import './Hero.css';
// import './Button.css';
// import Lottie from 'lottie-react';
// import devAnimation from '../dev.json'
// import LoadingPage from '../loadingPage/LoadingPage';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

// function Hero() {
//   const lottieRef = useRef();
//   const [isLoading, setIsLoading] = useState(Boolean(true));
//   useEffect(()=>{
    
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   },[])
//   return (
//     <>
//     {isLoading ? (
//       <LoadingPage />
//     ) : (
//     <>
//     <div id="hero" className="container d-flex align-items-center justify-content-center">
//       <div className="row m-0">
//         <div className='col-12 col-lg-7'>
//           <div className="container" data-aos="zoom-in" data-aos-delay="100">
//             <h1>IBIDARNE AYOUB</h1>
//             <p>
//               {`I'm `} <Typewriter words={['Full Stack Developer', 'Front End Developer', 'Back End Developer']} loop={true} />
//               <span> |</span>
//             </p>
//             <p>
//               Energetic full-stack developer skilled at writing well-designed code,
//               creating responsive websites with a mobile-first approach.
//             </p>

//             <div>
//               <Link to='/about'>
//                 <button className="button">
//                   <span className="button_lg">
//                     <span className="button_sl"></span>
//                     <div  style={{color:'#fff'}}>
//                       <span className="button_text"><i><FontAwesomeIcon icon={faHandPointRight}/></i> MORE ABOUT ME</span>
//                     </div>
//                   </span>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className='col-12 col-lg-5'>
//           {/* <div className={`${stylecard.card_Image}`}></div> */}
//           <div>
//             <Lottie
//               lottieRef={lottieRef}
//               className=" animation-image"
//               onLoadedImages={() => {
//                 lottieRef.current.setSpeed(0.5);
//               }}
//               animationData={devAnimation}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//     )}
//     </>
//   );
// }

// export default Hero;
import { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';
import './Button.css';
import styleSocialHero from './socialM.module.css'
import Lottie from 'lottie-react';
import devAnimation from '../dev.json'
import LoadingPage from '../loadingPage/LoadingPage';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  const lottieRef = useRef();
  const [isLoading, setIsLoading] = useState(Boolean(true));
  useEffect(()=>{
    
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  },[])
  return (
    <>
    {isLoading ? (
      <LoadingPage />
    ) : (
    <>
    <div id="hero" className="d-flex align-items-center justify-content-center container">
      <Row className="m-0">
        <Col md={7}>
          <div data-aos="zoom-in" data-aos-delay="100">
            <h1>IBIDARNE AYOUB</h1>
            <p>
              {`I'm `} <Typewriter words={['Full Stack Developer', 'Front End Developer', 'Back End Developer']} loop={true} />
              <span> |</span>
            </p>
            <p>
              Energetic full-stack developer skilled at writing well-designed code,
              creating responsive websites with a mobile-first approach.
            </p>

            <div>
            <div className={`${styleSocialHero.divBTN}`}>
                <Link to="https://www.linkedin.com/in/ayoub-ibidarne-9b33562a4/" target='_blank' className={`m-1 ${styleSocialHero.socialBTN}`}>
                  <i>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </i>
                </Link>
                <Link to="https://github.com/AYOUB20IBI" target='_blank' className={`m-1 ${styleSocialHero.socialBTN}`}>
                  <i>
                    <FontAwesomeIcon icon={faGithub} />
                  </i>
                </Link>
                <Link to='https://www.instagram.com/ibi27a/' target='_blank' className={`m-1 ${styleSocialHero.socialBTN}`}>
                  <i>
                    <FontAwesomeIcon icon={faInstagram} />
                  </i>
                </Link>
                <Link to="https://t.me/ayoub27a" target='_blank' className={`m-1 ${styleSocialHero.socialBTN}`}>
                  <i>
                    <FontAwesomeIcon icon={faTelegram} />
                  </i>
                </Link>
                <Link to="https://wa.me/+212677687809" target='_blank' className={`m-1 ${styleSocialHero.socialBTN}`}>
                  <i>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </i>
                </Link>
              </div>
            </div>

            <div>
              <button className="button">
                <span className="button_lg">
                  <span className="button_sl"></span>
                  <Link to='/about' style={{color:'#fff'}}>
                    <span className="button_text"><i className="fa-solid fa-hand-point-right"></i> MORE ABOUT ME</span>
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </Col>
        <Col md={5}>
          {/* <div className={`${stylecard.card_Image}`}></div> */}
          <div>
            <Lottie
              lottieRef={lottieRef}
              className=" animation-image"
              onLoadedImages={() => {
                lottieRef.current.setSpeed(0.5);
              }}
              animationData={devAnimation}
            />
          </div>
        </Col>
      </Row>
    </div>
    </>
    )}
    </>
  );
}

export default Hero;