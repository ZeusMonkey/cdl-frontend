import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './constants/routes.json';

import Header from './components/Header';
import HomePage from './pages/HomePage';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
