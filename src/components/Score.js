import styles from "./Score.module.scss";

const Score = () => {
  return (
    <article>
      <h1>Your score: </h1>
      <button className={styles.btn}>Play Again</button>
    </article>
  );
};
export default Score;
