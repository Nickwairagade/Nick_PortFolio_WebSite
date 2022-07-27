import React from "react";
import SocialConnect from "../UI/SocialConnect/SocialConnect";
import conversation from "../../assets/images/conversation.png";
import "./Style.css";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <div className="container">
      <div
        className="flexRow flexCol justify-sb align-center"
        style={{ margin: "50px 0" }}
      >
        <div className="mtb-10">
          <SocialConnect />
        </div>
        <div className="footerMenus mtb-10">
          <nav>
            <a href="/">Home</a>
            {/* <a href="#">About</a> */}
            <a href="/profile">Portfolios</a>
            {/* <a href="#">Blog</a> */}
            <a href="/contact">Contact</a>
          </nav>
        </div>
        <div className="conversationContainer primaryBgColor mtb-10">
          <img src={conversation} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
