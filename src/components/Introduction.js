import questionsvg from '../images/question.svg';
import styles from './Introduction.module.scss';
import StartButton from './StartButton';

/* const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}; */

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <img
        className={styles.img}
        src={questionsvg}
        alt="Green question marks circling around a person's head"
      />
      <h1 className={styles.heading}>
        <span className={styles.headingSpan}>
          Generate Your Own Custom Quiz!
        </span>
      </h1>
      <div className={styles.welcome}>
        <p>
          The questions are fetched from the{' '}
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
