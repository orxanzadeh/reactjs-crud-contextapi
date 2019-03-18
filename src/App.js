import React, { Component } from "react";
import Index from "./components/Index";
import About from "./components/About";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UpdateUser from "./components/UpdateUser";


class App extends Component {

  // deleteUser = (id) => {
  //   this.setState({
  //     users: this.state.users.filter(user => id !== user.id)
  //   });
  // };

  //deleteUser={this.deleteUser} users={this.state.users}

  render() {
    return (
      <Router>
        <div className="container">
          <h3 className="text-center mt-3 ">ReactJs simple crud operations with Context API</h3>

          <ul className="nav bg-light mt-3 mb-3">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home page
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/edit/:id" component={UpdateUser} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
