import React from 'react';
import { motion, useIsPresent, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import './ContactMe.css';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';

const ContactMe = () => {
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
                        </div>
                    </div>
            </main>
        </div>
    )
};

export default ContactMe;
