import Login from "./auth/SignIn";
import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3001/api/token/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
      }
    })
      .then(res => {
        if (res.status !== 200) {
          setIsLoggedIn(false);
        }
        return res.json();
      })
      .then(data => {
        if (data) {
          console.log(data);
          setIsLoggedIn(true);
        }
      });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/dashboard">
            {isLoggedIn ? <Redirect to="/dashboard" /> : <Login />}
            <Dashboard />
          </Route>
          {/* reset */}
          <Route exact path="/">
            {isLoggedIn ? <Redirect to="/dashboard" /> : <Login />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
