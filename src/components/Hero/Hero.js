import React from "react";
import me from "../../assets/images/me-right.png";
import Button from "../UI/Button";
import "./Style.css";

const Hero = (props) => {
    const downloadFile = () => {
      window.location.href = "NikhilWairagade-Resume.pdf"
    }
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow flexCol justify-sb align-center">
        <div data-aos="fade-right">
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello,</span> I am Nikhil Wairagade
          </p>
          <h1 className="textColor ls-1 mtb-10">Software Developer</h1>
          <p className="font-12 grey mtb-10">FullStack Developer using JS.</p>
          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <Button label="Hire Me" />
            </div>
            <div className="mlr-10">
              <a href="NikhilWairagade-Resume.pdf" download="NikhilWairagade-Resume.pdf">
                <Button label="Download CV" onClick={downloadFile} />
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="meRightImgContainer">
            <img src={me} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
