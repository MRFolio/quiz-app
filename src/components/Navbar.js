import { Link, NavLink } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { correct } = useQuizContext();

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <h1 className={styles.heading} title="Go to homepage">
            Quiz App
          </h1>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li title="Go to homepage">
            <NavLink exact to="/" activeClassName={styles.selected}>
              Home
            </NavLink>
          </li>
          <li title="Go to setup page">
            <NavLink to="/setup" activeClassName={styles.selected}>
              Setup
            </NavLink>
          </li>
          {correct > 0 && (
            <li title="Go to result page">
              <NavLink
                to="/result"
                activeClassName={styles.selected}
                className={styles.link}
              >
                Result
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
