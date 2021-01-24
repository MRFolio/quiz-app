import { motion } from 'framer-motion';
import questionsvg from '../images/question.svg';
import {
  container,
  item1,
  item2,
  item3,
  transitionItems,
  transitionItems2,
} from '../utils';
import styles from './Introduction.module.scss';
import StartButton from './StartButton';

const Introduction = () => (
  <motion.section
    className={styles.introduction}
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.div
      variants={item3}
      transition={transitionItems2}
      className={styles.circle}
    >
      <motion.img
        className={styles.img}
        src={questionsvg}
        alt="Green question marks circling around a person's head"
        variants={item3}
        transition={transitionItems2}
      />
    </motion.div>
    <motion.h1
      className={styles.heading}
      variants={item2}
      transition={transitionItems}
    >
      <span className={styles.headingSpan}>Generate Your Own Custom Quiz!</span>
    </motion.h1>
    <motion.div
      className={styles.welcome}
      variants={item1}
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
