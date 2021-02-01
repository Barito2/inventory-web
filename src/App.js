import './App.css';
import routes from "./configs/route";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from './configs/store';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <Provider store={store}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/units">Unit</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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
