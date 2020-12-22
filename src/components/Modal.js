import { useCallback, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useQuizContext } from '../context/QuizContext';
import unescapeHtml from '../utils/textConversion';
import styles from './Modal.module.scss';

const Modal = () => {
  const { showModal, setShowModal, userAnswers } = useQuizContext();
  const modalRef = useRef(null);

  const handleClick = useCallback(
    (e) => (modalRef.current.contains(e.target) ? null : setShowModal(false)),
    [setShowModal]
  );

  useEffect(() => {
    showModal
      ? document.addEventListener('mousedown', handleClick)
      : document.removeEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, [handleClick, showModal]);

  return (
    <section className={styles.modal} onClick={handleClick}>
      <div ref={modalRef} className={styles['modal-content']}>
        <h3 className={styles.title}>Overview of your answers</h3>
        {userAnswers
          .sort((a, b) => a.correct - b.correct)
          .map((answer, index) => (
            <article
              className={styles[`question${answer.correct ? '' : 'Incorrect'}`]}
              key={index}
            >
              <h1 className={styles.heading}>
                {unescapeHtml(answer.question)}
              </h1>
              <div className={styles.answers}>
                <p>Your answer:</p>
                <p className={styles.rightText}>
                  <strong>{answer.answer}</strong>
                </p>
              </div>
              <div className={styles.answers}>
                <p>Correct answer: </p>
                <p className={styles.rightText}>
                  <strong> {answer.correctAnswer}</strong>
                </p>
              </div>
              <p className={styles.number}>{index + 1}</p>
            </article>
          ))}
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
