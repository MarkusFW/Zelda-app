import React from "react";
import "./About.css";
import Sample from "../Component/Video/Sample.mp4";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const About = () => {
  return (
    <>
      <Link to={"/"} className="links">
        <Button className="compendium__backButton white">Back</Button>
      </Link>
      <div className="about">
        <video className="videoTag" autoPlay loop muted>
          <source src={Sample} type="video/mp4" />
        </video>
        <div className="about__textContainer">
          <h1 className="about__textTitle">
            Hey, Thanks for checking out my Zelda Monster Compendium Project! ❤️
          </h1>
          <p className="about__textPara">
            I programmed this in React
            <br />
            It was a really fun project to make and I would love to talk about
            it with you if you have any questions. Send me a dm on{" "}
            <a
              className="about__link"
              target="_blank"
              href="https://www.instagram.com/markus__fw/"
            >
              InstaGram
            </a>{" "}
            or contact my gmail Markusfw02@gmail.com! 😊
          </p>
          <p className="about__textPara">
            Lastly, I wanna give a massive shoutout to
            <a
              className="about__link"
              target="_blank"
              href="https://github.com/gadhagod/Hyrule-Compendium-API"
            >
              {" "}
              Gadhagod{" "}
            </a>
            for providing such an amazing API !
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
