import { defaultComparer } from "../helpers";

export function quickSort<T>(arr: T[], cmp = defaultComparer): T[] {
  // For some reason, arr.length <= 1 causes this function to overflow
  // ...but arr.length <= 2 works, but it isn't supposed to
  if (arr.length <= 1) return [...arr];

  let lesserEq: T[] = [];
  let greater: T[] = [];

  const len = arr.length;
  const pivotIndex = Math.floor(Math.random() * len);

  for (let i = 0; i < len; ++i) {
    if (i === pivotIndex) continue;
    if (cmp(arr[i], arr[pivotIndex]) <= 0) {
      lesserEq.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  lesserEq = quickSort(lesserEq, cmp);
  greater = quickSort(greater, cmp);

  return [...lesserEq, arr[pivotIndex], ...greater];
}
