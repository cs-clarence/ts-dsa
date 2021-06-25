import { defaultComparer } from "../helpers";
import { swap } from "../helpers";

export function insertionSort<T>(arr: T[], cmp = defaultComparer) {
  const len = arr.length;
  const copied = [...arr];

  for (let i = 1; i < len; ++i)
    for (let j = i; j > 0 && cmp(copied[j], copied[j - 1]) < 0; --j)
      swap(copied, j, j - 1);

  return copied;
}
