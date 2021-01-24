import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdReplay } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import styles from './EndScreen.module.scss';
import Modal from './Modal';

const rating = (userScore) => {
  if (userScore < 40) {
    return 'Beginner';
  } else if (userScore > 60) {
    return 'Competent';
  } else if (userScore > 85) {
    return 'Expert';
  } else {
    return 'Intermediate';
  }
};

const isNanFix = (number) => (isNaN(number) ? 0 : number);

const EndScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const { correct, questions, quiz } = useQuizContext();

  const history = useHistory();

  const {
    time: { end },
  } = quiz;

  const elapsedTime = (end / 1000).toFixed();
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime - minutes * 60;
  const minuteText = minutes === 1 ? 'minute' : 'minutes';
  const secondsText = seconds === 1 ? 'second' : 'seconds';
  const formatedTime =
    minutes > 0
      ? `${minutes} ${minuteText} ${seconds} seconds`
      : `${elapsedTime} ${secondsText}`;

  const handleClick = () => history.push('/setup');

  const score = ((correct / questions.length) * 100).toFixed();

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.headingSpan}>Quiz finished!</span>
      </h2>
      <article className={styles.result}>
        <p className={styles.resultHeading}>Your Score:</p>
        <p className={styles.resultNumber}>
          <strong>{isNanFix(score)}</strong>
          <span className={styles.percent}>%</span>
        </p>
        <p className={styles.resultInfo}>
          {isNanFix(score) !== 0 ? rating(score) : 'Beginner'}
        </p>
      </article>
      <div className={styles.textWrapper}>
        <p className={styles.resultText}>
          You answered <strong>{correct} </strong>out of {}
          <strong>{questions.length}</strong> questions correctly.
        </p>
        <div className={styles.separator}></div>
        <p className={styles.resultText}>
          Time spent: <strong>{formatedTime}</strong>.
        </p>
      </div>
      <button
        onClick={() => setShowModal(true)}
        className={styles.btn}
        title="Show all the questions and answers"
        aria-label="Go to questions and answers modal page"
      >
        Show the questions and answers
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
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </section>
  );
};

export default EndScreen;
