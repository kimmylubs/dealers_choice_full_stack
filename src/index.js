import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";
import { Provider, connect } from "react-redux";
import store, { loadMilks, loadTeas, loadToppings} from "./store";
import Topping from "./Topping";
import Tea from "./Tea";
import Milk from "./Milk";
import Nav from "./Nav";
import Cart from "./Cart";
import { HashRouter as Router, Route, Link } from "react-router-dom";

const App = connect(
  (state) => (state),
  (dispatch) => {
    return {
      bootstrap: () => {
        dispatch(loadTeas());
        dispatch(loadToppings());
        dispatch(loadMilks());
      },
    };
  }
)(
  class App extends Component {
    componentDidMount() {
      this.props.bootstrap();
    }
    render() {
      return (
        <Router>
        <div>
        <Route component={Nav} />
        <Route component={Cart} path="/" exact />
        <Route component={Tea} path="/teas" exact />
        <Route component={Topping} path="/toppings" exact />
        <Route component={Milk} path="/milks" exact />
        </div>
        </Router>
      );
    }
  }
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

