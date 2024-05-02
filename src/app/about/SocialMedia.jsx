import { Link } from "react-router-dom";
import styleSocial from "./SocialMedia.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function SocialMedia() {
  return (
    <>
      <div className={`${styleSocial.divBTN}`}>
        <Link to="https://www.linkedin.com/in/ayoub-ibidarne-9b33562a4/" target='_blank' className={`m-1 ${styleSocial.socialBTN}`}>
          <i>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </i>
        </Link>
        <Link to="https://github.com/AYOUB20IBI" target='_blank' className={`m-1 ${styleSocial.socialBTN}`}>
          <i>
            <FontAwesomeIcon icon={faGithub} />
          </i>
        </Link>
        <Link to='https://www.instagram.com/ibi27a/' target='_blank' className={`m-1 ${styleSocial.socialBTN}`}>
          <i>
            <FontAwesomeIcon icon={faInstagram} />
          </i>
        </Link>
        <Link to="https://t.me/ayoub27a" target='_blank' className={`m-1 ${styleSocial.socialBTN}`}>
          <i>
            <FontAwesomeIcon icon={faTelegram} />
          </i>
        </Link>
        <Link to="https://wa.me/+212677687809" target='_blank' className={`m-1 ${styleSocial.socialBTN}`}>
          <i>
            <FontAwesomeIcon icon={faWhatsapp} />
          </i>
        </Link>
      </div>
    </>
  );
}

export default SocialMedia;
