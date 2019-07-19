// grab the add function from the add.js file in the utils folder
// grab react from the npm modile
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
store.dispatch(
  addExpense({ description: "Water Bill", amount: 1000, createdAt: 0 })
);

store.dispatch(
  addExpense({ description: "Gas Bill", amount: 2000, createdAt: 0 })
);

store.dispatch(setTextFilter("Water"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById("app"));
