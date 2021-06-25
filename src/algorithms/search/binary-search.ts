function calcMid(lo: number, hi: number) {
  return lo + Math.floor((hi - lo) / 2);
}

export function binarySearch<T>(arr: T[], item: T) {
  let lo = 0;
  let hi = arr.length - 1;
  let mid = calcMid(lo, hi);

  while (lo != mid) {
    const midItem = arr[mid];
    if (midItem === item) {
      return mid;
    } else if (midItem > item) {
      hi = mid;
      mid = calcMid(lo, hi);
    } else {
      lo = mid;
      mid = calcMid(lo, hi);
    }
  }
}
