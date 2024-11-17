import React, { useEffect, useRef } from 'react';
import { motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Typewriter from 'typewriter-effect';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Home.css';
import timelineIcon from '../../src/assets/timelineIcon.png';
import { useAnimation } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import Carousel from "../../src/assets/Carousal.jsx";
import Card from "../../src/assets/Card.jsx";
import Spline from '@splinetool/react-spline';
import {Link} from 'react-router-dom';
import transition from '../../src/Transition.js';
import ThreeD from '../assets/ThreeD';

const Home = () => {
  // let cards = [
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <Card text="ok" />
  //     )
  //   },
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
  //     )
  //   },
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
  //     )
  //   },
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
  //     )
  //   },
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
  //     )
  //   }
  // ];

  window.onload = function () {
    let bar = document.querySelectorAll('.skills__percentage');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
      let count = 0;
      let progressAnimation = setInterval(() => {
        count++;
        progress.setAttribute('data-text', `${count}%`);
        if (count >= value) {
          clearInterval(progressAnimation);
        }
      }, 15);
    });
  };

    return (
    <div className="home">
      <div className="home__background">
        <section id="home__up"></section>
        <section id="home__down"></section>
        <section id="home__left"></section>
        <section id="home__right"></section>
      </div>

      <main className="main">
        <div className="home__swiper-container">
          <div className="home__swiper-wrapper">

              <div className="home__swiper-slide">
                <section className="home section" id="home">
                  <div className="section__container container">
                    <div className="home__content">
                    
                      <div className="home__data">
                        <h1 className="home__title">
                            I'm a...{" "}
                            <Typewriter
                                options={{
                                strings:["Front-End Enthusiasts", "Civil Engineer", "Developers", "Designers"],
                                typeSpeed: 100,
                                backSpeed: 20,
                                cursorClassName: "home__title__cursor",
                                wrapperClassName: "home__title",
                                autoStart: true,
                                loop: true,
                                }}
                            />
                        </h1>
                        <div className="home__description">
                          <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              ease: "easeInOut",
                              duration: 1,
                              delay: 0.4,
                            }}
                            className="row-col"
                          >
                            <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '23px'}}>
                              Hi there!👋🏻 My name is "Amy" Thanistha--Bisalputra.🏄🏻‍♀️ <br></br> I'm a soph-more at the University of ILLINOIs,
                              Urbana-Champaign, where I am pursuing a 👩‍🎓 Bachelor's degree in ciVIL Engineering with Informatics minor.
                            </span>
                        </motion.div>
                        </div>
                        <ThreeD/>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/* <div className="home__swiper-slide">
                <section className="skills section" id="skills">
                  <div className="section__container container">
                  
                    <div className="skills__left">
                      <h1 className="skills__title">-skills-</h1>
                      <h1 className="skills__subtitle">Front-End Developer</h1>
                    </div>
                    <div className="skills__right">
                      <motion.div
                      initial="hidden"
                      >
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">HTML 🎨</h3>
                          <span className="skills__number"></span>
                        </div>
                        <div className="skills__bar">
                          <div className="skills__percentage" data-value="70" data-text="70"></div>
                        </div>
                      </div>
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">CSS 🖼️</h3>
                          <span className="skills__number"></span>
                        </div>
                        <div className="skills__bar">
                          <div className="skills__percentage" data-value="75" data-text="75"></div>
                        </div>
                      </div>
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">Javascript 🌜</h3>
                          <span className="skills__number"></span>
                        </div>
                        <div className="skills__bar">
                          <div className="skills__percentage" data-value="40" data-text="40"></div>
                        </div>
                      </div>
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">SwiftUI 🐡</h3>
                          <span className="skills__number"></span>
                        </div>
                        <div className="skills__bar">
                          <div className="skills__percentage" data-value="30" data-text="30"></div>
                        </div>
                      </div>
                      </motion.div>
                    </div>
                  </div>
                </section>
              </div> */}
              <div className="home__swiper-slide">
                <section className="qualification section" id="qualification">
                  <div className="section__container container">
                    <h2 className="qualification__title">"Education"</h2>
                    <span className="qualification__subtitles"></span>
                    <div className="qualification__timeline__container">
                    <div className="qualification__timeline">
                      <VerticalTimeline
                          lineColor='#ffffffac'
                          >
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgba(255, 255, 255, 0.443)', color: 'rgba(255, 255, 255, 0.443)', textAlign: 'center'}}
                            contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.443)' }}
                            iconStyle={{ background: 'transparent', border: 'none', boxShadow: 'none', scale: '0.9'}}
                            icon={<img src={timelineIcon}/>}
                          >
                            <h3 className="vertical-timeline-element-title">Patumwan Demonstration School</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bangkok, Thailand</h4>
                            <h4 className="vertical-timeline-element-date">2017-2019</h4>
                            <p style={{ fontFamily: 'var(--thai-font)', fontSize: '15px', color: 'var(--first-color-third)', textAlign: 'center'}}>
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgba(255, 255, 255, 0.443)', color: 'rgba(255, 255, 255, 0.443)', textAlign: 'center'}}
                            contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.443)' }}
                            iconStyle={{ background: 'transparent', border: 'none', boxShadow: 'none', scale: '0.9'}}
                            icon={<img src={timelineIcon}/>}
                          >
                            <h3 className="vertical-timeline-element-title">Woodside Priory School</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p style={{ fontFamily: 'var(--thai-font)', fontSize: '15px', color: 'var(--first-color-third)', textAlign: 'center'}}>
                            high school diploma
                            </p>
                            <h4 className="vertical-timeline-element-date">2020-2022</h4>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgba(255, 255, 255, 0.443)', color: 'rgba(255, 255, 255, 0.443)', textAlign: 'center'}}
                            contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.443)' }}
                            iconStyle={{ background: 'transparent', border: 'none', boxShadow: 'none', scale: '0.9'}}
                            icon={<img src={timelineIcon}/>}
                          >
                            <h3 className="vertical-timeline-element-title">University of Illinois, Urbana-Champaign</h3>
                            <h4 className="vertical-timeline-element-subtitle">Urbana-Champaign, Illinois</h4>
                            <p style={{ fontFamily: 'var(--thai-font)', fontSize: '15px', color: 'var(--first-color-third)', textAlign: 'center'}}>
                            B.S. in Civil Engineering
                            </p>
                            <h4 className="vertical-timeline-element-date">2022-2026</h4>
                          </VerticalTimelineElement>
                        </VerticalTimeline>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

          </div>
        </div>     
      </main>
    </div>
    )
};

export default transition(Home);
