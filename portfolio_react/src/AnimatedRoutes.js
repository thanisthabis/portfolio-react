import './App.css';
import Home from './Home.js';
import { AnimatePresence } from 'framer-motion';
import Portfolio from './Portfolio.js';
import { BrowserRouter as Router, Route, Link, Routes, useLocation, useLoaderData } from 'react-router-dom';
import React from 'react';
import Midninestudios from './portfolio/Midninestudios.js';
import Youtube from './portfolio/Youtube.js';
import Organization from './portfolio/Organization.js';
import Fatbakers from './portfolio/Fatbakers.js';
import ContactMe from './ContactMe.js';

function AnimatedRoutes() {
    const location = useLocation();
    const key = location.pathname;
    return (
        <AnimatePresence>
            <Routes location={location} key={key}>
                <Route exact path="/" element={<Home/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/midninestudios" element={<Midninestudios/>} />
                <Route path="/organization" element={<Organization/>} />
                <Route path="/youtube" element={<Youtube/>} />
                <Route path="/fatbakers" element={<Fatbakers/>} />
                <Route path="/contactme" element={<ContactMe/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;