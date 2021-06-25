import { defaultComparer } from "../helpers/default-comparer";
import { swap } from "../helpers/swap";

export function shellSort<T>(arr: T[], cmp = defaultComparer) {
  const copied = [...arr];
  const len = copied.length;
  let k = 1;
  while (k < len) k *= 2;

  for (; k >= 1; k /= 2)
    for (let i = k; i < len; ++i)
      for (let j = i; j > 0 && cmp(copied[j], copied[j - k]) < 0; j -= k)
        swap(copied, j, j - k);

  return copied;
}
