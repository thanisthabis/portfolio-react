import React, { useRef } from 'react';
import { motion, useIsPresent, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import './ContactMe.css';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import linkedin from '../assets/linkedin.svg';
import resume from '../assets/resume.png';
import github from '../assets/github.svg';
import resume_pdf from'../assets/Resume_ThanisthaBisalputra.pdf';
import logo from '../assets/favicon.jpg';
import transition from '../../src/Transition.js';
import emailjs from '@emailjs/browser';

const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n14o6px', 'template_6z8nanx', form.current, 'P5Ska_bSpPmDCYw9W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };

    return (
        <div className="contactme">
            <div className="contactme__background">
                <section id="contactme__up"></section>
                <section id="contactme__down"></section>
                <section id="contactme__left"></section>
                <section id="contactme__right"></section>
            </div>

            <main className="main">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="contactme section" id="contactme">
                                <div className="contactme__container container">
                                    <div className="contactme__content">
                                        <div className="contactme__title">Get In Touch</div>
                                        <div className="contactme__subtitle">I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</div>
                                        <div className="contactme__horizontal">
                                            <div className="contactme__logo">
                                                <img src={logo} className="contactme__logo__img"/>
                                            </div>
                                            <div className="contactme__emailbox">
                                                        <form ref={form} onSubmit={sendEmail}>
                                                            <div className="form-group">
                                                                <label>Name:</label>
                                                                <input type="text" name="user_name"/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Email:</label>
                                                                <input type="email" name="user_email" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Message:</label>
                                                                <textarea name="message" />
                                                            </div>
                                                            <input className="contactme__emailbox__send" type="submit" value="Send!" />
                                                        </form>
                                            </div>
                                            <div className="contactme__vertical">
                                                <div className="contactme__info">
                                                    <div className="contactme__name">Amy Thanistha Bisalputra (she/her)</div>
                                                    <div className="contactme__email">💌: tb23@illinois.edu<a href="tb23@illinois.edu"></a></div>
                                                    <div className="contactme__phone">📞: (415) 609 - 9639<a href="4156099639"></a></div>
                                                    <div className="contactme__location">📍: Urbana-Champaign, Illinois<a href=""></a></div>
                                                </div>
                                                <div className="contactme__links">
                                                    <div className="contactme__linkedin">
                                                        <a href="https://www.linkedin.com/in/thanistha-bisalputra-4b6109257" target='blank'>
                                                            <img src={linkedin} className="contactme__linkedin__img"/>
                                                        </a>
                                                    </div>
                                                    <div className="contactme__github">
                                                        <a href="https://github.com/thanisthabis" target='blank'>
                                                            <img src={github} className="contactme__github__img"/>
                                                        </a>
                                                    </div>
                                                    <div className="contactme__resume">
                                                    <a href={resume_pdf} target='blank'>
                                                        <img src={resume} className="contactme__resume__img"/>
                                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contactme__sources">
                        <a target="_blank" href="https://icons8.com/icon/g8tiML6nJFUt/resume">Resume</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                        <a target="_blank" href="https://icons8.com/icon/447/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                        <a target="_blank" href="https://icons8.com/icon/12599/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                    </div>
            </main>
        </div>
    )
};

export default transition(ContactMe);
