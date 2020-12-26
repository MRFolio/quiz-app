import { motion } from 'framer-motion';
import Introduction from '../components/Introduction';
import { pageTransition, pageVariants } from '../utils';

const Home = () => (
  <motion.main
    initial="initial"
    animate="in"
    variants={pageVariants}
    transition={pageTransition}
    className="main"
  >
    <Introduction />
  </motion.main>
);

export default Home;
