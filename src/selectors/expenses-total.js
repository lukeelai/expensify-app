import React from "react";

export default expenses => {
  const amounts = expenses.map(({ amount }) => amount);
  const reducer = (sum, value) => sum + value;
  return amounts.reduce(reducer, 0);
};
