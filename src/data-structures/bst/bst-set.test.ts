import { BSTSet } from "./bst-set";

test("Testing BSTSet.constructor(), BSTSet.length, and BSTSet.contains()", () => {
  const set = new BSTSet<number>(0, 1, 2, 3, 4);
  expect(set.length).toBe(5);

  for (let i = 0; i < set.length; ++i) expect(set.contains(i)).toBe(true);
});

test("Testing BSTSet.contains() with non-existed value", () => {
  const set = new BSTSet<number>(0, 1, 2, 3, 4);
  expect(set.contains(5)).toBe(false);
});
