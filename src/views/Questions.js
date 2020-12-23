import { motion } from 'framer-motion';
import Question from '../components/Question';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 0.8,
  },
};

const pageTransition = {
  transition: 'tween',
  ease: 'anticipate',
  duration: 1,
};

const Questions = () => {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="main"
    >
      <Question />
    </motion.main>
  );
};

export default Questions;
