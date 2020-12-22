import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdReplay } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import styles from './EndScreen.module.scss';
import Modal from './Modal';

const EndScreen = () => {
  const { correct, questions, showModal, setShowModal } = useQuizContext();

  const history = useHistory();

  const handleClick = () => {
    history.push('/setup');
  };

  const score = ((correct / questions.length) * 100).toFixed(0);

  const rating = (score) => {
    if (score < 40) {
      return 'Beginner';
    } else if (score > 60) {
      return 'Competent';
    } else if (score > 85) {
      return 'Expert';
    } else {
      return 'Intermediate';
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Quiz finished!</h2>
      <article className={styles.result}>
        <p className={styles.resultHeading}>Your Score</p>
        <p className={styles.resultNumber}>
          <strong>{score}%</strong>
        </p>
        <p className={styles.resultInfo}>{rating(score)}</p>
      </article>
      <p className={styles.resultText}>
        You answered <strong>{correct} </strong>out of {}
        <strong>{questions.length}</strong> questions correctly.
      </p>
      <button
        onClick={() => setShowModal(true)}
        className={styles.btnInfo}
        title="Show all the questions and answers"
        aria-label="Click to see questions and answers"
      >
        Show your questions and answers
        <BsThreeDotsVertical className={styles.icon} />
      </button>
      <button
        onClick={handleClick}
        className={styles.btn}
        aria-label="Go to setup page"
      >
        Set up a new quiz
        <MdReplay className={styles.icon} />
      </button>
      {showModal && <Modal />}
    </section>
  );
};

export default EndScreen;
