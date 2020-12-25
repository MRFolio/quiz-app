import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Error, Home, Questions, Result, Setup } from './views';

const App = () => {
  /* const location = useLocation(); */
  return (
    <>
      <Router>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
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
