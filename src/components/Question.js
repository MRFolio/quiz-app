import { nanoid } from 'nanoid';
import { useHistory } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import unescapeHtml from '../utils/textConversion';
import InfoContainer from './InfoContainer';
import styles from './Question.module.scss';

const Question = () => {
  const {
    questions,
    index,
    setIndex,
    setCorrect,
    correct,
    userAnswers,
    setUserAnswers,
  } = useQuizContext();

  const { question, correctAnswer, incorrectAnswers } = questions[index];
  const answers = [...incorrectAnswers];

  const history = useHistory();

  const nextQuestion = () => {
    /* setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        history.push('/result');
        return 0;
      } else {
        return index;
      }
    }); */
    if (index >= questions.length - 1) {
      setIndex(0);
      history.push('/result');
      /* history.push({
        pathname: '/result',
        state: { answeredQuestions },
      }); */
    }
    setIndex(index + 1);
  };

  const checkAnswer = (value) => {
    const correctAnswer = value === questions[index].correctAnswer;

    if (correctAnswer) {
      setCorrect(correct + 1);
    }

    const answerObject = {
      question: questions[index].question,
      answer: value,
      correct: correctAnswer,
      correctAnswer: questions[index].correctAnswer,
    };

    setUserAnswers([...userAnswers, answerObject]);
    nextQuestion();
  };

  const randomNumber = Math.floor(Math.random() * (answers.length + 1));

  if (randomNumber === 3) {
    answers.push(correctAnswer);
  } else {
    answers.push(incorrectAnswers[randomNumber]);
    answers[randomNumber] = correctAnswer;
  }

  // map through for nanoid
  const answersWithId = answers.map((answer) => {
    const answerId = nanoid();
    const newObject = {
      id: answerId,
      answer,
    };
    return newObject;
  });

  return (
    <article className={styles.container}>
      <h2 className={styles.question}>{unescapeHtml(question)}</h2>
      <div className={styles.answersSection}>
        {answersWithId.map((answer) => (
          <button
            key={answer.id}
            onClick={() => checkAnswer(answer.answer)}
            className={styles.answersBtn}
          >
            {unescapeHtml(answer.answer)}
          </button>
        ))}
      </div>
      <InfoContainer />
    </article>
  );
};

export default Question;
