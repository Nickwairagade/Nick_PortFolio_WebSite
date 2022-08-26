import React from "react";
// import socialIcons from "../../../assets/social-icons";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGit,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

/**
 * @author
 * @function SocialConnect
 **/

const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <span className="textColor font-12">Follow me : </span>
      <div className="social-container">
        <div className="git">
          <a href="https://github.com/Nickwairagade" className="git social">
            <FontAwesomeIcon icon={faGit} size="2x" />
          </a>
          <a href="" className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialConnect;
