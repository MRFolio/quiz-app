import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import styles from './SetupForm.module.scss';
import Spinner from './Spinner';

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const SetupForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    quiz,
    handleChange,
    setQuestions,
    questions,
    setCorrect,
    setIndex,
    setUserAnswers,
  } = useQuizContext();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCorrect(0);
    setIndex(0);
    setUserAnswers([]);
    const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

    try {
      const response = await fetch(url);
      const { results } = await response.json();

      if (results) {
        const questions = results.map(
          ({
            question,
            correct_answer: correctAnswer,
            incorrect_answers: incorrectAnswers,
          }) => {
            return {
              question,
              correctAnswer,
              incorrectAnswers,
            };
          }
        );
        setQuestions(questions);
      } else {
        setQuestions([]);
      }
      history.push({ pathname: '/questions', state: { questions } });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Spinner />;
  }

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
        <button type="submit" className={styles.btn}>
          Start Quiz
        </button>
      </form>
    </section>
  );
};

export default SetupForm;
