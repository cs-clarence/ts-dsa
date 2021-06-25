import { defaultComparer } from "../helpers/default-comparer";

export function quickSort<T>(arr: T[], cmp = defaultComparer): T[] {
  // For some reason, arr.length <= 1 causes this function to overflow
  // ...but arr.length <= 2 works, but it isn't supposed to
  if (arr.length <= 2) return arr;

  const lesserEq: T[] = [];
  const greater: T[] = [];
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  for (const item of arr) {
    if (cmp(item, pivot) <= 0) {
      lesserEq.push(item);
    } else {
      greater.push(item);
    }
  }

  return quickSort(lesserEq, cmp).concat(quickSort(greater, cmp));
}
