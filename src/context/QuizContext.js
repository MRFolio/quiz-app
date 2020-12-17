import { createContext, useContext, useState } from 'react';

const QuizContext = createContext(null);

const initialQuizState = {
  amount: 10,
  category: 21,
  difficulty: 'easy',
};

const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState(initialQuizState);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  // handleSubmit
  // async function -> end of the event loop
  // await call api
  // await json
  // setQuestion
  // redirect

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
        showModal,
        setShowModal,
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
