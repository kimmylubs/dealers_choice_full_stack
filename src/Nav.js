import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = ({ teas, toppings, milks, location: { pathname } }) => {
  return (
    <div>
      <h2> 🧋 Double Bubble Trouble 🧋 </h2>
      <nav>
      <Link to="/" className={pathname === "/" ? "selected" : ""}>
      Cart
      </Link>
      <Link to="/teas" className={pathname === "/teas" ? "selected" : ""}>
       Teas ({teas.length})
      </Link>
      <Link to="/toppings" className={pathname === "/toppings" ? "selected" : ""}>
       Toppings ({toppings.length})
      </Link>
      <Link to="/milks" className={pathname === "/milks" ? "selected" : ""}>
       Milks ({milks.length})
      </Link>
      </nav>
    </div>
  );
};

export default connect((state) => state)(Nav);
// connect should get passed to store
// ths allows us to map props
// "state => state" is equivalent to a function getting a state and returning the state
