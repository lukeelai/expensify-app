import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../actions/filters";
import moment from "moment";

test("Should Generate setStartDate Action Object", () => {
  const setStartAction = setStartDate(moment(0));
  expect(setStartAction).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("Should Generate setEndDate Action Object", () => {
  const setEndAction = setEndDate(moment(0));
  expect(setEndAction).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("Should Generate setTextFilter Action Object With Test Value", () => {
  const setTextAction = setTextFilter("test");
  expect(setTextAction).toEqual({
    type: "SET_TEXT_FILTER",
    text: "test"
  });
});

test("Should Generate setTextFilter Action Object With Default", () => {
  const setTextAction = setTextFilter();
  expect(setTextAction).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("Should Generate sortByAmount Action Object", () => {
  const sortAmountAction = sortByAmount();
  expect(sortAmountAction).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("Should Generate sortByDate Action Object", () => {
  const sortDateAction = sortByDate();
  expect(sortDateAction).toEqual({
    type: "SORT_BY_DATE"
  });
});
