import { defaultComparer } from "../helpers";
import { swap } from "../helpers";

export function bubbleSort<T>(arr: T[], cmp = defaultComparer) {
  const copied = [...arr];
  const len = copied.length;

  for (let i = len; i >= 0; --i) {
    for (let j = 1; j < i; ++j) {
      if (cmp(copied[j], copied[j - 1]) < 0) swap(copied, j, j - 1);
    }
  }

  return copied;
}
