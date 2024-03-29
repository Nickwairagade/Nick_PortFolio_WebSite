import React from "react";
import Card from "../UI/Card/Card";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
// import Button from "../UI/Button";
import latestProject from "../../assets/projects/project-003.png";

import "./Style.css";

/**
 * @author
 * @function LatestProjects
 **/

const LatestProjects = (props) => {
  return (
    <div
      className="container"
      style={{ marginTop: "50px", marginBottom: "50px" }}
      data-aos="zoom-in-up"
    >
      <Card className="flexRow flexCol align-center justify-sb">
        <div className="projectPortfolioContainer">
          <SmallHeading text="portfolios" />
          <MediumHeading
            style={{ textTransform: "uppercase" }}
            text="Latest Projects"
          />
          <div className="mtb-10 flexRow" style={{ justifyContent: "center" }}>
            {/* <Button label="Portfolios" /> */}
            <a href="/profile"><button>PROJECTS</button></a>
          </div>
        </div>
        <div className="projectImgContainer">
          <img src={latestProject} alt="" />
        </div>
      </Card>
    </div>
  );
};

export default LatestProjects;
