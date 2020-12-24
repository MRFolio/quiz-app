import { motion } from 'framer-motion';
import ErrorCont from '../components/ErrorCont';
import { pageTransition, pageVariants } from '../utils';

const Error = () => (
  <motion.main
    className="main"
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <ErrorCont />
  </motion.main>
);
export default Error;
