import { motion } from 'framer-motion';
import questionsvg from '../images/question.svg';
import styles from './Introduction.module.scss';
import StartButton from './StartButton';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      /* delayChildren: 0.2, */
      /* when: 'beforeChildren', */
      /* staggerDirection: -1, */
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 125 },
  show: { opacity: 1, x: 0 },
};

const item2 = {
  hidden: { opacity: 0, x: -125 },
  show: { opacity: 1, x: 0 },
};

const item3 = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};

const transitionItems = {
  transition: 'tween',
  ease: 'backOut',
  duration: 0.8,
};

const transitionItems2 = {
  transition: 'tween',
  ease: 'backInOut',
  duration: 1.35,
};

const Introduction = () => (
  <motion.section
    className={styles.introduction}
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.img
      className={styles.img}
      src={questionsvg}
      alt="Green question marks circling around a person's head"
      variants={item3}
      transition={transitionItems2}
    />
    <motion.h1
      className={styles.heading}
      variants={item2}
      transition={transitionItems}
    >
      <span className={styles.headingSpan}>Generate Your Own Custom Quiz!</span>
    </motion.h1>
    <motion.div
      className={styles.welcome}
      variants={item}
      transition={transitionItems}
    >
      <p>
        The questions are fetched from the{' '}
        <a
          href="https://opentdb.com/api_config.php"
          target="_blank"
          rel="noreferrer"
          title="Link to Trivia API webpage"
        >
          Open Trivia Database.
        </a>
      </p>
    </motion.div>
    <StartButton />
  </motion.section>
);

export default Introduction;
