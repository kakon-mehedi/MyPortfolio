import { Description } from "@mui/icons-material";
import React from "react";

import { FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "../../components/contactForm/ContactForm";
import Navbar from "../../components/navbar/Navbar";

import SkillCard from "../../components/skillCard/SkillCard";
import { EducationData, ProjectData } from "../../data";
import "./home.css";

function Home() {
  const handleScroll = (e) => {
    console.log("scroll is working");
  };
  return (
    <>
      <div className="container" onScroll={handleScroll}>
        <Navbar />
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
            <button className="btn btn-fq">
              <a href="#contact">Get a free quote</a>
            </button>
          </div>

          <div className="about-right">
            <img
              src="assets/images/kakon2.png"
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
              {ProjectData.map((project) => {
                return (
                  <SwiperSlide key={project.id}>
                    <a href={project.liveUrl}>
                      <img
                        src={project.url}
                        className="project-img"
                        alt="projectimg"
                      />
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div id="education" className="education-section">
          <h1 className="education-section-title">
            Education, Experience & Achievements
          </h1>
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
            {EducationData.map((education) => {
              return (
                <SwiperSlide key={education.id}>
                  <img
                    src={education.url}
                    className="education-img"
                    alt="EducationImg"
                  />
                </SwiperSlide>
              );
            })}
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
