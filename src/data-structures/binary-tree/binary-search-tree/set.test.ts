import { AVLSet } from "./avl-set";
import { BSTSet } from "./bst-set";
import { RedBlackSet } from "./red-black-set";

const SetClasses = [BSTSet, AVLSet, RedBlackSet];

for (const Set of SetClasses) {
  test(`Testing ${Set.name}.constructor(), ${Set.name}.length, and ${Set.name}.contains()`, () => {
    const set = new Set<number>(0, 1, 2, 3, 4);
    expect(set.length).toBe(5);

    for (let i = 0; i < set.length; ++i) expect(set.contains(i)).toBe(true);
  });

  test(`Testing ${Set.name}.contains() with non-existed value`, () => {
    const set = new Set<number>(0, 1, 2, 3, 4);
    expect(set.contains(5)).toBe(false);
  });
}
