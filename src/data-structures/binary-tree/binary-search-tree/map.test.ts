import { AVLMap } from "./avl-map";
import { BSTMap } from "./bst-map";
import { RedBlackMap } from "./red-black-map";

const MapClasses = [BSTMap, AVLMap, RedBlackMap];

for (const Map of MapClasses) {
  test(`Testing ${Map.name}.constructor(), ${Map.name}.set(), ${Map.name}.length, and ${Map.name}.get()`, () => {
    const map = new Map<string, number>(
      ["0", 0],
      ["1", 1],
      ["2", 2],
      ["3", 3],
      ["4", 4]
    );
    expect(map.length).toBe(5);
    for (let i = 0; i < map.length; ++i) expect(map.get(`${i}`)).toBe(i);
  });
}
