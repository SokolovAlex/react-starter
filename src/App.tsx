import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./views/NoMatch";
import routes from "./routes";
import { Wrapper, Title, Nav } from "./components/atoms";
import { Link } from "./components/Link/Link";

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Title>Broker App</Title>
          <Nav>
            {routes.map((route, i) => <Link key={i} {...route} />)}
          </Nav>
          <Switch>
            {routes.map((route, i) => <Route key={i} {...route}/>)}
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;