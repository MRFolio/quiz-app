import { motion } from 'framer-motion';
import SetupForm from '../components/SetupForm';

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

const Setup = () => {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="main"
    >
      <SetupForm />
    </motion.main>
  );
};
export default Setup;
