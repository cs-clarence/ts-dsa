import { BSTSet } from "./bst-set";

let set = new BSTSet<number>();

test("Inserting 5 Unique Elements into the Set", () => {
  for (let i = 0; i < 5; ++i) set.insert(i);
});

test("Checking the Prescence of the 5 Unique Elements Inserted", () => {
  for (let i = 0; i < 5; ++i) expect(set.contains(i)).toBe(true);
});

test("Clearing the Set", () => {
  set.clear();
});

test("Checking the Length of the Set After Clearing", () => {
  expect(set.length).toBe(0);
});

test("Inserting the Same Element 5 Times into the Set", () => {
  for (let i = 0; i < 5; ++i) set.insert(1);
});

test("Checking for the Duplication after Inserting the Same Element 5 Times", () => {
  expect(set.length).toBe(1);
});

test("Checking the Set If It Contains An Element That Wasn't Inserted Before", () => {
  expect(set.contains(100)).toBe(false);
});
