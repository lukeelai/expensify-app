import moment from "moment";
import selectExpenses from "../../selectors/expenses";

const expenses = [
  {
    id: "1",
    description: "Fire",
    amount: 5500,
    note: "",
    createdAt: moment(0)
      .add(20, "days")
      .valueOf()
  },
  {
    id: "2",
    description: "Earth",
    amount: 195,
    note: "",
    createdAt: 0
  },
  {
    id: "3",
    description: "Wind",
    amount: 2000,
    note: "",
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  },
  {
    id: "4",
    description: "Water",
    amount: 999,
    note: "",
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  }
];

test("Should Filter By Text Value", () => {
  const textFilters = {
    text: "W",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const testResult = selectExpenses(expenses, textFilters);
  expect(testResult).toEqual([expenses[2], expenses[3]]);
});

test("Should Filter By End Date", () => {
  const endDateFilters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0)
  };

  const endDateResult = selectExpenses(expenses, endDateFilters);
  expect(endDateResult).toEqual([expenses[1], expenses[3]]);
});

test("Should Sort By Date", () => {
  const sortDateFilters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const sortDateResult = selectExpenses(expenses, sortDateFilters);
  expect(sortDateResult).toEqual([
    expenses[0],
    expenses[2],
    expenses[1],
    expenses[3]
  ]);
});

test("Should Sort By Amount", () => {
  const sortAmountFilters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };

  const sortAmountResult = selectExpenses(expenses, sortAmountFilters);
  expect(sortAmountResult).toEqual([
    expenses[0],
    expenses[2],
    expenses[3],
    expenses[1]
  ]);
});
