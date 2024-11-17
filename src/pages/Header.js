import { useNavigate } from "react-router-dom";
import { motion, useIsPresent } from 'framer-motion';

import { Link } from "react-router-dom";

const Header = () => {
    const headerMotion = {
            initial: { opacity: 0, y: 90},
            animate: { opacity: 1, y: 0 },
            transition: {
              ease: "easeInOut",
              duration: 1,
              delay: 0,
            },
          };
  return (
    <div className="header" id="header">
        <motion.header
            initial={headerMotion.initial}
            animate={headerMotion.animate}
            transition={headerMotion.transition}
            className="header"
            id="header"
        >
            <Link to="/portfolio" className="nav__link">Projects</Link>
            <Link to="/" className="nav__logo">AmyB./💐</Link>
            <Link to="/contactme" className="nav__link">Contact ME</Link>
        </motion.header>
    </div>
  );
}

export default Header;