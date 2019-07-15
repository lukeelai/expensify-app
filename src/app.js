// grab the add function from the add.js file in the utils folder
// grab react from the npm modile
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<AppRouter />, document.getElementById("app"));
