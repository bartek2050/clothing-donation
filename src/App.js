import React from 'react';
import {Route, Router, Switch} from "react-router";
import Home from "./components/Home";

function App() {
  return (
      //TODO co to jest history??
      <Router>
        <Switch>
            <Route path={"/"} exact component={Home}/>
        </Switch>
      </Router>
  );
}

export default App;
