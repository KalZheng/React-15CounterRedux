import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "increment") {
    // beacause you are always need to return a new obejct (cannot change original state)
    // return { counter: state.counter + 1, showCounter: state.showCounter };
    // you can also create a new state and spread operate it and then return it for more flexibility
    newState.counter = newState.counter + 1;
  }
  if (action.type === "increase") {
    // return {
    //   counter: state.counter + action.amount,
    //   showCounter: state.showCounter,
    // };
    newState.counter = newState.counter + action.amount;
  }
  if (action.type === "decrement") {
    // return { counter: state.counter - 1, showCounter: state.showCounter };
    newState.counter = newState.counter - 1;
  }

  if (action.type === "toggle") {
    // return { showCounter: !state.showCounter, counter: state.counter };
    newState.showCounter = !newState.showCounter;
  }
  // return state;
  return newState;
};

const store = createStore(counterReducer);

export default store;
