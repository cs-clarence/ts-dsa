import { binarySearch } from "./binary-search";

test("Testing binarySearch()", () => {
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6], 4)).toBe(4);
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6], 10)).toBeUndefined();
});
