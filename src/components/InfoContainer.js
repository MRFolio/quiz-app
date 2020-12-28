import { AnimatePresence, motion } from 'framer-motion';
import { useQuizContext } from '../context/QuizContext';
import styles from './InfoContainer.module.scss';

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  out: { opacity: 0 },
};

const transitionItems = {
  transition: 'tween',
  ease: 'backOut',
  duration: 0.6,
};

const InfoContainer = () => {
  const { correct, index, questions } = useQuizContext();

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={styles.infoContainer}
        variants={itemVariants}
        transition={transitionItems}
        initial="hidden"
        animate="show"
        exit="out"
        key={index}
      >
        {index > 0 && (
          <span className={styles.infoText}>
            Correct answers: {correct}/{index}
          </span>
        )}
        <span className={styles.infoText}>
          Total questions: {questions.length}
        </span>
      </motion.div>
    </AnimatePresence>
  );
};

export default InfoContainer;
