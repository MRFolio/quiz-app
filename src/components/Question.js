import { useQuizContext } from "../context/QuizContext";
import styles from "./Question.module.scss";

const Question = () => {
  const { questions, index } = useQuizContext();
  console.log(questions[0].question);
  return (
    <article className={styles.container}>
      <h2 className={styles.question}>{questions[0].question}</h2>
      <p className={styles.answers}></p>
      <p className={styles.answers}></p>
      <p className={styles.answers}></p>
      <p className={styles.answers}></p>
    </article>
  );
};

export default Question;
