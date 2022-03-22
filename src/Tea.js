import React from "react";
import { connect } from "react-redux";
import { createTea, deleteTea } from "./store";
import { Link } from "react-router-dom";

const adj = [
  "Green",
  "Black",
  "Oolong",
  "Rose",
  "White",
  "Herbal",
  "Rooibos",
  "Rosehip",
  "Dandelion",
  "ElderBerry",
];

const Teas = ({ teas, create, destroy }) => {
  return (
    <div>
      <h4> 🍵 Tea Options 🍵 </h4>
      <button
        id="CreateButton"
        onClick={() => create(adj[Math.floor(Math.random() * adj.length)])}>
        Create Tea
      </button>
      <ul>
        {teas.map((tea) => {
          return (
            <li key={tea.id}>
              {tea.name}
              <button id="xButton" onClick={() => destroy(tea)}>
                x
              </button>
              <button>
              <Link to={`/teas/${tea.id}/update`}>Update</Link>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapState = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    create: (name) => {
      dispatch(createTea(name));
    },
    destroy: (tea) => {
      dispatch(deleteTea(tea));
    },
  };
};

export default connect(mapState, mapDispatchToProps)(Teas);
