import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should Setup Remove Expense Action Object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("Should Setup Edit Expense Action Object", () => {
  const action = editExpense("123abc", { note: "new note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "new note value" }
  });
});

test("Should Setup Add Expense Action Object With Provided Values", () => {
  const expenseData = {
    description: "test",
    amount: 102124,
    createdAt: 1000000,
    note: "test"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("Should Setup Add Expense Action Object With Default Values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
