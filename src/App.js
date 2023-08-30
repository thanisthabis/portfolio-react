import './App.css';
import { motion, useIsPresent } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './AnimatedRoutes.js';
import { BrowserRouter as Router, Route, Link, Routes, useLocation, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.js';
// import Portfolio from './portfolio/Portfolio';
import ContactMe from './pages/ContactMe';
// import Header from './pages/Header';
import PageNotFound from './pages/PageNotFound';

function App() {
  // const location = useLocation();

  return (
      <div className="App">
          {/* <Router> */}
            <AnimatePresence>
              <AnimatedRoutes>
                <Header/>
              </AnimatedRoutes>
            </AnimatePresence>
          {/* </Router> */}
          {/* <Header/>
          <AnimatePresence mode='wait'>
            
              <Routes location={location} key={location.pathname}>
                <Route index element={<Home />} />
                <Route path="Portfolio" element={<Portfolio />} />
                <Route path="ContactMe" element={<ContactMe />} />

                
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            
          </AnimatePresence> */}
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
              <a href="/" className="nav__logo">AmyB./💐</a>
              <Link to="/portfolio" className="nav__link">Projects</Link>
              <Link to="/contactme" className="nav__link">Contact ME</Link>
          </motion.header>
    </header>
  )
}

export default App;
