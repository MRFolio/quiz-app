import { motion } from 'framer-motion';
import SetupForm from '../components/SetupForm';
import { pageTransition, pageVariants } from '../utils';

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
