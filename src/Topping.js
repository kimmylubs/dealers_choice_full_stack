import React from "react";
import { connect } from "react-redux";
import { createTopping, deleteTopping } from "./store";

const adj = ["Black Jelly",'Lychee Jelly','White Pearls','Popping Jelly','Brown Boba',"Aloe"] 

const Topping = ({ toppings, create, destroy }) => {
  return (
    <div>
      <h4> (ﾉ◕ヮ◕)ﾉ Topping Options ヽ(◕ヮ◕ヽ)</h4>
      <button id='CreateButton' onClick={() => create(adj[Math.floor(Math.random() * adj.length)])}>Create Topping </button>
      <ul >
        {toppings.map((topping) => {
          return <li key={topping.id}>{topping.name}
          <button id='xButton' onClick={()=>destroy(topping)}> x </button>
          </li>;
        })}
      </ul>
    </div>
  );
};

const mapState = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    create: (name) => {
      dispatch(createTopping(name));
    },
    destroy: (topping) => {
      dispatch(deleteTopping(topping));
    }
  };
};

export default connect(mapState, mapDispatchToProps)(Topping);
