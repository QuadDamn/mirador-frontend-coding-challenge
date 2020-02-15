import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import NewAccountPage from './pages/NewAccountPage';
import DisqualificationPage from './pages/DiqualificationPage';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>
                    <Route path="/new-account">
                        <NewAccountPage/>
                    </Route>
                    <Route path="/disqualified">
                        <DisqualificationPage/>
                    </Route>
                    <Route render={() => (<h1>404 Not Found</h1>)}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
