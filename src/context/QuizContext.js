import { createContext, useContext, useState } from "react";

const QuizContext = createContext(null);

const initialQuizState = {
  amount: 10,
  category: 21,
  difficulty: "easy",
};

const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState(initialQuizState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;
    //fetchfunction
  };

  return (
    <QuizContext.Provider value={{ quiz, handleSubmit, handleChange }}>
      {children}
    </QuizContext.Provider>
  );
};

//custom hook
const useQuizContext = () => useContext(QuizContext);

export { useQuizContext, QuizProvider };
