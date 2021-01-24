import { HalfCircleSpinner } from 'react-epic-spinners';
import styles from './Spinner.module.scss';

const Spinner = () => (
  <HalfCircleSpinner className={styles.spinner} color="#116914" size={50} />
);

export default Spinner;
