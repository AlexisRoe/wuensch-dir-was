import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addList">
          <AddPage />
        </Route>
        <Route path="/details/:id">
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
