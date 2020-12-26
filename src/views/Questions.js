import { motion } from 'framer-motion';
import Question from '../components/Question';
import { pageTransition, pageVariants } from '../utils';

const Questions = () => (
  <motion.main
    initial="initial"
    animate="in"
    variants={pageVariants}
    transition={pageTransition}
    className="main"
  >
    <Question />
  </motion.main>
);

export default Questions;
