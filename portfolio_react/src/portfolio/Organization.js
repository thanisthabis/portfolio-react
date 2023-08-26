import React from 'react';
import { useRef } from 'react';
import { useEffect,useState,useContext } from 'react';
import { motion, useIsPresent, useScroll, useSpring } from 'framer-motion';
import useScrollSnap from "react-use-scroll-snap";
import './Organization.css';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';



const Organization = () => {

    // const thaisa = document.querySelector('.thaisa__frame__container');
    // const thaisaWrapper = document.querySelector('.thaisa__frame__wrapper');
    // const 
    return (
        <div className="organization">
            <div className="organization__background">
                <section id="organization__up"></section>
                <section id="organization__down"></section>
                <section id="organization__left"></section>
                <section id="organization__right"></section>
            </div>

            <main className="organization__main">
                <div class="organization__container">
                    <div class="wrapper">

                        <div class="slide">
                                <div class="thaisa__section" id="thaisa">
                                    <div className="thaisa__container container">
                                        <div className="thaisa__content">
                                            <div className="thaisa__text">
                                                <div className="thaisa__title">Thai Student Association at UIUC</div>
                                                <div className="thaisa__description">As a member of the Public Relations 
                                                team for the Thai Student Association at UIUC, I leverage my design skills 
                                                and social media expertise. I was responsible for creating visually appealing 
                                                posters for Instagram to promote upcoming events and bonding activities, including 
                                                fundraisers. My efforts effectively informed the public and generated interest in 
                                                the club, making a positive impact on its growth and success.</div>
                                            </div>

                                            <div className="thaisa__link">
                                                <a href="https://www.instagram.com/uiuc.thaisa/?hl=en" target="_blank">🐘</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div class="slide">
                                <div class="iss__section" id="iss">
                                    <div className="iss__container container">
                                        <div className="iss__content">
                                            <div className="iss__title">Illinois Space Society</div>
                                            <div className="iss__description">As a member of the media 
                                            team for the Illinois Space Society at UIUC, I have demonstrated 
                                            my creativity and marketing skills by creating promotional materials 
                                            to support the club's initiatives. I am currently producing a video 
                                            that showcases the organization's mission and accomplishments, while 
                                            also taking on the responsibility of managing the club's social media 
                                            presence. This includes creating visually appealing Instagram posts, 
                                            such as infographics highlighting sub-teams, events, and updates on 
                                            current projects, to engage members and the broader community.</div>

                                            <div className="iss__link">
                                                <a href="https://www.illinoisspacesociety.org/" target="_blank">🚀</a>
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

export default Organization;