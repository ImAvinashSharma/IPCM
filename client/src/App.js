import SignIn from "./auth/SignIn";
import Forgot from "./auth/Forgot";
import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./auth/SignUp";
import Home from "./components/Home";
import AddItemsToVault from "./components/AddItemsToVault";
import Settings from "./components/Settings";

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
            <Redirect to="/dashboard" />
            <Dashboard />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/forgotpassword">
            <Forgot />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addItemToVault">
            <AddItemsToVault />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
