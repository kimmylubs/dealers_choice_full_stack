import React from "react";
import { connect } from "react-redux";
import { createMilk, deleteMilk } from "./store";

const adj = ["Whole", "Skim", "Soy", "Low-Fat", "Rice", "Coconut", "Cashew"];

const Milk = ({ milks, create, destroy }) => {
  return (
    <div>
      <h4> 🥛 Milk Options 🥛</h4>
      <button id="CreateButton" onClick={() => create(adj[Math.floor(Math.random() * adj.length)])}>
        Create Milk
      </button>
      <ul>
        {milks.map((milk) => {
          return <li key={milk.id}>{milk.name}
          <button id='xButton' onClick={()=>destroy(milk)}> x </button>
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
      dispatch(createMilk(name));
    },
    destroy: (milk) => {
      dispatch(deleteMilk(milk));
    }
  };
};

export default connect(mapState, mapDispatchToProps)(Milk);
