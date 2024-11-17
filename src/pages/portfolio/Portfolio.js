import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.css';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import transition from '../../../src/Transition.js';

const Portfolio = () => {
    
    const menuMotion = {
        initial: { opacity: 0, y: 90},
        animate: { opacity: 1, y: 0 },
        transition: {
          ease: "easeInOut",
          duration: 1,
          delay: 0,
        },
      };
      
    return (
        <div className="portfolio">
            <div className="background">
                <section id="background__up"></section>
                <section id="background__down"></section>
                <section id="background__left"></section>
                <section id="background__right"></section>
            </div>

            <main className="main">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="portfolio section" id="portfolio">
                                <div className="portfolio__container container">
                                    <div className="portfolio__content">
                                        <AnimatePresence>
                                            <motion.div className="portfolio__links"
                                                initial={menuMotion.initial}
                                                animate={menuMotion.animate}
                                                transition={menuMotion.transition}
                                                >
                                                <Link to="/design" className="portfolio__link">
                                                    <span style={{ fontFamily: 'Playfair Display, serif, serif', fontSize: '50px'}}>Roblox</span>
                                                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '20px'}}>redesign</span>
                                                </Link>
                                                <Link to="/flo" className="portfolio__link">
                                                    <span style={{ fontFamily: 'Playfair Display, serif, serif', fontSize: '50px'}}>Flo</span>
                                                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '20px'}}>redesign</span>
                                                </Link>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
    )
};

export default transition(Portfolio);
