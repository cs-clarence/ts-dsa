import { defaultComparer } from "../helpers";

function merge<T>(a: T[], b: T[], cmp = defaultComparer): T[] {
  const mergedArray: T[] = [];
  const iMax = a.length;
  const jMax = b.length;

  for (let i = 0, j = 0; i < iMax || j < jMax; ) {
    if (i < iMax && j < jMax) {
      if (cmp(a[i], b[j]) <= 0) {
        mergedArray.push(a[i++]);
      } else {
        mergedArray.push(b[j++]);
      }
    } else if (i < iMax) {
      mergedArray.push(...a.slice(i));
      break;
    } else {
      mergedArray.push(...b.slice(j));
      break;
    }
  }
  return mergedArray;
}

export function mergeSort<T>(arr: T[], cmp = defaultComparer): T[] {
  if (arr.length <= 1) return [...arr];
  const mid = Math.floor(arr.length / 2);
  return merge(
    mergeSort(arr.slice(0, mid), cmp),
    mergeSort(arr.slice(mid), cmp),
    cmp
  );
}
