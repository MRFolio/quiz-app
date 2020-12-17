import { NavLink } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { correct } = useQuizContext();
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        {/* <Link to="/">
          <img
            className={styles.icon}
            src={icon}
            alt="icon with question marks around a person"
            title="Go to home page"
          />
        </Link> */}
        <h1 className={styles.heading}>Quiz App</h1>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink
              exact
              to="/"
              activeClassName={styles.selected}
              /* activeStyle={{
                fontWeight: "bold",
                color: "red",
              }} */
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/setup" activeClassName={styles.selected}>
              Setup
            </NavLink>
          </li>
          {correct > 0 && (
            <li>
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
