import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import resume from "../../assets/files/NikhilWairagade-Resume.pdf";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import me from "../../assets/images/me-left1.png";
import "./Style.css";

/**
 * @author
 * @function Qualification
 **/

const Qualification = (props) => {
  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <SmallHeading text="Qualifications" />
      <MediumHeading text={"My Education"} />
      <div
        className="flexRow flexCol align-center justify-sb"
        style={{ margin: "50px 0" }}
      >
        <div data-aos="fade-up-right">
          <img src={me} alt="" />
          <div
            style={{
              background: "#fff",
              padding: "12px 7px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
             
            }}
          >
            <div className="mlr-10">
              <Button label="Hire Me" />
            </div>
            <div className="mlr-10">
              <a href={resume} download="NikhilWairagade-Resume.pdf" className="btn">Download CV</a>
            </div>
          </div>
        </div>
        <div>
          <Tile
            title="ssc"
            mediumTitle="73.60%"
            desc="Nagpur Bord"
          />
          <Tile
            title="Hsc"
            mediumTitle="70.83%"
            desc="Nagpur Bord"
          />
          <Tile
            title="Diploma"
            mediumTitle="58.83%"
            desc="Nagpur Bord"
          />
          <Tile
            title="BE (Computer Technology Engg.)"
            mediumTitle="56.94%"
            desc="Nagpur University"
          />
        </div>
      </div>
    </div>
  );
};

export default Qualification;
