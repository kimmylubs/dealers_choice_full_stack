import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// ACTION TYPES
const LOAD_TEAS = "LOAD_TEAS";
const LOAD_TOPPINGS = "LOAD_TOPPINGS";
const LOAD_MILKS = "LOAD_MILKS";
const SET_VIEW = "SET_VIEW";
const CREATE_TEA = "CREATE_TEA";
const CREATE_TOPPING = "CREATE_TOPPING";
const CREATE_MILK = "CREATE_MILK";
const DELETE_TEA = "DELETE_TEA";
const DELETE_TOPPING = "DELETE_TOPPING";
const DELETE_MILK = "DELETE_MILK;";
// const UPDATE_TEA = "UPDATE TEA";
// const UPDATE_TOPPING = "UPDATE_TOPPING";
// const UPDATE_MILK = "UPDATE_MILK";

// ACTION CREATORS
const _loadTeas = (teas) => ({ type: LOAD_TEAS, teas });
const _loadToppings = (toppings) => ({ type: LOAD_TOPPINGS, toppings });
const _loadMilks = (milks) => ({ type: LOAD_MILKS, milks });
const _createTea = (tea) => ({ type: CREATE_TEA, tea });
const _createTopping = (topping) => ({ type: CREATE_TOPPING, topping });
const _createMilk = (milk) => ({ type: CREATE_MILK, milk });
const _deleteTea = (tea) => ({ type: DELETE_TEA, tea });
const _deleteTopping = (topping) => ({ type: DELETE_TOPPING, topping });
const _deleteMilk = (milk) => ({ type: DELETE_MILK, milk });

// FUNCTIONS (read with applyMiddleWare and redux-thunk)

const loadTeas = () => {
  return async (dispatch) => {
    const teas = (await axios.get("/api/teas")).data;
    dispatch(_loadTeas(teas));
  };
};

const loadToppings = () => {
  return async (dispatch) => {
    const toppings = (await axios.get("/api/toppings")).data;
    dispatch(_loadToppings(toppings));
  };
};

const loadMilks = () => {
  return async (dispatch) => {
    const milks = (await axios.get("/api/milks")).data;
    dispatch(_loadMilks(milks));
  };
};

const createTea = (name) => {
  return async (dispatch) => {
    const tea = (await axios.post("/api/teas", { name })).data;
    dispatch(_createTea(tea));
  };
};

const createTopping = (name) => {
  return async (dispatch) => {
    const topping = (await axios.post("/api/toppings", { name })).data;
    dispatch(_createTopping(topping));
  };
};

const createMilk = (name) => {
  return async (dispatch) => {
    const milk = (await axios.post("/api/milks", { name })).data;
    dispatch(_createMilk(milk));
  };
};

const deleteTea = (tea) => {
  return async (dispatch) => {
    await axios.delete(`/api/teas/${tea.id}`);
    dispatch(_deleteTea(tea));
  };
};

const deleteTopping = (topping) => {
  return async (dispatch) => {
    await axios.delete(`/api/toppings/${topping.id}`);
    dispatch(_deleteTopping(topping));
  };
};

const deleteMilk = (milk) => {
  return async (dispatch) => {
    await axios.delete(`/api/milks/${milk.id}`);
    dispatch(_deleteMilk(milk));
  };
};

// COMBINE REDUCERS

const teaReducer = (state = [], action) => {
  console.log(action);
  if (action.type === LOAD_TEAS) {
    state = action.teas;
  }
  if (action.type === CREATE_TEA) {
    state = [...state, action.tea];
  }
  if (action.type === DELETE_TEA) {
    const teas = state.filter((tea) => tea.id !== action.tea.id);
    return teas;
  }
  return state;
};

const toppingReducer = (state = [], action) => {
  if (action.type === LOAD_TOPPINGS) {
    state = action.toppings;
  }
  if (action.type === CREATE_TOPPING) {
    state = [...state, action.topping];
  }
  if (action.type === DELETE_TOPPING) {
    const toppings = state.filter(
      (topping) => topping.id !== action.topping.id
    );
    return toppings;
  }
  return state;
};

const milkReducer = (state = [], action) => {
  if (action.type === LOAD_MILKS) {
    state = action.milks;
  }
  if (action.type === CREATE_MILK) {
    state = [...state, action.milk];
  }
  if (action.type === DELETE_MILK) {
    const milks = state.filter((milk) => milk.id !== action.milk.id);
    return milks;
  }
  return state;
};

const reducer = combineReducers({
  teas: teaReducer,
  toppings: toppingReducer,
  milks: milkReducer,
});

// CREATE STORE

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export {
  loadTeas,
  loadToppings,
  loadMilks,
  createTea,
  createTopping,
  createMilk,
  deleteTea,
  deleteTopping,
  deleteMilk,
};
