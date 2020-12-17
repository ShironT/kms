import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/layouts/navbar";
import Home from "./components/pages/home";
import Login from "./components/auth/login";
import PostAProblem from "./components/pages/postAProblem";
import ProblemList from "./components/pages/problemList";
import ExpertList from "./components/pages/expertList";
import Register from "./components/auth/register";
import Footer from "./components/layouts/footer";
import SolutionForm from "./components/pages/solutionForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/post-a-problem" component={PostAProblem} />
            <Route path="/problem-list" component={ProblemList} />
            <Route path="/expert-list" component={ExpertList} />
            <Route path="/solution-form" component={SolutionForm} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
