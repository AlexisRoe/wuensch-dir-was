import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './components/Button';
import Wishlistitem from './components/wishListitem';
import GlobalStyle from './GlobalStyle';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <ListContainer>
            <Link to="/addList">
              <Wishlistitem title="Martin Luther" />
            </Link>
          </ListContainer>
          <Link to="/addList">
            <Button>+</Button>
          </Link>
        </Route>
        <Route path="/addList">
          <AddPage />
        </Route>
        <Route path="/details">
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
