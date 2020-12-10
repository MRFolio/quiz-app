import styles from "./EndScreen.module.scss";

const EndScreen = () => {
  const restartQuiz = () => {
    setCorrect(0);
  };

  return (
    <div className="EndScreen">
      <h1>Quiz finised!!</h1>
      <p>
        Your final score is {score} out of {Questions.length}
      </p>
      <button /* onClick={restartQuiz} */ className={styles.btn}>
        Restart Quiz
      </button>
    </div>
  );
};

export default EndScreen;
