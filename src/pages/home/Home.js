import { Description } from "@mui/icons-material";
import React, { useState } from "react";

import { FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "../../components/contactForm/ContactForm";

import SkillCard from "../../components/skillCard/SkillCard";
import "./home.css";

function Home() {
  const [showNav, setShowNav] = useState(false);

  const handleScroll = (e) => {
    console.log("scroll is working");
  };
  return (
    <>
      <div className="container" onScroll={handleScroll}>
        <div className="navbar-section">
          <h3 className="logo">KakonMehedi</h3>

          <ul className="navbar-list">
            <li className="nav-item">
              <a href="#about">About</a>
            </li>

            <li className="nav-item">
              <a href="#skill">Skill</a>
            </li>

            <li className="nav-item">
              <a href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a href="#education">Education</a>
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
            <h1 className="animated animated-text">
              <span className="static-text">Hello, I'm </span>
              <div className="animated-info">
                <span className="animated-item">Kakon Mehedi</span>
                <span className="animated-item">Web Developer</span>
                <span className="animated-item">UI Specialist</span>
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

        <div id="skill" className="my-skill-section">
          <h1 className="my-skill-title">My Skills</h1>

          <div className="skill-list">
            <SkillCard skillName="HTML" skillValue="80" />
            <SkillCard skillName="CSS" skillValue="75" />
            <SkillCard skillName="JavaScript" skillValue="70" />
            <SkillCard skillName="React" skillValue="70" />
            <SkillCard skillName="Communication" skillValue="80" />
          </div>
        </div>

        <div id="projects" className="my-project-section">
          <h1 className="my-project-title">
            Some of my projects! You can click on the image to see the live
            version
          </h1>

          <div className="project-list">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
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

        <div id="education" className="education-section">
          <h1 className="education-section-title">Education and Experience</h1>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <a href="#projectLink">
                <img
                  src="assets/images/projects/project-image01.png"
                  className="education-img"
                  alt="projectimg"
                />
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a href="#projectLink">
                <img
                  src="assets/images/projects/project-image02.png"
                  className="education-img"
                  alt="projectimg"
                />
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a href="#projectLink">
                <img
                  src="assets/images/projects/project-image03.png"
                  className="education-img"
                  alt="projectimg"
                />
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a href="#projectLink">
                <img
                  src="assets/images/projects/project-image03.png"
                  className="education-img"
                  alt="projectimg"
                />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>

        <ContactForm />
      </div>
      <ul className="footer-list">
        <li className="footer-list-item">Linkedin</li>
        <li className="footer-list-item">Github</li>
        <li className="footer-list-item">Email</li>
      </ul>
    </>
  );
}

export default Home;
