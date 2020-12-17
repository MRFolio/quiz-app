import { useState } from 'react';
import { FiChevronsDown, FiChevronsUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import styles from './EndScreen.module.scss';

const EndScreen = () => {
  const [showMore, setShowMore] = useState(false);

  const {
    correct,
    questions,
    userAnswers,
    showModal,
    setShowModal,
  } = useQuizContext();

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Quiz finished!</h2>
      <p className={styles.resultText}>
        Your final score is <strong>{correct} </strong>out of{' '}
        <strong>{questions.length}</strong>.
      </p>
      <p className={styles.resultText}>
        You answered{' '}
        <strong>{((correct / questions.length) * 100).toFixed(0)}%</strong> of
        questions correctly.
      </p>
      <Link to="/setup" title="Start a new quiz">
        <button className={styles.btn} aria-label="Go to setup page">
          Setup a new quiz
        </button>
      </Link>
      <button
        onClick={handleClick}
        className={styles.btn}
        title="Show questions and answers"
        aria-label="Expand to see questions and answers"
      >
        Show answered questions in detail
        {showMore ? <FiChevronsUp /> : <FiChevronsDown />}
      </button>
      {/* {showModal && <Modal />}
      <button onClick={() => setShowModal(true)}>Tere</button> */}
      {showMore &&
        userAnswers.map((answer, index) => {
          console.log(answer);
          return (
            <article key={index}>
              <h1>{unescapeHtml(answer.question)}</h1>
            </article>
          );
        })}
    </section>
  );
};

export default EndScreen;
