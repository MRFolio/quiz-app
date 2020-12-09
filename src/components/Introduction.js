import styles from "./Introduction.module.scss";
import StartButton from "./StartButton";

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <h1 className={styles.heading}>Welcome to Quiz app!</h1>
      <div className={styles.welcome}>
        <p>On this website you can set up a custom-made quiz.</p>
        <p>
          The questions are fetched from the{" "}
          <a
            href="https://opentdb.com/api_config.php"
            target="_blank"
            rel="noreferrer"
          >
            Open Trivia Database.
          </a>
        </p>
      </div>
      <StartButton />
    </section>
  );
};

export default Introduction;
