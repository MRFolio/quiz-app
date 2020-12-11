import { Link } from "react-router-dom";
import styles from "./StartButton.module.scss";

const StartButton = () => {
  return (
    <Link to="/setup">
      <button className={styles.btn} aria-label="Start quiz setup">
        Get Started
      </button>
    </Link>
  );
};

export default StartButton;
