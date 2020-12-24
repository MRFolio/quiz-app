import { motion } from 'framer-motion';
import Question from '../components/Question';
import { pageTransition, pageVariants } from '../utils';

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
