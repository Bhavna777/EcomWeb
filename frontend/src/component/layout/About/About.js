import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import { FaCode, FaEnvelope, FaGithub, FaLinkedin, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/bhavna777/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "6vmax 0" }}
              src="./about.jpeg"
              alt="Founder"
            />
            <Typography>Bhavna</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit Linkedin
            </Button>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Links</Typography>
            {/* <Link to="https://github.com/Bhavna777" target='blank'><FaGithub /></Link>
            <Link to="https://www.linkedin.com/in/bhavna207/"><FaLinkedin /></Link>
            <Link to="https://bhavna777.github.io/bhavnawalia"><FaUserAlt /></Link>
            <Link to="https://www.codechef.com/users/bhavna777"><FaCode /></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
