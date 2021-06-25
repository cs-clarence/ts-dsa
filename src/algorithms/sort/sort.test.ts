// Since all the sorting functions have similar interface, this test will just iterate through and do the same test for all of them
import { bubbleSort } from "./bubble-sort";
import { insertionSort } from "./insertion-sort";
import { mergeSort } from "./merge-sort";
import { quickSort } from "./quick-sort";
import { shellSort } from "./shell-sort";

const sortFns = [
  bubbleSort,
  insertionSort,
  bubbleSort,
  quickSort,
  mergeSort,
  shellSort,
];

for (const sortFn of sortFns) {
  test(`Testing ${sortFn.name}() in increasing order`, () => {
    const arr = sortFn([
      ...(function* () {
        for (let i = 0; i < 1000; ++i) yield Math.floor(Math.random() * 10000);
      })(),
    ]);
    expect(arr.length).toBe(1000);

    for (let i = 1; i < arr.length; ++i) {
      expect(arr[i - 1] <= arr[i]).toBe(true);
    }
  });

  test(`Testing ${sortFn.name}() in decreasing order`, () => {
    const arr = sortFn(
      [
        ...(function* () {
          for (let i = 0; i < 1000; ++i)
            yield Math.floor(Math.random() * 10000);
        })(),
      ],
      (a, b) => (a < b ? 1 : a > b ? -1 : 0)
    );
    expect(arr.length).toBe(1000);

    for (let i = 1; i < arr.length; ++i) {
      expect(arr[i - 1] >= arr[i]).toBe(true);
    }
  });
}
