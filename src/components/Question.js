import { useQuizContext } from '../context/QuizContext';
import styles from './Question.module.scss';

const unescapeHtml = (safe) =>
  safe
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");

/* const addAnswerEnd = (answerItem, array) => {
  array.push(answerItem);
}; */

/* const addAnswerInsideArray = (answerItem, randomNumber) => {
  addAnswerEnd(answerItem, array);
  array[randomNumber] = correctAnswer;
}; */

const Question = () => {
  const { questions, index } = useQuizContext();
  const { question, correctAnswer, incorrectAnswers } = questions[index];
  const answers = [...incorrectAnswers];

  const randomNumber = Math.floor(Math.random() * (answers.length + 1));

  /* randomNumber === 3
    ? addAnswerEnd(correctAnswer)
    : addAnswerInsideArray(incorrectAnswers[randomNumber], randomNumber); */

  if (randomNumber === 3) {
    answers.push(correctAnswer);
  } else {
    answers.push(incorrectAnswers[randomNumber]);
    answers[randomNumber] = correctAnswer;
  }

  // map through for nanoid

  console.log(randomNumber);

  return (
    <article className={styles.container}>
      <h2 className={styles.question}>{unescapeHtml(question)}</h2>
      <div className={styles.answersSection}>
        {answers.map((answer, index) => {
          return (
            <button
              key={index}
              /* onClick={() => console.log(answerID)} */
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
