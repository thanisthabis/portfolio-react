import React from 'react';
import { useRef } from 'react';
import { useEffect,useState,useContext } from 'react';
import { motion, useIsPresent, useScroll, useSpring } from 'framer-motion';
import useScrollSnap from "react-use-scroll-snap";
import './Youtube.css';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import transition from '../../../src/Transition.js';

const Youtube = () => {
    return (
        <div className="youtube">
            <div className="youtube__background">
                <section id="youtube__up"></section>
                <section id="youtube__down"></section>
                <section id="youtube__left"></section>
                <section id="youtube__right"></section>
            </div>

            <main className="youtube__main">
                <div class="youtube__container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="youtube__section" id="youtube">
                                <div className="youtube__container container">
                                    <div className="youtube__content">
                                        <div className="youtube__subtitle">YOUTUBE CHANNEL</div>
                                        <div className="youtube__year">FALL 2021</div>
                                        <div className="youtube__line"></div>
                                        <div className="youtube__title">
                                            <span style={{'--i': 1}}>A</span>
                                            <span style={{'--i': 2}}>m</span>
                                            <span style={{'--i': 3}}>y</span>
                                            <span style={{'--i': 4}}>b</span>
                                            <span style={{'--i': 5}}>r</span>
                                            <span style={{'--i': 6}}>i</span>
                                            <span style={{'--i': 7}}>e</span>
                                            <span style={{'--i': 8}}>n</span>
                                            <span style={{'--i': 9}}>n</span>
                                            <span style={{'--i': 10}}>a</span>
                                            <span style={{'--i': 11}}>b</span>
                                        </div>

                                        <div className="youtube__description">
                                            <span>AmybriennaB is a lifestyle YouTube channel featuring 
                                                engaging vlogs documenting my daily activities and experiences. 
                                                Since November 2021, I've been responsible for filming, editing, 
                                                and posting content, as well as creating eye-catching thumbnails. 
                                                The channel aims to inspire shy individuals to pursue their passions 
                                                on YouTube, emphasizing the message and story over the person behind 
                                                the camera.</span>
                                        </div>
                                        <div className="youtube__link__description">Best views,</div>
                                        <div className="youtube__link">
                                            <a href="https://youtube.com/@amybriennab5198" target="_blank">(Click here 🔎)</a>
                                        </div>

                                        <div className="youtube__videos">
                                            <Container>
                                                <div className="youtube__video">
                                                    <iframe src="https://www.youtube.com/embed/Ds6O5A0LkIs" title="YouTube video" style={{ width: '600px', height: '350px'}} allowFullScreen></iframe>
                                                </div>

                                                <div className="youtube__video">
                                                    <iframe src="https://www.youtube.com/embed/CHW8PJiWvxQ" title="YouTube video" style={{ width: '600px', height: '350px' }} allowFullScreen></iframe>
                                                </div>

                                                <div className="youtube__video">
                                                    <iframe src="https://www.youtube.com/embed/wjJiKnVpBE8" title="YouTube video" style={{ width: '600px', height: '350px' }} allowFullScreen></iframe>
                                                </div>
                                            </Container>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default transition(Youtube);