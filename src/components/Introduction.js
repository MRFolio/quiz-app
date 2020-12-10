import styles from "./Introduction.module.scss";
import StartButton from "./StartButton";

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <h1 className={styles.heading}>
        <span className={styles.headingSpan}>
          Generate Your Own Custom Quiz!
        </span>
      </h1>
      <div className={styles.welcome}>
        <p>
          The questions are fetched from the{" "}
          <a
            href="https://opentdb.com/api_config.php"
            target="_blank"
            rel="noreferrer"
            title="Link to Trivia API webpage"
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
