import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from './components/Button';
import Wishlistitem from './components/wishListitem';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/addList">AddList</Route>
        <Route path="/">
          <Wishlistitem title="Martin Luther" />
          <Link href="/addList">
            <Button>+</Button>
          </Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
