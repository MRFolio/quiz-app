import { nanoid } from 'nanoid';
import { useQuizContext } from '../context/QuizContext';
import styles from './Question.module.scss';

function unescapeHtml(safe) {
  return safe
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

const Question = () => {
  const { questions, index } = useQuizContext();
  const { question, correctAnswer, incorrectAnswers } = questions[index];
  const answers = [correctAnswer, ...incorrectAnswers];

  return (
    <article className={styles.container}>
      <h2 className={styles.question}>{unescapeHtml(question)}</h2>
      <div className={styles.answersSection}>
        {answers.map((answer) => {
          const answerID = nanoid();
          return (
            <button
              key={answerID}
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
