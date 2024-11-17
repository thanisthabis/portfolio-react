import React from 'react';
import { motion, useIsPresent, useScroll, useSpring, AnimatePresence } from 'framer-motion';
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
            <div className="portfolio__background">
                <section id="portfolio__up"></section>
                <section id="portfolio__down"></section>
                <section id="portfolio__left"></section>
                <section id="portfolio__right"></section>
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
                                                <Link to="/midninestudios" className="portfolio__link__midnine">
                                                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '50px',fontWeight: 500}}>Midnine</span>
                                                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px',fontWeight: 500}}>studios</span>
                                                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 400}}>  --clothing line</span>
                                                </Link>
                                                {/* <Link to="/organization" className="portfolio__link__organization">
                                                    <span style={{ fontFamily: 'Playfair Display, serif, serif', fontSize: '50px',fontWeight: 500}}>University</span>
                                                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '20px',fontWeight: 500}}>organization</span>
                                                </Link> */}
                                                <Link to="/fatbakers" className="portfolio__link__fatbakers">
                                                    <span style={{ fontFamily: 'Playfair Display, serif, serif', fontSize: '50px',fontWeight: 500}}>FatBakers</span>
                                                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '20px',fontWeight: 500}}>club</span>
                                                </Link>
                                                <Link to="/youtube" className="portfolio__link__youtube">
                                                    <span style={{ fontFamily: 'Playfair Display, serif, serif', fontSize: '50px',fontWeight: 500}}>you</span>
                                                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '20px',fontWeight: 500}}>Tube</span>
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
