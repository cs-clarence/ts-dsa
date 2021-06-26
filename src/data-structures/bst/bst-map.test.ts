import { BSTMap } from "./bst-map";

test("Testing BSTMap.constructor(), BSTMap.set(), BSTMap.length, and BSTMap.get()", () => {
  const map = new BSTMap<string, number>(
    ["0", 0],
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ["4", 4]
  );
  expect(map.length).toBe(5);
  for (let i = 0; i < map.length; ++i) expect(map.get(`${i}`)).toBe(i);
});
