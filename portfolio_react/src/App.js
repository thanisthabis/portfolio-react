import './App.css';
import { motion, useIsPresent } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './AnimatedRoutes.js';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';

function App() {
  return (
      <div className="App">
          <Router>
            <AnimatePresence>
              <AnimatedRoutes/>
              <Header/>
            </AnimatePresence>
          </Router>
      </div>
  );
}

function Header() {
  const headerMotion = {
    initial: { opacity: 0, y: -180 },
    animate: { opacity: 1, y: 0 },
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.5,
    },
  };

  return (
    <header className="header" id="header">
          <motion.header
            initial={headerMotion.initial}
            animate={headerMotion.animate}
            transition={headerMotion.transition}
            className="header"
            id="header"
          >
            <a href="http://localhost:3002/" className="nav__logo">c/</a>
            <Link to="/portfolio" className="nav__link">Projects</Link>
          </motion.header>
    </header>
  )
}

export default App;
