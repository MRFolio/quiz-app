import { BsThreeDotsVertical } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import grey from '../images/grey.png';
import styles from './EndScreen.module.scss';
import Modal from './Modal';

const EndScreen = () => {
  const { correct, questions, showModal, setShowModal } = useQuizContext();

  const history = useHistory();

  const handleClick = () => {
    history.push('/setup');
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Quiz finished!</h2>

      <p className={styles.resultText}>
        Your final score is <strong>{correct} </strong>out of{' '}
        <strong>{questions.length}</strong>.
      </p>
      <article className={styles.result}>
        <img
          src={grey}
          alt="background pattern greyscale"
          className={styles.image}
        />
        <p className={styles.resultNumber}>Your Score</p>
        <p className={styles.resultNumber}>Advanced</p>
        <p className={styles.resultNumber}>100%</p>
      </article>
      <p className={styles.resultText}>
        You answered{' '}
        <strong>{((correct / questions.length) * 100).toFixed(0)}%</strong> of
        questions correctly.
      </p>
      <button
        onClick={() => setShowModal(true)}
        className={styles.btnInfo}
        title="Show all the questions and answers"
        aria-label="Click to see questions and answers"
      >
        Show overview of all the questions and answers
        <BsThreeDotsVertical className={styles.icon} />
      </button>
      <button
        onClick={handleClick}
        className={styles.btn}
        aria-label="Go to setup page"
      >
        Set up a new quiz
      </button>

      {showModal && <Modal />}
      {/* <button onClick={() => setShowModal(true)}>Tere</button> */}
      {/* {showMore &&
        userAnswers.map((answer, index) => {
          return (
            <article key={index}>
              <h1>{unescapeHtml(answer.question)}</h1>
            </article>
          );
        })} */}
    </section>
  );
};

export default EndScreen;
