import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import { useQuizContext } from './context/QuizContext';
import { Error, Home, Questions, Result, Setup } from './views';

const App = () => {
  const { loading } = useQuizContext();

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Router>
        <Navbar />
        <AnimatePresence
          initial={false}
          exitBeforeEnter
          onExitComplete={() => console.log('exit')}
        >
          <Switch /* location={location} key={location.pathname} */>
            <Route exact path="/" component={Home} />
            <Route path="/setup" component={Setup} />
            <Route path="/result" component={Result} />
            <Route path="/questions" component={Questions} />
            <Route path="*" component={Error} />
          </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
};
export default App;
