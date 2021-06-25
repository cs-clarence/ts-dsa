import { linearSearch } from "./linear-search";

test("Testing linearSearch()", () => {
  expect(linearSearch([0, 1, 9, 6, 4, 3, 6], 4)).toBe(4);
  expect(linearSearch([0, 1, 9, 6, 4, 3, 6], 10)).toBeUndefined();
});
