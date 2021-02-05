import './App.css';
import routes from "./configs/route";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from './configs/store';
import { NavbarComponent } from "./components";
import { Container, Jumbotron } from 'react-bootstrap';

function App() {
  return (
    <Provider store={store}>
      <NavbarComponent />
      <Container>
        <Router>
          <Switch>
            {
              routes.map((e, i) => {
                return (
                  <Route exact={e.exact} key={i} path={e.path}>
                    {e.component}
                  </Route>
                )
              })
            }
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
