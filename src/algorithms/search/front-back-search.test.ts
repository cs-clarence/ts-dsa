import { frontBackSearch } from "./front-back-search";

test("Testing frontBackSearch()", () => {
  expect(frontBackSearch([0, 1, 9, 6, 4, 3, 6], 4) !== undefined).toBe(true);
  expect(frontBackSearch([0, 1, 9, 6, 4, 3, 6], 10)).toBeUndefined();
});
