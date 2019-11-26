import React, { Component, Fragment } from "react";
import Login from "../src/components/Login.js";
import Home from "../src/components/Home";
import State from "../src/components/State";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import District from "./components/District.js";
import Child from "./components/Child.js";
import Addchild from "./components/Addchild.js";
import Viewchild from "./components/Viewchild.js";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/home" exact component={Home} />
              <Route path="/state" exact component={State} />
              <Route path="/district" exact component={District} />
              <Route path="/child" exact component={Child} />
              <Route path="/addchild" exact component={Addchild} />
              <Route path="/info/:id" exact component={Viewchild} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}
