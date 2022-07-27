import React from "react";
import socialIcons from "../../../assets/social-icons";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

/**
 * @author
 * @function SocialConnect
 **/

const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <span className="textColor font-12">Follow me :  </span>
      <div class="social-container">
          <a href=""
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x"/>
          </a>
          <a href=""
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
      </div>
      {/* <a className="socialLink" href="#">
        <img src={socialIcons.facebook} alt="" />
      </a>
      <a className="socialLink" href="#">
        <img src={socialIcons.instagram} alt="" />
      </a>
      <a className="socialLink" href="#">
        <img src={socialIcons.youtube} alt="" />
      </a>
      <a className="socialLink" href="#">
        <img src={socialIcons.linkedin} alt="" />
      </a> */}
    </div>
  );
};

export default SocialConnect;
