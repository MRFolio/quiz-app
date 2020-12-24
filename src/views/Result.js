import { motion } from 'framer-motion';
import EndScreen from '../components/EndScreen';
import { pageTransition, pageVariants } from '../utils';

const Result = () => {
  return (
    <motion.main
      className="main"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <EndScreen />
    </motion.main>
  );
};
export default Result;
