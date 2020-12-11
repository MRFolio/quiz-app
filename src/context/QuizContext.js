import { createContext, useContext, useState } from "react";

const QuizContext = createContext(null);

/* const API_ENDPOINT = "https://opentdb.com/api.php?"; */

const initialQuizState = {
  amount: 10,
  category: 21,
  difficulty: "easy",
};

const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState(initialQuizState);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);

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
      value={{ quiz, questions, handleChange, setQuestions, setQuiz }}
    >
      {children}
    </QuizContext.Provider>
  );
};

//custom hook
const useQuizContext = () => useContext(QuizContext);

export { useQuizContext, QuizProvider };
