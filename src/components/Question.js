import { AnimatePresence, motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import Countdown from 'react-countdown';
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
    quiz,
    setQuiz,
  } = useQuizContext();

  const { question, correctAnswer, incorrectAnswers } = questions[index];
  const answers = [...incorrectAnswers];

  const history = useHistory();

  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      // Render a completed state
      history.push('/result');
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{seconds} seconds</span>;
    }
  };

  /* completed ? console.log('tere') : <span>{seconds} seconds</span>; */

  const nextQuestion = () => {
    if (index >= questions.length - 1) {
      setIndex(0);
      const now = Date.now();
      const time = now - quiz.time.start;
      setQuiz({ ...quiz, time: { end: time } });
      history.push('/result');
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

  //animation
  const questionVariant = {
    initial: {
      opacity: 0,
      y: -50,
      x: -150,
      scale: 0.6,
    },
    in: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: -100,
      x: 150,
      scale: 1.4,
    },
  };

  const questionTransition = {
    transition: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  const answerVariants = {
    initial: {
      x: -200,
      opacity: 0,
    },
    in: {
      x: 0,
      opacity: 1,
    },
    out: {
      x: 200,
      opacity: 0,
    },
  };

  const answerTransition = {
    transition: 'tween',
    ease: 'backOut',
    duration: 0.4,
  };

  return (
    <article className={styles.container}>
      <AnimatePresence exitBeforeEnter>
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
      <Countdown
        date={Date.now() + Number(quiz.timelimit)}
        onComplete={() => history.push('/result')}
        className={styles.countdown}
        renderer={renderer}
      />
    </article>
  );
};

export default Question;
