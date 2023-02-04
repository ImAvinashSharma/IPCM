import Login from "./auth/Sign";
import React from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const loggedIn = true;

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/dashboard">
            {loggedIn ? <Redirect to="/dashboard" /> : <Login />}
            <Dashboard />
          </Route>
          {/* reset */}
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
