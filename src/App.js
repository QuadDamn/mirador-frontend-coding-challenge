import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './pages/LandingPage';

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            {/*<Route path="/about">*/}
            {/*  <About />*/}
            {/*</Route>*/}
            {/*<Route path="/dashboard">*/}
            {/*  <Dashboard />*/}
            {/*</Route>*/}
          </Switch>
        </div>
      </Router>
  );
}

export default App;
