import './App.css';
import { motion, useIsPresent } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './AnimatedRoutes.js';
import { BrowserRouter as Router, Route, Link, Routes, useLocation, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.js';
import Portfolio from './pages/portfolio/Portfolio';
import ContactMe from './pages/ContactMe';
import Header from './pages/Header';
import PageNotFound from './pages/PageNotFound';
import Midninestudios from './pages/portfolio/Midninestudios';
import Organization from './pages/portfolio/Organization';
import Fatbakers from './pages/portfolio/Fatbakers';
import Youtube from './pages/portfolio/Youtube';

function App() {
  const location = useLocation();

  return (
      <div className="App">
        <>
          <Header/>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/midninestudios" element={<Midninestudios />} />
              <Route path="/organization" element={<Organization />} />
              <Route path="/fatbakers" element={<Fatbakers />} />
              <Route path="/youtube" element={<Youtube />} />
              <Route path="/contactme" element={<ContactMe />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AnimatePresence>
        </>
      </div>
  );
}

export default App;
