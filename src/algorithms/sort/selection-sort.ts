import { defaultComparer } from "../helpers";

export function selectionSort<T>(arr: T[], cmp = defaultComparer) {
  const copied = [...arr];
  const sorted: T[] = [];

  while (copied.length > 0) {
    let index = 0;
    const len = copied.length;

    for (let i = 0; i < len; ++i)
      if (cmp(copied[i], copied[index]) < 0) index = i;

    const item = copied.splice(index, 1);
    sorted.push(...item);
  }

  return sorted;
}
