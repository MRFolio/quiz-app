import { useQuizContext } from '../context/QuizContext';
import styles from './InfoContainer.module.scss';

const InfoContainer = () => {
  const { correct, index, questions } = useQuizContext();

  return (
    <div className={styles.infoContainer}>
      <span className={styles.infoText}>
        Correct answers: {correct}/{index}
        {/* <strong>[{((correct / index) * 100).toFixed()}%]</strong> */}
      </span>
      <span className={styles.infoText}>
        Total questions: {questions.length}
      </span>
    </div>
  );
};

export default InfoContainer;
