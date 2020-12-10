import { useEffect, useRef } from "react";
import { useQuizContext } from "../context/QuizContext";
import styles from "./SetupForm.module.scss";

const SetupForm = () => {
  const { quiz, handleSubmit, handleChange } = useQuizContext();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3 className={styles.heading}>Set up your Quiz!</h3>
        <div className={styles.form}>
          <label htmlFor="amount">Number of questions:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder={10}
            min={10}
            max={50}
            className={styles.formControl}
            onChange={handleChange}
            value={quiz.amount}
            ref={inputRef}
          />
        </div>
        <div className="selectionTwo">
          <label htmlFor="category">Select category:</label>
          <select
            name="category"
            id="category"
            className={styles.formControl}
            onChange={handleChange}
            value={quiz.category}
          >
            <option value={10}>Books</option>
            <option value={11}>Film</option>
            <option value={12}>Music</option>
            <option value={21}>Sports</option>
            <option value={22}>Geography</option>
            <option value={23}>History</option>
            <option value={24}>Politics</option>
          </select>
        </div>
        <div className="selectionThree">
          <label htmlFor="difficulty">Select difficulty:</label>
          <select
            name="difficulty"
            id="difficulty"
            className={styles.formControl}
            onChange={handleChange}
            value={quiz.difficulty}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        {/* LINK */}
        <button type="submit" className={styles.btn}>
          Start Quiz
        </button>
      </form>
    </section>
  );
};
export default SetupForm;
