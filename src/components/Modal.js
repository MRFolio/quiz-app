import { FaTimes } from 'react-icons/fa';
import { useQuizContext } from '../context/QuizContext';
import unescapeHtml from '../utils/textConversion';
import styles from './Modal.module.scss';

const Modal = () => {
  const { setShowModal, userAnswers } = useQuizContext();

  const handleClick = () => setShowModal(false);

  return (
    <section className={styles.modal} onClick={handleClick}>
      <div className={styles['modal-content']}>
        <h3 className={styles.close}>
          Overview of all the questions and answers
        </h3>
        {userAnswers
          .sort((a, b) => a.correct - b.correct)
          .map((answer, index) => {
            return (
              <article
                className={
                  styles[`question${answer.correct ? '' : 'Incorrect'}`]
                }
                key={index}
              >
                <h1 className={styles.heading}>
                  {unescapeHtml(answer.question)}
                </h1>

                <div className={styles.answers}>
                  <p>Your answer:</p>
                  <p className={styles.leftText}>
                    <strong>{answer.answer}</strong>
                  </p>
                </div>
                <div className={styles.answers}>
                  <p>Correct answer: </p>
                  <p className={styles.leftText}>
                    <strong> {answer.correctAnswer}</strong>
                  </p>
                </div>
              </article>
            );
          })}
        <button
          className={styles.btn}
          onClick={() => setShowModal(false)}
          aria-label="close"
          title="Close modal"
        >
          <FaTimes className={styles.icon} />
        </button>
      </div>
    </section>
  );
};

export default Modal;
