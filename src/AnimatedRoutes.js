import './App.css';
import Home from './pages/Home.js';
import { AnimatePresence } from 'framer-motion';
import Portfolio from './pages/portfolio/Portfolio.js';
import { BrowserRouter as Router, Route, Link, Routes, useLocation, useLoaderData } from 'react-router-dom';
import React from 'react';
import Midninestudios from './pages/portfolio/Midninestudios.js';
import Youtube from './pages/portfolio/Youtube.js';
import Organization from './pages/portfolio/Organization.js';
import Fatbakers from './pages/portfolio/Fatbakers.js';
import ContactMe from './pages/ContactMe.js';

function AnimatedRoutes() {
    const location = useLocation();
    const key = location.pathname;
    return (
        <AnimatePresence>
            <Routes location={location} key={key}>
                <Route path="/midninestudios" element={<Midninestudios/>} />
                <Route path="/organization" element={<Organization/>} />
                <Route path="/youtube" element={<Youtube/>} />
                <Route path="/fatbakers" element={<Fatbakers/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;