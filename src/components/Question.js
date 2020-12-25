import { AnimatePresence, motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import { useHistory } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import {
  answerTransition,
  answerVariants,
  questionTransition,
  questionVariant,
} from '../utils';
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
    quiz,
    setQuiz,
  } = useQuizContext();

  const history = useHistory();

  const { question, correctAnswer, incorrectAnswers } = questions[index];
  const answers = [...incorrectAnswers];

  const nextQuestion = () => {
    if (index >= questions.length - 1) {
      const now = Date.now();
      const timeSpent = now - quiz.time.start;
      setQuiz({ ...quiz, time: { end: timeSpent } });
      history.push('/result');
    }
    setIndex(index + 1);
  };

  const checkAnswer = (value) => {
    const isCorrect = value === questions[index].correctAnswer;

    if (isCorrect) {
      setCorrect(correct + 1);
    }

    const answerObject = {
      question: questions[index].question,
      answer: value,
      correct: isCorrect,
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
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.h2
          key={question}
          className={styles.question}
          initial="initial"
          animate="in"
          exit="out"
          variants={questionVariant}
          transition={questionTransition}
        >
          {unescapeHtml(question)}
        </motion.h2>
      </AnimatePresence>
      <div className={styles.answersSection}>
        <AnimatePresence exitBeforeEnter>
          {answersWithId.map((answer) => (
            <motion.button
              key={answer.id}
              onClick={() => checkAnswer(answer.answer)}
              className={styles.answersBtn}
              whileHover={{ scale: 1.06, backgroundColor: '#93f4ab' }}
              variants={answerVariants}
              transition={answerTransition}
              initial="initial"
              animate="in"
              exit="out"
            >
              {unescapeHtml(answer.answer)}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
      <InfoContainer />
    </article>
  );
};

export default Question;
