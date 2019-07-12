// grab the add function from the add.js file in the utils folder
// grab react from the npm modile
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const AddExpensePage = () => <div>This is from my add expense component</div>;

const EditExpensePage = () => <div>This is from my edit expense component</div>;

const HelpPage = () => <div>This is from my help component</div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={} />
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("app"));
