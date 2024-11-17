import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { motion} from 'framer-motion';

function Card({ text }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <h2 src={text}>Front-End</h2>
      <motion.div
                      initial="hidden"
                      >
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">HTML 🎨</h3>
                          <span className="skills__number"></span>
                        </div>
                        <div className="skills__bar">
                          <div className="skills__percentage" data-value="70" data-text="70"></div>
                        </div>
                      </div>
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">CSS 🖼️</h3>
                          <span className="skills__number"></span>
                        </div>
                        <div className="skills__bar">
                          <div className="skills__percentage" data-value="75" data-text="75"></div>
                        </div>
                      </div>
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">Javascript 🌜</h3>
                          <span className="skills__number"></span>
                        </div>
                        <div className="skills__bar">
                          <div className="skills__percentage" data-value="40" data-text="40"></div>
                        </div>
                      </div>
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">SwiftUI 🐡</h3>
                          <span className="skills__number"></span>
                        </div>
                        <div className="skills__bar">
                          <div className="skills__percentage" data-value="30" data-text="30"></div>
                        </div>
                      </div>
                      </motion.div>
    </animated.div>
  );
}

export default Card;