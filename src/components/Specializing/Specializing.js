import React from "react";
import Card from "../UI/Card/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Skill from "../UI/Skill/Skill";
import { colors } from "../../Style";

/**
 * @author
 * @function Specializing
 **/

const Specializing = (props) => {
  const skills = [
    {
      skillName: "HTML/CSS",
      desc: "Hands on experience in Html/Css",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#f2a154",
    },
    {
      skillName: "Bootstrap",
      desc: "Hands on experience in Bootstrap",
      value: 90,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
    {
      skillName: "JavaScript",
      desc: "Working experience On Javscript",
      value: 50,
      textColor: colors.primaryColor,
      pathColor: "#f9f871",
    },
    {
      skillName: "ReactJS",
      desc: "Working experience On React JS",
      value: 50,
      textColor: colors.primaryColor,
      pathColor: "#00af91",
    },
    {
      skillName: "jQuery",
      desc: "Working experience On JQuery ",
      value: 30,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
    {
      skillName: "NodeJS",
      desc: "Working experience On Node JS",
      value: 20,
      textColor: colors.primaryColor,
      pathColor: "#54e346",
    },
    {
      skillName: "MongoDB",
      desc: "Working experience On MongoDB",
      value: 40,
      textColor: colors.primaryColor,
      pathColor: "#111d5e",
    },
    {
      skillName: "Mysql",
      desc: "Working experience On MySql",
      value: 50,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },
  ];

  return (
    <div className="container">
      <Card style={{ padding: "50px" }}>
        <SmallHeading text="What I do" />
        <MediumHeading text="Specializing in" />
        <div
          data-aos="fade-up"
          className="flexRow wrap justify-sb"
          style={{ padding: "30px" }}
        >
          {skills.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value}
              textColor={colors.primaryColor}
              pathColor={skill.pathColor}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Specializing;
