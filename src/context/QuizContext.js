import { createContext, useContext, useState } from 'react';

const QuizContext = createContext(null);

const initialQuizState = {
  amount: 10,
  category: 21,
  difficulty: 'easy',
  time: {
    start: 0,
    end: 10,
  },
};

const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState(initialQuizState);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  return (
    <QuizContext.Provider
      value={{
        quiz,
        setQuiz,
        questions,
        setQuestions,
        index,
        setIndex,
        correct,
        setCorrect,
        userAnswers,
        setUserAnswers,
        handleChange,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

//custom hook
const useQuizContext = () => useContext(QuizContext);

export { useQuizContext, QuizProvider };
