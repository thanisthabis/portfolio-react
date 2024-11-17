import React, { useEffect, useRef } from 'react';
import { motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import 'react-vertical-timeline-component/style.min.css';
import './Home.css';
import transition from '../../src/Transition.js';

const Home = () => {
  return (
    <div className="home">
      <div className="background">
        <section id="background__up"></section>
        <section id="background__down"></section>
        <section id="background__left"></section>
        <section id="background__right"></section>
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
                                strings:["Front-End Enthusiasts", "Developers", "Designers"],
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
                            <span>
                            Hey there! I’m Amy Thanistha Bisalputra 👋🏻
I’m a junior at the University of Illinois, Urbana-Champaign, where I’m studying Computer Science + Advertising (with Informatics minor).
I’m all about UX/UI design 🎨, marketing, and front-end development! ✨
I love creating fun, human-centered designs that not only look great but make people’s lives easier.
                            </span>
                        </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/* <div className="home__swiper-slide">
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
                            B.S. in Computer Science + Advertising
                            </p>
                            <h4 className="vertical-timeline-element-date">2022-2026</h4>
                          </VerticalTimelineElement>
                        </VerticalTimeline>
                      </div>
                    
                    </div>
                  </div>
                </section>
              </div> */}

          </div>
        </div>     
      </main>
    </div>
  )
};

export default transition(Home);
