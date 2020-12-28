import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Error, Home, Questions, Result, Setup } from './views';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/setup" component={Setup} />
      <Route path="/result" component={Result} />
      <Route path="/questions" component={Questions} />
      <Route path="*" component={Error} />
    </Switch>
  </Router>
);

export default App;
