import { Description } from "@mui/icons-material";
import React from "react";

import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./home.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="navbar-section">
          <h3 className="logo">KakonMehedi</h3>

          <ul className="navbar-list">
            <li className="nav-item">
              <a href="#about">About</a>
            </li>

            <li className="nav-item">
              <a href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a href="#resume">Resume</a>
            </li>
          </ul>

          <a href="#contact" className="contact-link">
            Contact
          </a>
        </div>

        <div id="about" className="about-section">
          <div className="about-left">
            <div className="left-top-text">
              Welcome to my portfolio website!
            </div>
            <h1 class="animated animated-text">
              <span class="static-text">Hello, I'm </span>
              <div class="animated-info">
                <span class="animated-item">Kakon Mehedi</span>
                <span class="animated-item">Web Developer</span>
                <span class="animated-item">UI Specialist</span>
              </div>
            </h1>

            <p className="about-text">
              Building a successful product is a challenge. I am highly
              energetic in user experience design, interfaces and web
              development.
            </p>

            <button className="btn btn-resume">
              <Description className="resume-icon" />
              Download Resume
            </button>
            <button className="btn btn-fq">Get a free quote</button>
          </div>

          <div className="about-right">
            <img
              src="assets/images/15.png"
              alt="kakonsPhoto"
              className="about-right-img"
            />
          </div>
        </div>

        <div className="my-skill-section">
          <h1 className="my-skill-title">My Skills</h1>

          <div className="skill-circle"></div>
        </div>

        <div id="projects" className="my-project-section">
          <h1 className="my-project-title">
            Some of my projects! You can click on the image to see the live
            version
          </h1>

          <div className="project-list">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <a href="#projectLink">
                  <img
                    src="assets/images/projects/project-image01.png"
                    className="project-img"
                    alt="projectimg"
                  />
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a href="#projectLink">
                  <img
                    src="assets/images/projects/project-image02.png"
                    className="project-img"
                    alt="projectimg"
                  />
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a href="#projectLink">
                  <img
                    src="assets/images/projects/project-image03.png"
                    className="project-img"
                    alt="projectimg"
                  />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="education-section"></div>

        <div className="contact-me-section"></div>

        <div className="footer-section"></div>
      </div>
    </>
  );
}

export default Home;
