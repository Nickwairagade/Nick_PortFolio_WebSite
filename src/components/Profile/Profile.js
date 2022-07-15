import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import profile from "../../assets/images/profile.jpeg";
import './Profile.css'
import { colors } from "../../Style";
import Card from "../UI/Card/Card";
import Skill from "../UI/Skill/Skill";
import Tile from "../UI/Tile";
import Button from "../UI/Button";
import { useLocation } from 'react-router-dom';
import ProjectOne from '../ProjectInfo/ProjectOne';

const Profile = () => {
    const skills = [
        {
          skillName: "HTML/CSS",
          value: 70,
          textColor: colors.primaryColor,
          pathColor: "#f2a154",
        },
        {
          skillName: "JavaScript",
          value: 90,
          textColor: colors.primaryColor,
          pathColor: "#f9f871",
        },
        {
          skillName: "ReactJS",
          value: 90,
          textColor: colors.primaryColor,
          pathColor: "#00af91",
        },
        {
          skillName: "jQuery",
          value: 60,
          textColor: colors.primaryColor,
          pathColor: "#845ec2",
        },
        {
          skillName: "Bootstrap",
          value: 70,
          textColor: colors.primaryColor,
          pathColor: "#845ec2",
        },
        {
          skillName: "NodeJS",
          value: 5,
          textColor: colors.primaryColor,
          pathColor: "#54e346",
        },
        {
          skillName: "PHP",
          value: 80,
          textColor: colors.primaryColor,
          pathColor: "#111d5e",
        },
        {
          skillName: "Mysql",
          value: 70,
          textColor: colors.primaryColor,
          pathColor: "#f88f01",
        },
      ];
      let history = useLocation();

      const redirect = () => {
        history.push('./ProjectOne')
      }
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-sm-12 profile'>
                    <img src={profile} alt="" />
                    <div className='row contact'>
                        <h5>CONTACT </h5>
                        <div className='col-2'>
                            <PhoneIcon />
                        </div>
                        <div className='col-9 number'>
                            <h6>9860489971</h6>
                        </div>
                        <div className='col-2'>
                            <EmailIcon />
                        </div>
                        <div className='col-9 number'>
                            <h6>nickwairagade@gmail.com</h6>
                        </div>
                        <div className='col-2'>
                            <GitHubIcon />
                        </div>
                        <div className='col-9 number'>
                            <h6>Nickwairagade</h6>
                        </div>
                    </div>
                    <div className='row skill'>
                        <h5>SKILL</h5>
                        <Card>
                            <div
                            data-aos="fade-up"
                            className="flexRow wrap justify-sb"
                            style={{ padding: "5px" }}
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
                </div>
                <div className='col-md-8 col-sm-12'>
                    <div className='col-12 name'>
                        <h4>Nikhil Wairagade</h4>
                        <h6>Software Developer</h6>
                    </div>
                    <div className='col-12 project'>
                        <div className='title'>
                            <h5>EXPERIENCE</h5>
                        </div>
                        <Tile
                            number="PROJECT 1"
                            title="Sapalogy Smart Learning Hub Portal"
                            mediumTitle="Codeigniter, HTML5, Bootstrap, Javascript "
                            desc="Team Member (Full Stack Developer)"
                        />
                        {/* <div className="mlr-10">
                            <Button label="Learn More" inverse={true} onClick={redirect} />
                        </div> */}
                        <Tile
                            number="PROJECT 2"
                            title="CRM"
                            mediumTitle="Laravel, HTML5, Bootstrap, Javascript ,Ajax"
                            desc="Team Member (Full Stack Developer)"
                        />
                        {/* <div className="mlr-10">
                            <Button label="Learn More" inverse={true} />
                        </div> */}
                        <Tile
                            number="PROJECT 3"
                            title=" Alpha Direct."
                            mediumTitle="Laravel , JavaScript , HTML 5"
                            desc="Team Member (Full Stack Developer)"
                        />
                        {/* <div className="mlr-10">
                            <Button label="Learn More" inverse={true} />
                        </div> */}
                        <Tile
                            number="PROJECT 4"
                            title="Hospital management system "
                            mediumTitle="Laravel , JavaScript , HTML 5"
                            desc="Team Member (Full Stack Developer)"
                        />
                        {/* <div className="mlr-10">
                            <Button label="Learn More" inverse={true} />
                        </div> */}
                        <Tile
                            number="PROJECT 5"
                            title=" Herambindia"
                            mediumTitle="Laravel , JavaScript , HTML 5"
                            desc="Team Member (Full Stack Developer)"
                        />
                        {/* <div className="mlr-10">
                            <Button label="Learn More" inverse={true} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile