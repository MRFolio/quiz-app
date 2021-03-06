import { motion } from 'framer-motion';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import styles from './StartButton.module.scss';

const item = {
  hidden: { opacity: 0, y: 100, scale: 1 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const transitionItems = {
  transition: 'tween',
  ease: 'backOut',
  duration: 0.5,
};

const StartButton = () => (
  <Link to="/setup" style={{ textDecoration: 'inherit' }}>
    <motion.button
      className={styles.btn}
      aria-label="Start quiz setup"
      variants={item}
      transition={transitionItems}
    >
      Get Started <GoChevronRight className={styles.icon} />
    </motion.button>
  </Link>
);

export default StartButton;
