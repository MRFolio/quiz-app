import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import styles from './Question.module.scss';

const unescapeHtml = (safe) =>
  safe
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");

const Question = () => {
  const [answeredQuestions, setAnsweredQuestions] = useState();
  /* const [answeredQuestions, setAnsweredQuestions] = useState(); */
  const { questions, index, setIndex, setCorrect, correct } = useQuizContext();

  const { question, correctAnswer, incorrectAnswers } = questions[index];
  const answers = [...incorrectAnswers];

  const history = useHistory();

  const nextQuestion = () => {
    if (index > questions.length - 1) {
      history.push({
        pathname: '/result' /* , state: { answeredQuestions } */,
      });
    }
    setIndex(index + 1);
  };

  const checkAnswer = (answer) => {
    if (answer) {
      setCorrect(correct + 1);
    }
    nextQuestion();
  };

  const randomNumber = Math.floor(Math.random() * (answers.length + 1));

  if (randomNumber === 3) {
    answers.push(correctAnswer);
  } else {
    answers.push(incorrectAnswers[randomNumber]);
    answers[randomNumber] = correctAnswer;
  }

  console.log(answers);

  // map through for nanoid
  const answersWithId = answers.map((answer) => {
    const answerId = nanoid();
    return answer /* , (id: answerId)} */;
  });

  console.log(answersWithId);

  return (
    <article className={styles.container}>
      <h2 className={styles.question}>{unescapeHtml(question)}</h2>
      <div className={styles.answersSection}>
        {answers.map((answer, index) => {
          return (
            <button
              key={index}
              onClick={() => checkAnswer(correctAnswer === answer)}
              className={styles.answersBtn}
            >
              {unescapeHtml(answer)}
            </button>
          );
        })}
      </div>
    </article>
  );
};

export default Question;
