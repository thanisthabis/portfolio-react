import { motion } from 'framer-motion';

import resume_pdf from'../assets/resumelink.pdf';

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
          <nav>
            <a class="logo" href="/">AmyB./💐</a>
            <ul class="nav-bar">

              <li class="nav-bar_item dropdown">
                <a href="#">projects</a>
                <ul class="project">
                  <li class="drop-item"><a href="/portfolio">UX/UI</a></li>
                  {/* <li class="drop-item"><a href="/midninestudios">Clothing line</a></li> */}
                  <li class="drop-item"><a href="/youtube">Youtube</a></li>
                </ul>
              </li>
              <li class="nav-bar_item"><a href={resume_pdf} target='blank'>resume</a></li>
            </ul>
          </nav>
        </motion.header>
    </div>
  );
}

export default Header;