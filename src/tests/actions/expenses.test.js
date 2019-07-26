import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should Setup Remove Expense Action Object", () => {
  const removeAction = removeExpense({ id: "123abc" });
  expect(removeAction).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("Should Setup Edit Expense Action Object", () => {
  const editAction = editExpense("123abc", { note: "new note value" });
  expect(editAction).toEqual({
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
  const addAction = addExpense(expenseData);
  expect(addAction).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("Should Setup Add Expense Action Object With Default Values", () => {
  const noAction = addExpense();
  expect(noAction).toEqual({
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
