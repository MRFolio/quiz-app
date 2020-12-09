import { Link } from "react-router-dom";
import styles from "./StartButton.module.scss";

const StartButton = () => (
  <Link to="/setup">
    <button className={styles.btn}>Get Started</button>
  </Link>
);

export default StartButton;
