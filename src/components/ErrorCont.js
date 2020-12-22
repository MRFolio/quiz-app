import { Link } from 'react-router-dom';
import styles from './ErrorCont.module.scss';

const ErrorCont = () => (
  <section className={styles.container}>
    <h3 className={styles.heading}>Sorry, no matching page!</h3>
    <Link className={styles.link} to="/" style={{ textDecoration: 'inherit' }}>
      Back Home!
    </Link>
  </section>
);

export default ErrorCont;
