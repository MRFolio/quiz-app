import { useQuizContext } from "../context/QuizContext";
import styles from "./Question.module.scss";

const Question = () => {
  const { questions, index } = useQuizContext();
  return (
    <article>
      <h2 classname={styles.question}>{questions[index].question}</h2>
      <p className={styles.answers}></p>
      <p className={styles.answers}></p>
      <p className={styles.answers}></p>
      <p className={styles.answers}></p>
    </article>
  );
};

export default Question;
