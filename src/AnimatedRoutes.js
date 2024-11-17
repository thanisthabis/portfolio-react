import './App.css';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Link, Routes, useLocation, useLoaderData } from 'react-router-dom';
import React from 'react';
import Midninestudios from './pages/portfolio/Midninestudios.js';
import Youtube from './pages/portfolio/Youtube.js';
import Design from './pages/portfolio/Design.js';
import Fatbakers from './pages/portfolio/Fatbakers.js';
import Flo from './pages/portfolio/Flo.js'

function AnimatedRoutes() {
    const location = useLocation();
    const key = location.pathname;
    return (
        <AnimatePresence>
            <Routes location={location} key={key}>
                <Route path="/midninestudios" element={<Midninestudios/>} />
                <Route path="/design" element={<Design/>} />
                <Route path="/flo" element={<Flo/>} />
                <Route path="/youtube" element={<Youtube/>} />
                <Route path="/fatbakers" element={<Fatbakers/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;