import React from 'react';
import { useRef } from 'react';
import { useEffect,useState,useContext } from 'react';
import { motion, useIsPresent, useScroll, useSpring } from 'framer-motion';
import useScrollSnap from "react-use-scroll-snap";
import './Fatbakers.css';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import transition from '../../../src/Transition.js';

import thaisa from './img/thaisa.PNG';
import thaisa1 from './img/thaisa1.PNG';
import thaisa2 from './img/thaisa2.PNG';
import thaisa3 from './img/thaisa3.jpg';
import thaisa4 from './img/thaisa4.PNG';
import thaisa5 from './img/thaisa5.PNG';
import thaisa6 from './img/thaisa6.PNG';
import thaisa7 from './img/thaisa7.PNG';
import thaisa8 from './img/thaisa8.jpg';
import thaisa9 from './img/thaisa9.PNG';
import thaisalogo from './img/thaisalogo.PNG';

const Fatbakers = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll  = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fatbakers">
            <div className="fatbakers__background">
                <section id="fatbakers__up"></section>
                <section id="fatbakers__down"></section>
                <section id="fatbakers__left"></section>
                <section id="fatbakers__right"></section>
            </div>

            <main className="fatbakers__main">
                <div class="fatbakers__container">
                    <div class="wrapper">
                        
                        <div class="slide">
                                <div class="fatbakersclub__section" id="fatbakersclub">
                                    <div className="fatbakersclub__container container">
                                        <div className="fatbakersclub__content">
                                            <div className="fatbakersclub__text">
                                                <div className="fatbakersclub__title">FatBakersClub</div>
                                                <div className="fatbakersclub__description">As a founder of 
                                                Fatbakersclub, a non-profit organization that combines my 
                                                passion for baking with giving back to the community, I made
                                                a significant impact by generating $500 in profits through 
                                                the sale of handmade cookies. I was responsible for not only 
                                                baking the treats but also creating eye-catching posters, menus, 
                                                and advertisements to attract customers. These funds were donated 
                                                to support important causes such as an ambulance for marine animals, 
                                                a children's hospital, and aid for the Gaza crisis.</div>
                                            </div>

                                            <div className="fatbakersclub__frame__wrapper">
                                            <div className="fatbakersclub__frame" style={{transform: `translateY(-${offsetY * 0.6}px)` }}>
                                                <div className="fatbakersclub__frame__image">
                                                    <img className="fatbakersclub__image" src={thaisalogo} alt=" "/>
                                                </div>
                                                <div className="fatbakersclub__frame__text">🏄🏻‍♀️</div>
                                            </div>

                                            <div className="fatbakersclub__frame" style={{transform: `translateY(-${offsetY * 0.5}px)` }}>
                                                <div className="fatbakersclub__frame__image">
                                                    <img className="fatbakersclub__image" src={thaisa} alt=" "/>
                                                </div>
                                                <div className="fatbakersclub__frame__text">🎀</div>
                                            </div>

                                            <div className="fatbakersclub__frame" style={{transform: `translateY(-${offsetY * 0.7}px)` }}>
                                                <div className="fatbakersclub__frame__image">
                                                    <img className="fatbakersclub__image" src={thaisa1} alt=" "/>
                                                </div>
                                                <div className="fatbakersclub__frame__text">💐</div>
                                            </div>

                                            <div className="fatbakersclub__frame" style={{transform: `translateY(-${offsetY * 0.8}px)` }}>
                                                <div className="fatbakersclub__frame__image">
                                                    <img className="fatbakersclub__image" src={thaisa2} alt=" "/>
                                                </div>
                                                <div className="fatbakersclub__frame__text">🎟</div>
                                            </div>

                                            <div className="fatbakersclub__frame" style={{transform: `translateY(-${offsetY * 0.5}px)` }}>
                                                <div className="fatbakersclub__frame__image">
                                                    <img className="fatbakersclub__image" src={thaisa3} alt=" "/>
                                                </div>
                                                <div className="fatbakersclub__frame__text">🩰</div>
                                            </div>

                                            <div className="fatbakersclub__frame" style={{transform: `translateY(-${offsetY * 0.9}px)` }}>
                                                <div className="fatbakersclub__frame__image">
                                                    <img className="fatbakersclub__image" src={thaisa4} alt=" "/>
                                                </div>
                                                <div className="fatbakersclub__frame__text">🍒</div>
                                            </div>

                                            <div className="fatbakersclub__frame" style={{transform: `translateY(-${offsetY * 0.7}px)` }}>
                                                <div className="fatbakersclub__frame__image">
                                                    <img className="fatbakersclub__image" src={thaisa5} alt=" "/>
                                                </div>
                                                <div className="fatbakersclub__frame__text">👛</div>
                                            </div>

                                            <div className="fatbakersclub__frame" style={{transform: `translateY(-${offsetY * 0.3}px)` }}>
                                                <div className="fatbakersclub__frame__image">
                                                    <img className="fatbakersclub__image" src={thaisa6} alt=" "/>
                                                </div>
                                                <div className="fatbakersclub__frame__text">🧠</div>
                                            </div>

                                            <div className="fatbakersclub__frame" style={{transform: `translateY(-${offsetY * 0.5}px)` }}>
                                                <div className="fatbakersclub__frame__image">
                                                    <img className="fatbakersclub__image" src={thaisa7} alt=" "/>
                                                </div>
                                                <div className="fatbakersclub__frame__text">👚</div>
                                            </div>

                                            <div className="fatbakersclub__frame" style={{transform: `translateY(-${offsetY * 0.8}px)` }}>
                                                <div className="fatbakersclub__frame__image">
                                                    <img className="fatbakersclub__image" src={thaisa8} alt=" "/>
                                                </div>
                                                <div className="fatbakersclub__frame__text">🏩</div>
                                            </div>

                                            <div className="fatbakersclub__frame" style={{transform: `translateY(-${offsetY * 0.6}px)` }}>
                                                <div className="fatbakersclub__frame__image">
                                                    <img className="fatbakersclub__image" src={thaisa9} alt=" "/>
                                                </div>
                                                <div className="fatbakersclub__frame__text">💖</div>
                                            </div>
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

export default transition(Fatbakers);