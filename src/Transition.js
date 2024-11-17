import { motion } from 'framer-motion';

const transition = (OgComponent) => {
    return () => (
        <>
        <OgComponent />
        <motion.div 
            className="transition__slide-in" 
            initial={{scaleY: 0}}
            animate={{scaleY: 0}}
            exit={{scaleY: 1}}
            transition={{duration: 0.5, ease: [0.35, 1, 0.50, 1]}}
        />
        <motion.div 
            className="transition__slide-out" 
            initial={{scaleY: 1}}
            animate={{scaleY: 0}}
            exit={{scaleY: 0}}
            transition={{duration: 0.5, ease: [0.35, 1, 0.50, 1]}}
        />
        </>
    );
};

export default transition;