import { defaultComparer } from "../helpers/default-comparer";

// merge() will take two ordered arrays and merge them
// the expected output is a sorted array
function merge<T>(a: T[], b: T[], cmp = defaultComparer): T[] {
  const mergedArray: T[] = [];
  const iMax = a.length;
  const jMax = b.length;

  for (let i = 0, j = 0; i < iMax || j < jMax; ) {
    if (i < iMax && j < jMax) {
      // console.log(`cmp ${a[i]} ${b[j]}`);
      if (cmp(a[i], b[j]) <= 0) {
        // console.log(`pushing ${a[i]} instead of ${b[j]}`);
        mergedArray.push(a[i++]);
      } else {
        // console.log(`pushing ${b[j]} instead of ${a[i]}`);
        mergedArray.push(b[j++]);
      }
    } else if (i < iMax) {
      // console.log("appending", ...a.slice(i));
      mergedArray.push(...a.slice(i));
      break;
    } else {
      // console.log("appending", ...b.slice(j));
      mergedArray.push(...b.slice(j));
      break;
    }
  }
  // console.log("merged array is", ...mergedArray);
  return mergedArray;
}

export function mergeSort<T>(arr: T[], cmp = defaultComparer): T[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return merge(
    mergeSort(arr.slice(0, mid), cmp),
    mergeSort(arr.slice(mid), cmp),
    cmp
  );
}
